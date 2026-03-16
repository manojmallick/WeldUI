import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-webhook-log.js';

describe('wu-webhook-log', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-webhook-log></wu-webhook-log>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-webhook-log></wu-webhook-log>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-webhook-log></wu-webhook-log>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-webhook-log label="Test"></wu-webhook-log>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-webhook-log value="Hello"></wu-webhook-log>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
