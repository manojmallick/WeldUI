import { LitElement } from 'lit';
console.log('[setup] patching getUpdateComplete');
const _orig = LitElement.prototype.getUpdateComplete as () => Promise<boolean>;
let callCount = 0;
(LitElement.prototype as any).getUpdateComplete = async function() {
  callCount++;
  if (callCount <= 2) console.log(`[getUpdateComplete] call #${callCount}, isUpdatePending=${(this as any).isUpdatePending}`);
  const result = await _orig.call(this);
  if (callCount <= 2) console.log(`[getUpdateComplete] after await, isUpdatePending=${(this as any).isUpdatePending}`);
  await Promise.resolve();
  if (callCount <= 2) console.log(`[getUpdateComplete] after tick, isUpdatePending=${(this as any).isUpdatePending}`);
  if ((this as any).isUpdatePending) {
    return (this as any).getUpdateComplete();
  }
  return result;
};
