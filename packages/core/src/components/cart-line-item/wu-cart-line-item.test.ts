import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuCartLineItem } from './wu-cart-line-item.js';
import './wu-cart-line-item.js';

describe('wu-cart-line-item', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuCartLineItem>(html`<wu-cart-line-item></wu-cart-line-item>`);
    expect(el.quantity).toBe(1);
  });

  it('shows product name', async () => {
    const el = await fixture<WuCartLineItem>(html`<wu-cart-line-item name="Widget"></wu-cart-line-item>`);
    expect(el.shadowRoot!.querySelector('.name')?.textContent?.trim()).toBe('Widget');
  });

  it('emits wu-remove when remove button clicked', async () => {
    const el = await fixture<WuCartLineItem>(html`<wu-cart-line-item item-id="x1"></wu-cart-line-item>`);
    const handler = vi.fn();
    el.addEventListener('wu-remove', handler);
    (el.shadowRoot!.querySelector('.remove-btn') as HTMLButtonElement).click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.id).toBe('x1');
  });

  it('emits wu-quantity-change on increment', async () => {
    const el = await fixture<WuCartLineItem>(html`<wu-cart-line-item item-id="x2"></wu-cart-line-item>`);
    const handler = vi.fn();
    el.addEventListener('wu-quantity-change', handler);
    const [, incBtn] = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.qty-btn');
    incBtn.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.quantity).toBe(2);
  });

  it('shows variant when provided', async () => {
    const el = await fixture<WuCartLineItem>(html`<wu-cart-line-item variant="Red / M"></wu-cart-line-item>`);
    expect(el.shadowRoot!.querySelector('.variant')?.textContent?.trim()).toBe('Red / M');
  });
});
