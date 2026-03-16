import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-health-check.js';

describe('wu-health-check', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-health-check></wu-health-check>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-health-check></wu-health-check>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-health-check></wu-health-check>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-health-check label="Test"></wu-health-check>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-health-check value="Hello"></wu-health-check>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
