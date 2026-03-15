import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuPrice } from './wu-price.js';
import './wu-price.js';

describe('wu-price', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuPrice>(html`<wu-price></wu-price>`);
    expect(el.currency).toBe('USD');
    expect(el.size).toBe('md');
  });

  it('formats the amount as currency', async () => {
    const el = await fixture<WuPrice>(html`<wu-price amount="9.99"></wu-price>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.current')?.textContent).toContain('9.99');
  });

  it('shows original price when set', async () => {
    const el = await fixture<WuPrice>(html`<wu-price amount="5.99" original-amount="9.99"></wu-price>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.original')).toBeTruthy();
  });

  it('shows badge when provided', async () => {
    const el = await fixture<WuPrice>(html`<wu-price amount="5" original-amount="10" badge="-50%"></wu-price>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.badge')?.textContent?.trim()).toBe('-50%');
  });

  it('does not show original when amount equals original', async () => {
    const el = await fixture<WuPrice>(html`<wu-price amount="10" original-amount="10"></wu-price>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.original')).toBeNull();
  });
});
