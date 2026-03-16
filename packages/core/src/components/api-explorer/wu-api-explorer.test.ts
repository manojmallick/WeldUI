import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-api-explorer.js';

describe('wu-api-explorer', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-api-explorer></wu-api-explorer>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-api-explorer></wu-api-explorer>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-api-explorer></wu-api-explorer>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-api-explorer label="Test"></wu-api-explorer>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-api-explorer value="Hello"></wu-api-explorer>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
