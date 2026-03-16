import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-address-display.js';

describe('wu-address-display', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-address-display></wu-address-display>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-address-display></wu-address-display>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-address-display></wu-address-display>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-address-display label="Test"></wu-address-display>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-address-display value="Hello"></wu-address-display>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
