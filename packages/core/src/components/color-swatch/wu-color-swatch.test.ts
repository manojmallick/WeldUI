import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-color-swatch.js';

describe('wu-color-swatch', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-color-swatch></wu-color-swatch>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-color-swatch></wu-color-swatch>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-color-swatch></wu-color-swatch>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-color-swatch label="Test"></wu-color-swatch>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-color-swatch value="Hello"></wu-color-swatch>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
