import {
  counterPayload,
  docPayload,
  makeParty,
  pickAlg,
  sign,
  verify,
  type Alg,
  type Party,
} from './crypto';

export type SignatureRecord = {
  bytes: Uint8Array<ArrayBuffer>;
  signedAt: Date;
};

export type DemoState = {
  alg: Alg;
  text: string;
  muna: Party;
  madan: Party;
  munaSig: SignatureRecord | null;
  madanSig: SignatureRecord | null;
};

/**
 * The visitor's own device clock — the only clock a static page has. Kept
 * behind this one seam so a future trusted-timestamp source is a one-line
 * change here rather than a redesign of the demo.
 */
export function now(): Date {
  return new Date();
}

export type ForcedAlg = Alg | null;

/** An explicit override (AC 2's forcing mechanism) wins over feature detection. */
export async function resolveAlg(forced: ForcedAlg): Promise<Alg> {
  return forced ?? (await pickAlg());
}

export async function initState(text: string, forced: ForcedAlg): Promise<DemoState> {
  const alg = await resolveAlg(forced);
  const [muna, madan] = await Promise.all([makeParty('Muna', alg), makeParty('Madan', alg)]);
  return { alg, text, muna, madan, munaSig: null, madanSig: null };
}

/** Regenerates both keypairs so a reset is a clean start, not just cleared UI state. */
export async function resetState(state: DemoState, text: string): Promise<DemoState> {
  const [muna, madan] = await Promise.all([
    makeParty('Muna', state.alg),
    makeParty('Madan', state.alg),
  ]);
  return { alg: state.alg, text, muna, madan, munaSig: null, madanSig: null };
}

export async function signAsMuna(state: DemoState): Promise<DemoState> {
  const bytes = await sign(state.muna, docPayload(state.text));
  return { ...state, munaSig: { bytes, signedAt: now() } };
}

export async function counterSignAsMadan(state: DemoState): Promise<DemoState> {
  if (!state.munaSig) {
    throw new Error('Madan cannot counter-sign before Muna signs.');
  }
  const bytes = await sign(state.madan, counterPayload(state.text, state.munaSig.bytes));
  return { ...state, madanSig: { bytes, signedAt: now() } };
}

export type VerificationState = 'pending' | 'verified' | 'failed';

export type Verification = {
  muna: VerificationState;
  madan: VerificationState;
};

/**
 * Recomputes verification against the *current* text every call. This is
 * what makes the tamper step real rather than staged: editing the textarea
 * changes the bytes handed to crypto.subtle.verify, which returns false on
 * its own — nothing here decides "tampered" and forces a failure.
 */
export async function verifyAll(state: DemoState): Promise<Verification> {
  const doc = docPayload(state.text);

  const muna: VerificationState = state.munaSig
    ? (await verify(state.muna.keys.publicKey, state.alg, doc, state.munaSig.bytes))
      ? 'verified'
      : 'failed'
    : 'pending';

  let madan: VerificationState = 'pending';
  if (state.madanSig && state.munaSig) {
    const counter = counterPayload(state.text, state.munaSig.bytes);
    madan = (await verify(state.madan.keys.publicKey, state.alg, counter, state.madanSig.bytes))
      ? 'verified'
      : 'failed';
  }

  return { muna, madan };
}
