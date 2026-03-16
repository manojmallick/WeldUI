import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-pdf-viewer.js';

describe('wu-pdf-viewer', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-pdf-viewer></wu-pdf-viewer>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-pdf-viewer></wu-pdf-viewer>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-pdf-viewer></wu-pdf-viewer>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-pdf-viewer label="Test"></wu-pdf-viewer>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-pdf-viewer value="Hello"></wu-pdf-viewer>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
