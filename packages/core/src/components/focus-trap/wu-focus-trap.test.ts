import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-focus-trap.js';

describe('wu-focus-trap', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-focus-trap></wu-focus-trap>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-focus-trap></wu-focus-trap>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-focus-trap></wu-focus-trap>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-focus-trap label="Test"></wu-focus-trap>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-focus-trap value="Hello"></wu-focus-trap>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
