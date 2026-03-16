import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-confetti.js';

describe('wu-confetti', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-confetti></wu-confetti>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-confetti></wu-confetti>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-confetti></wu-confetti>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-confetti label="Test"></wu-confetti>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-confetti value="Hello"></wu-confetti>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
