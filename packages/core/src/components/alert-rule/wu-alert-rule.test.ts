import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-alert-rule.js';

describe('wu-alert-rule', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-alert-rule></wu-alert-rule>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-alert-rule></wu-alert-rule>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-alert-rule></wu-alert-rule>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-alert-rule label="Test"></wu-alert-rule>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-alert-rule value="Hello"></wu-alert-rule>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
