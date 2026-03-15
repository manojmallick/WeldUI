import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-number.js';
import type { WuNumber } from './wu-number.js';

describe('wu-number', () => {
  it('renders decimal number', async () => {
    const el = await fixture<WuNumber>(html`<wu-number value="1234.56" locale="en-US"></wu-number>`);
    const text = el.shadowRoot!.querySelector('.num')?.textContent?.trim() ?? '';
    expect(text).toContain('1,234.56');
  });
  it('renders compact format', async () => {
    const el = await fixture<WuNumber>(html`<wu-number value="1200000" format="compact" locale="en-US"></wu-number>`);
    const text = el.shadowRoot!.querySelector('.num')?.textContent?.trim() ?? '';
    expect(text).toContain('M');
  });
  it('renders currency format', async () => {
    const el = await fixture<WuNumber>(html`<wu-number value="99.99" format="currency" currency="USD" locale="en-US"></wu-number>`);
    const text = el.shadowRoot!.querySelector('.num')?.textContent?.trim() ?? '';
    expect(text).toContain('$');
  });
  it('renders percent format', async () => {
    const el = await fixture<WuNumber>(html`<wu-number value="0.85" format="percent" locale="en-US"></wu-number>`);
    const text = el.shadowRoot!.querySelector('.num')?.textContent?.trim() ?? '';
    expect(text).toContain('%');
  });
  it('has aria-label', async () => {
    const el = await fixture<WuNumber>(html`<wu-number value="42"></wu-number>`);
    expect(el.shadowRoot!.querySelector('[aria-label]')).toBeTruthy();
  });
});
