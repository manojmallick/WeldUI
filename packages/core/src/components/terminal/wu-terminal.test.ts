import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-terminal.js';

describe('wu-terminal', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-terminal></wu-terminal>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-terminal></wu-terminal>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-terminal></wu-terminal>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-terminal label="Test"></wu-terminal>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-terminal value="Hello"></wu-terminal>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
