import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-share-button.js';

describe('wu-share-button', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-share-button></wu-share-button>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-share-button></wu-share-button>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-share-button></wu-share-button>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-share-button label="Test"></wu-share-button>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-share-button value="Hello"></wu-share-button>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
