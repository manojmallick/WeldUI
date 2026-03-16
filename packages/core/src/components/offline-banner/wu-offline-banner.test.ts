import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-offline-banner.js';

describe('wu-offline-banner', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-offline-banner></wu-offline-banner>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-offline-banner></wu-offline-banner>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-offline-banner></wu-offline-banner>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-offline-banner label="Test"></wu-offline-banner>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-offline-banner value="Hello"></wu-offline-banner>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
