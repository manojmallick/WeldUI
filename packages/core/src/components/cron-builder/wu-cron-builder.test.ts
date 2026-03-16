import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-cron-builder.js';

describe('wu-cron-builder', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-cron-builder></wu-cron-builder>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-cron-builder></wu-cron-builder>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-cron-builder></wu-cron-builder>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-cron-builder label="Test"></wu-cron-builder>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-cron-builder value="Hello"></wu-cron-builder>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
