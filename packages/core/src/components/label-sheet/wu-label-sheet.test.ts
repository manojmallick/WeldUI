import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-label-sheet.js';

describe('wu-label-sheet', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-label-sheet></wu-label-sheet>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-label-sheet></wu-label-sheet>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-label-sheet></wu-label-sheet>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-label-sheet label="Test"></wu-label-sheet>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-label-sheet value="Hello"></wu-label-sheet>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
