import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-install-prompt.js';

describe('wu-install-prompt', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-install-prompt></wu-install-prompt>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-install-prompt></wu-install-prompt>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-install-prompt></wu-install-prompt>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-install-prompt label="Test"></wu-install-prompt>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-install-prompt value="Hello"></wu-install-prompt>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
