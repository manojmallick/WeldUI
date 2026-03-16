import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-log-stream.js';

describe('wu-log-stream', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-log-stream></wu-log-stream>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-log-stream></wu-log-stream>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-log-stream></wu-log-stream>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-log-stream label="Test"></wu-log-stream>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-log-stream value="Hello"></wu-log-stream>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
