import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-metric-card.js';

describe('wu-metric-card', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-metric-card></wu-metric-card>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-metric-card></wu-metric-card>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-metric-card></wu-metric-card>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-metric-card label="Test"></wu-metric-card>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-metric-card value="Hello"></wu-metric-card>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
