import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-reduced-motion.js';

describe('wu-reduced-motion', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-reduced-motion></wu-reduced-motion>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-reduced-motion></wu-reduced-motion>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-reduced-motion></wu-reduced-motion>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-reduced-motion label="Test"></wu-reduced-motion>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-reduced-motion value="Hello"></wu-reduced-motion>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
