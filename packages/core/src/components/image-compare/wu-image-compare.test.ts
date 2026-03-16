import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-image-compare.js';

describe('wu-image-compare', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-image-compare></wu-image-compare>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-image-compare></wu-image-compare>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-image-compare></wu-image-compare>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-image-compare label="Test"></wu-image-compare>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-image-compare value="Hello"></wu-image-compare>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
