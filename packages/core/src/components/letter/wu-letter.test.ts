import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-letter.js';

describe('wu-letter', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-letter></wu-letter>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-letter></wu-letter>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-letter></wu-letter>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-letter label="Test"></wu-letter>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-letter value="Hello"></wu-letter>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
