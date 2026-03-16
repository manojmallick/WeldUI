import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-location-picker.js';

describe('wu-location-picker', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-location-picker></wu-location-picker>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-location-picker></wu-location-picker>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-location-picker></wu-location-picker>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-location-picker label="Test"></wu-location-picker>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-location-picker value="Hello"></wu-location-picker>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
