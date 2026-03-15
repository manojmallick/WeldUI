/**
 * Vitest setup file for WeldUI core tests.
 *
 * Problem: happy-dom fires attributeChangedCallback AFTER connectedCallback
 * (non-spec-compliant). Lit's first render happens before attributes are set,
 * so conditional renders (label, error, etc.) use stale default values.
 *
 * Fix: Patch ReactiveElement.getUpdateComplete to drain ALL pending update
 * cycles — including ones triggered by late attributeChangedCallbacks — before
 * resolving. This makes `fixture()` from @open-wc/testing see a fully rendered
 * element every time.
 */
import { LitElement } from 'lit';

const _origGetUpdateComplete = LitElement.prototype.getUpdateComplete as () => Promise<boolean>;

(LitElement.prototype as any).getUpdateComplete = async function (
  this: LitElement & { isUpdatePending?: boolean }
): Promise<boolean> {
  const result = await _origGetUpdateComplete.call(this);

  // Give happy-dom one macrotask turn to fire any pending attributeChangedCallbacks.
  // happy-dom fires attributeChangedCallback AFTER connectedCallback (non-spec), and
  // appears to do so as a macrotask (setTimeout), so a single microtask (Promise.resolve)
  // is not sufficient — we must yield to the macrotask queue.
  await new Promise<void>(r => setTimeout(r, 0));

  // If a follow-up update was triggered (e.g., from a late attribute), wait for it.
  if (this.isUpdatePending) {
    return (this as any).getUpdateComplete();
  }

  return result;
};
