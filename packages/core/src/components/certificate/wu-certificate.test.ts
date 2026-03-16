import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-certificate.js';

describe('wu-certificate', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-certificate></wu-certificate>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-certificate></wu-certificate>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-certificate></wu-certificate>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-certificate label="Test"></wu-certificate>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-certificate value="Hello"></wu-certificate>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
