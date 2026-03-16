import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-uptime-bar.js';

describe('wu-uptime-bar', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-uptime-bar></wu-uptime-bar>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-uptime-bar></wu-uptime-bar>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-uptime-bar></wu-uptime-bar>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-uptime-bar label="Test"></wu-uptime-bar>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-uptime-bar value="Hello"></wu-uptime-bar>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
