import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-sla-tracker.js';

describe('wu-sla-tracker', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-sla-tracker></wu-sla-tracker>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-sla-tracker></wu-sla-tracker>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-sla-tracker></wu-sla-tracker>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-sla-tracker label="Test"></wu-sla-tracker>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-sla-tracker value="Hello"></wu-sla-tracker>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
