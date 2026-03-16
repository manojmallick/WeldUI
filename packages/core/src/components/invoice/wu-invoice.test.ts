import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-invoice.js';

describe('wu-invoice', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-invoice></wu-invoice>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-invoice></wu-invoice>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-invoice></wu-invoice>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-invoice label="Test"></wu-invoice>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-invoice value="Hello"></wu-invoice>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
