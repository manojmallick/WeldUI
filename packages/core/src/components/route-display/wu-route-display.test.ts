import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-route-display.js';

describe('wu-route-display', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-route-display></wu-route-display>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-route-display></wu-route-display>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-route-display></wu-route-display>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-route-display label="Test"></wu-route-display>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-route-display value="Hello"></wu-route-display>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
