import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-sr-only.js';

describe('wu-sr-only', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-sr-only></wu-sr-only>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-sr-only></wu-sr-only>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-sr-only></wu-sr-only>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-sr-only label="Test"></wu-sr-only>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-sr-only value="Hello"></wu-sr-only>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
