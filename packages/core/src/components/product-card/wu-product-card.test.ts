import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuProductCard } from './wu-product-card.js';
import './wu-product-card.js';

describe('wu-product-card', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuProductCard>(html`<wu-product-card></wu-product-card>`);
    expect(el.soldOut).toBe(false);
  });

  it('shows product name', async () => {
    const el = await fixture<WuProductCard>(html`<wu-product-card name="Cool Sneakers"></wu-product-card>`);
    expect(el.shadowRoot!.querySelector('.name')?.textContent?.trim()).toBe('Cool Sneakers');
  });

  it('emits wu-add-to-cart with product id', async () => {
    const el = await fixture<WuProductCard>(html`<wu-product-card product-id="abc" name="Shoes" price="$50"></wu-product-card>`);
    const handler = vi.fn();
    el.addEventListener('wu-add-to-cart', handler);
    (el.shadowRoot!.querySelector('.add-btn') as HTMLButtonElement).click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.id).toBe('abc');
  });

  it('disables add button when sold out', async () => {
    const el = await fixture<WuProductCard>(html`<wu-product-card sold-out></wu-product-card>`);
    const btn = el.shadowRoot!.querySelector('.add-btn') as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });

  it('shows badge when provided', async () => {
    const el = await fixture<WuProductCard>(html`<wu-product-card badge="New"></wu-product-card>`);
    expect(el.shadowRoot!.querySelector('.badge')?.textContent?.trim()).toBe('New');
  });
});
