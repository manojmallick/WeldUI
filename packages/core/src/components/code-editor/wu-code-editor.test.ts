import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-code-editor.js';

describe('wu-code-editor', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-code-editor></wu-code-editor>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-code-editor></wu-code-editor>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-code-editor></wu-code-editor>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-code-editor label="Test"></wu-code-editor>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-code-editor value="Hello"></wu-code-editor>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
