import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-receipt.js';

describe('wu-receipt', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-receipt></wu-receipt>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-receipt></wu-receipt>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-receipt></wu-receipt>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-receipt label="Test"></wu-receipt>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-receipt value="Hello"></wu-receipt>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
