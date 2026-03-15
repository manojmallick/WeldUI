import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuCartIcon } from './wu-cart-icon.js';
import './wu-cart-icon.js';

describe('wu-cart-icon', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuCartIcon>(html`<wu-cart-icon></wu-cart-icon>`);
    expect(el.count).toBe(0);
  });

  it('shows no badge when count is 0', async () => {
    const el = await fixture<WuCartIcon>(html`<wu-cart-icon></wu-cart-icon>`);
    expect(el.shadowRoot!.querySelector('.badge')).toBeNull();
  });

  it('shows badge with count', async () => {
    const el = await fixture<WuCartIcon>(html`<wu-cart-icon count="5"></wu-cart-icon>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.badge')?.textContent?.trim()).toBe('5');
  });

  it('shows 99+ for counts above 99', async () => {
    const el = await fixture<WuCartIcon>(html`<wu-cart-icon count="120"></wu-cart-icon>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.badge')?.textContent?.trim()).toBe('99+');
  });

  it('emits wu-click', async () => {
    const el = await fixture<WuCartIcon>(html`<wu-cart-icon></wu-cart-icon>`);
    const handler = vi.fn();
    el.addEventListener('wu-click', handler);
    el.shadowRoot!.querySelector('.cart-btn')!.dispatchEvent(new MouseEvent('click'));
    expect(handler).toHaveBeenCalledOnce();
  });
});
