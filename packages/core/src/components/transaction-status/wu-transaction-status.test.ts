import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-transaction-status.js';

describe('wu-transaction-status', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-transaction-status></wu-transaction-status>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-transaction-status></wu-transaction-status>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-transaction-status></wu-transaction-status>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-transaction-status label="Test"></wu-transaction-status>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-transaction-status value="Hello"></wu-transaction-status>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
