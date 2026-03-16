import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-image-crop.js';

describe('wu-image-crop', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-image-crop></wu-image-crop>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-image-crop></wu-image-crop>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-image-crop></wu-image-crop>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-image-crop label="Test"></wu-image-crop>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-image-crop value="Hello"></wu-image-crop>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
