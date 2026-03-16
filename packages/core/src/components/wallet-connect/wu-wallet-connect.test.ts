import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-wallet-connect.js';

describe('wu-wallet-connect', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-wallet-connect></wu-wallet-connect>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-wallet-connect></wu-wallet-connect>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-wallet-connect></wu-wallet-connect>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-wallet-connect label="Test"></wu-wallet-connect>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-wallet-connect value="Hello"></wu-wallet-connect>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
