import { describe, expect, it } from 'vitest';
import {
  counterSignAsMadan,
  initState,
  resetState,
  signAsMuna,
  verifyAll,
  type ForcedAlg,
} from './state';

// This is the exact mechanism the browser exercises through the ?alg=ecdsa
// URL flag (AC 2): a forced algorithm fed into initState instead of feature
// detection, with no monkeypatching of crypto.subtle.
const forced: ForcedAlg = 'ECDSA';

describe('demo state machine (forced ECDSA fallback path)', () => {
  it('runs the full sign / counter-sign / verify flow', async () => {
    let state = await initState('मुना र मदन दुवै यस सम्झौताका सर्तमा सहमत छन्।', forced);
    expect(state.alg).toBe('ECDSA');
    expect(state.muna.keys.publicKey).toBeDefined();
    expect(state.madan.keys.publicKey).toBeDefined();

    let v = await verifyAll(state);
    expect(v).toEqual({ muna: 'pending', madan: 'pending' });

    state = await signAsMuna(state);
    v = await verifyAll(state);
    expect(v).toEqual({ muna: 'verified', madan: 'pending' });

    state = await counterSignAsMadan(state);
    v = await verifyAll(state);
    expect(v).toEqual({ muna: 'verified', madan: 'verified' });
  });

  it('flips both signatures to failed the instant the signed text is edited', async () => {
    let state = await initState('मुना र मदन दुवै यस सम्झौताका सर्तमा सहमत छन्।', forced);
    state = await signAsMuna(state);
    state = await counterSignAsMadan(state);

    expect(await verifyAll(state)).toEqual({ muna: 'verified', madan: 'verified' });

    // The visitor edits one character of the already-signed text.
    state = { ...state, text: state.text + 'x' };

    expect(await verifyAll(state)).toEqual({ muna: 'failed', madan: 'failed' });
  });

  it('reset regenerates both keypairs and returns to a clean, unsigned state', async () => {
    const defaultText = 'मुना र मदन दुवै यस सम्झौताका सर्तमा सहमत छन्।';
    let state = await initState(defaultText, forced);
    state = await signAsMuna(state);
    state = await counterSignAsMadan(state);

    const munaKeyBefore = state.muna.keys.publicKey;
    state = await resetState(state, defaultText);

    expect(state.munaSig).toBeNull();
    expect(state.madanSig).toBeNull();
    expect(state.text).toBe(defaultText);
    expect(state.muna.keys.publicKey).not.toBe(munaKeyBefore);
    expect(await verifyAll(state)).toEqual({ muna: 'pending', madan: 'pending' });
  });
});
