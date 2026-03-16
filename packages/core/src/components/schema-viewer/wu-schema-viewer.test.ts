import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-schema-viewer.js';

describe('wu-schema-viewer', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-schema-viewer></wu-schema-viewer>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-schema-viewer></wu-schema-viewer>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-schema-viewer></wu-schema-viewer>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-schema-viewer label="Test"></wu-schema-viewer>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-schema-viewer value="Hello"></wu-schema-viewer>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
