import { describe, expect, it } from 'vitest';
import { counterPayload, docPayload, makeParty, sign, verify, type Alg } from './crypto';

// Both algorithms run through every case so the ECDSA fallback path is
// exercised the same as Ed25519, not treated as an afterthought.
const algs: Alg[] = ['Ed25519', 'ECDSA'];

describe.each(algs)('%s signatures', (alg) => {
  it('verifies a signature produced by crypto.subtle for its own signer', async () => {
    const muna = await makeParty('Muna', alg);
    const payload = docPayload('यो सम्झौता हो।');
    const sig = await sign(muna, payload);

    expect(sig.byteLength).toBe(64);
    await expect(verify(muna.keys.publicKey, alg, payload, sig)).resolves.toBe(true);
  });

  it('fails verification when the signed text is changed after signing', async () => {
    const muna = await makeParty('Muna', alg);
    const original = docPayload('यो सम्झौता हो।');
    const sig = await sign(muna, original);
    const tampered = docPayload('यो सम्झौता होइन।');

    await expect(verify(muna.keys.publicKey, alg, tampered, sig)).resolves.toBe(false);
  });

  it("Madan's counter-signature verifies over the document and Muna's signature together", async () => {
    const muna = await makeParty('Muna', alg);
    const madan = await makeParty('Madan', alg);
    const text = 'यो सम्झौता हो।';
    const doc = docPayload(text);

    const munaSig = await sign(muna, doc);
    const counter = counterPayload(text, munaSig);
    const madanSig = await sign(madan, counter);

    await expect(verify(madan.keys.publicKey, alg, counter, madanSig)).resolves.toBe(true);
  });

  it("Madan's counter-signature stops verifying if Muna's signature bytes are swapped out, proving it covers the signature and not just the text", async () => {
    const muna = await makeParty('Muna', alg);
    const madan = await makeParty('Madan', alg);
    const text = 'यो सम्झौता हो।';
    const doc = docPayload(text);

    const munaSig = await sign(muna, doc);
    const madanSig = await sign(madan, counterPayload(text, munaSig));

    const forgedFirstSig = new Uint8Array(munaSig);
    forgedFirstSig[0] ^= 0xff;
    const forgedCounter = counterPayload(text, forgedFirstSig);

    await expect(verify(madan.keys.publicKey, alg, forgedCounter, madanSig)).resolves.toBe(false);
  });
});

it('generates independent keypairs for Muna and Madan', async () => {
  const muna = await makeParty('Muna', 'ECDSA');
  const madan = await makeParty('Madan', 'ECDSA');

  const doc = docPayload('परीक्षण');
  const munaSig = await sign(muna, doc);

  // Madan's key must not validate a signature it never produced.
  await expect(verify(madan.keys.publicKey, 'ECDSA', doc, munaSig)).resolves.toBe(false);
});
