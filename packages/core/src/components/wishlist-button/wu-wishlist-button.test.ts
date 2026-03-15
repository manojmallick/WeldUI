import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-wishlist-button.js';
import type { WuWishlistButton } from './wu-wishlist-button.js';

describe('wu-wishlist-button', () => {
  it('renders inactive by default', async () => {
    const el = await fixture<WuWishlistButton>(html`<wu-wishlist-button></wu-wishlist-button>`);
    expect(el.active).toBe(false);
  });

  it('reflects active attribute', async () => {
    const el = await fixture<WuWishlistButton>(html`<wu-wishlist-button active></wu-wishlist-button>`);
    expect(el.hasAttribute('active')).toBe(true);
  });

  it('toggles active on click and emits wu-toggle', async () => {
    const el = await fixture<WuWishlistButton>(html`<wu-wishlist-button></wu-wishlist-button>`);
    const handler = vi.fn();
    el.addEventListener('wu-toggle', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.btn')!.click();
    expect(el.active).toBe(true);
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail).toEqual({ active: true });
  });

  it('shows count when count > 0', async () => {
    const el = await fixture<WuWishlistButton>(html`<wu-wishlist-button count="7"></wu-wishlist-button>`);
    const count = el.shadowRoot!.querySelector('.count');
    expect(count?.textContent?.trim()).toBe('7');
  });

  it('hides count element when count is 0', async () => {
    const el = await fixture<WuWishlistButton>(html`<wu-wishlist-button count="0"></wu-wishlist-button>`);
    const count = el.shadowRoot!.querySelector('.count');
    expect(count).toBeNull();
  });
});
