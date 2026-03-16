import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-distance-calculator.js';

describe('wu-distance-calculator', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-distance-calculator></wu-distance-calculator>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-distance-calculator></wu-distance-calculator>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-distance-calculator></wu-distance-calculator>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-distance-calculator label="Test"></wu-distance-calculator>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-distance-calculator value="Hello"></wu-distance-calculator>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
