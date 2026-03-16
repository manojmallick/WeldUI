import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-battery-indicator.js';

describe('wu-battery-indicator', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-battery-indicator></wu-battery-indicator>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-battery-indicator></wu-battery-indicator>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-battery-indicator></wu-battery-indicator>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-battery-indicator label="Test"></wu-battery-indicator>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-battery-indicator value="Hello"></wu-battery-indicator>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
