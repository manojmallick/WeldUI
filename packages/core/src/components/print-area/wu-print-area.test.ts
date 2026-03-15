import { describe, expect, it } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-print-area.js';
import type { WuPrintArea } from './wu-print-area.js';

describe('wu-print-area', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuPrintArea>(html`<wu-print-area></wu-print-area>`);
    expect(el.printOnly).toBe(false);
    expect(el.noPrint).toBe(false);
  });

  it('sets print-only attribute', async () => {
    const el = await fixture<WuPrintArea>(html`<wu-print-area print-only></wu-print-area>`);
    expect(el.printOnly).toBe(true);
    expect(el.hasAttribute('print-only')).toBe(true);
  });

  it('sets no-print attribute', async () => {
    const el = await fixture<WuPrintArea>(html`<wu-print-area no-print></wu-print-area>`);
    expect(el.noPrint).toBe(true);
    expect(el.hasAttribute('no-print')).toBe(true);
  });

  it('renders slotted content', async () => {
    const el = await fixture<WuPrintArea>(
      html`<wu-print-area><p>Invoice</p></wu-print-area>`,
    );
    expect(el.textContent).toContain('Invoice');
  });

  it('renders the base div', async () => {
    const el = await fixture<WuPrintArea>(html`<wu-print-area></wu-print-area>`);
    expect(el.shadowRoot?.querySelector('div[part="base"]')).toBeTruthy();
  });
});
