import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-update-available.js';

describe('wu-update-available', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-update-available></wu-update-available>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-update-available></wu-update-available>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-update-available></wu-update-available>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-update-available label="Test"></wu-update-available>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-update-available value="Hello"></wu-update-available>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
