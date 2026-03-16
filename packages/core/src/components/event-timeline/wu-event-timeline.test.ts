import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-event-timeline.js';

describe('wu-event-timeline', () => {
  it('renders', async () => {
    const el = await fixture(html`<wu-event-timeline></wu-event-timeline>`);
    expect(el).toBeTruthy();
  });

  it('has shadow root', async () => {
    const el = await fixture(html`<wu-event-timeline></wu-event-timeline>`);
    expect(el.shadowRoot).toBeTruthy();
  });

  it('renders container', async () => {
    const el = await fixture(html`<wu-event-timeline></wu-event-timeline>`);
    expect(el.shadowRoot!.querySelector('.container')).toBeTruthy();
  });

  it('shows label', async () => {
    const el: any = await fixture(html`<wu-event-timeline label="Test"></wu-event-timeline>`);
    const labelEl = el.shadowRoot!.querySelector('.label');
    expect(labelEl?.textContent?.trim()).toBe('Test');
  });

  it('shows value', async () => {
    const el: any = await fixture(html`<wu-event-timeline value="Hello"></wu-event-timeline>`);
    await el.updateComplete;
    const content = el.shadowRoot!.querySelector('.content');
    expect(content?.textContent?.trim()).toBe('Hello');
  });
});
