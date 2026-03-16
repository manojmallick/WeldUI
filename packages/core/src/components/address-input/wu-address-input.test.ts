import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-address-input.js';

describe('wu-address-input', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-address-input></wu-address-input>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-address-input></wu-address-input>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-address-input></wu-address-input>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-address-input label="Test"></wu-address-input>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-address-input value="Hello"></wu-address-input>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
