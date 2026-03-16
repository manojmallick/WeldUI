import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-gas-fee.js';

describe('wu-gas-fee', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-gas-fee></wu-gas-fee>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-gas-fee></wu-gas-fee>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-gas-fee></wu-gas-fee>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-gas-fee label="Test"></wu-gas-fee>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-gas-fee value="Hello"></wu-gas-fee>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
