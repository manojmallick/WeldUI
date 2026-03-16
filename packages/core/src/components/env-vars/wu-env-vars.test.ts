import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-env-vars.js';

describe('wu-env-vars', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-env-vars></wu-env-vars>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-env-vars></wu-env-vars>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-env-vars></wu-env-vars>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-env-vars label="Test"></wu-env-vars>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-env-vars value="Hello"></wu-env-vars>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
