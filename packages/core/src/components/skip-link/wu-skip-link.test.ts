import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-skip-link.js';

describe('wu-skip-link', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-skip-link></wu-skip-link>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-skip-link></wu-skip-link>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-skip-link></wu-skip-link>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-skip-link label="Test"></wu-skip-link>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-skip-link value="Hello"></wu-skip-link>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
