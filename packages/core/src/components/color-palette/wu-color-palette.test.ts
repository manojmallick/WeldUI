import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-color-palette.js';

describe('wu-color-palette', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-color-palette></wu-color-palette>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-color-palette></wu-color-palette>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-color-palette></wu-color-palette>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-color-palette label="Test"></wu-color-palette>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-color-palette value="Hello"></wu-color-palette>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
