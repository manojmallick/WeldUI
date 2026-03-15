import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuQuantityPicker } from './wu-quantity-picker.js';
import './wu-quantity-picker.js';

describe('wu-quantity-picker', () => {
  it('renders with default value of 1', async () => {
    const el = await fixture<WuQuantityPicker>(html`<wu-quantity-picker></wu-quantity-picker>`);
    expect(el.value).toBe(1);
  });

  it('increments value', async () => {
    const el = await fixture<WuQuantityPicker>(html`<wu-quantity-picker></wu-quantity-picker>`);
    const [, incBtn] = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.btn');
    incBtn.click();
    await el.updateComplete;
    expect(el.value).toBe(2);
  });

  it('decrements value', async () => {
    const el = await fixture<WuQuantityPicker>(html`<wu-quantity-picker value="3"></wu-quantity-picker>`);
    await el.updateComplete;
    const [decBtn] = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.btn');
    decBtn.click();
    await el.updateComplete;
    expect(el.value).toBe(2);
  });

  it('emits wu-change on increment', async () => {
    const el = await fixture<WuQuantityPicker>(html`<wu-quantity-picker></wu-quantity-picker>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const [, incBtn] = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.btn');
    incBtn.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe(2);
  });

  it('does not go below min', async () => {
    const el = await fixture<WuQuantityPicker>(html`<wu-quantity-picker value="1" min="1"></wu-quantity-picker>`);
    const [decBtn] = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.btn');
    decBtn.click();
    await el.updateComplete;
    expect(el.value).toBe(1);
  });
});
