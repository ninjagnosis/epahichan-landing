/**
 * The only file in this demo that touches crypto.subtle. Everything here is
 * a real Web Crypto operation — nothing here simulates a signature.
 */

export type Alg = 'Ed25519' | 'ECDSA';

export type Party = {
  name: string;
  alg: Alg;
  keys: CryptoKeyPair;
};

function generateParams(alg: Alg): EcKeyGenParams | AlgorithmIdentifier {
  return alg === 'Ed25519' ? { name: 'Ed25519' } : { name: 'ECDSA', namedCurve: 'P-256' };
}

function signParams(alg: Alg): AlgorithmIdentifier | EcdsaParams {
  return alg === 'Ed25519' ? { name: 'Ed25519' } : { name: 'ECDSA', hash: 'SHA-256' };
}

let cachedAlg: Alg | null = null;

/**
 * Feature-detects Ed25519 by attempting a real generateKey call rather than
 * sniffing the UA — Safari <17 and Chrome/Edge <137 throw NotSupportedError
 * instead of exposing a capability flag. Falls back to the universally
 * supported ECDSA P-256. Cached after the first probe.
 */
export async function pickAlg(): Promise<Alg> {
  if (cachedAlg) return cachedAlg;
  try {
    await crypto.subtle.generateKey({ name: 'Ed25519' }, true, ['sign', 'verify']);
    cachedAlg = 'Ed25519';
  } catch {
    cachedAlg = 'ECDSA';
  }
  return cachedAlg;
}

export async function makeParty(name: string, alg: Alg): Promise<Party> {
  const keys = (await crypto.subtle.generateKey(generateParams(alg), true, [
    'sign',
    'verify',
  ])) as CryptoKeyPair;
  return { name, alg, keys };
}

export async function sign(
  party: Party,
  payload: Uint8Array<ArrayBuffer>,
): Promise<Uint8Array<ArrayBuffer>> {
  const sig = await crypto.subtle.sign(signParams(party.alg), party.keys.privateKey, payload);
  return new Uint8Array(sig);
}

export async function verify(
  pub: CryptoKey,
  alg: Alg,
  payload: Uint8Array<ArrayBuffer>,
  sig: Uint8Array<ArrayBuffer>,
): Promise<boolean> {
  return crypto.subtle.verify(signParams(alg), pub, sig, payload);
}

/** The document bytes Muna signs. */
export function docPayload(text: string): Uint8Array<ArrayBuffer> {
  return new TextEncoder().encode(text);
}

// Domain separator so a counter-signature payload can never collide with a
// plain document payload, whatever the text and signature bytes happen to be.
const COUNTER_DOMAIN = 0x02;

/**
 * The bytes Madan counter-signs: the document *and* Muna's signature, framed
 * unambiguously (domain byte + 32-bit big-endian document length) so two
 * different (text, signature) pairs can never serialize to the same bytes.
 * This is the sequencing guarantee the demo teaches — Madan's signature
 * commits to "this text, as Muna signed it", not just to the text alone.
 */
export function counterPayload(
  text: string,
  firstSig: Uint8Array<ArrayBuffer>,
): Uint8Array<ArrayBuffer> {
  const doc = docPayload(text);
  const out = new Uint8Array(1 + 4 + doc.length + firstSig.length);
  const view = new DataView(out.buffer);
  out[0] = COUNTER_DOMAIN;
  view.setUint32(1, doc.length, false);
  out.set(doc, 5);
  out.set(firstSig, 5 + doc.length);
  return out;
}
