import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-live-indicator.js';

describe('wu-live-indicator', () => {
  it('renders LIVE label by default', async () => {
    const el: any = await fixture(html`<wu-live-indicator></wu-live-indicator>`);
    expect(el.label).toBe('LIVE');
    expect(el.shadowRoot!.querySelector('.text')).toBeTruthy();
  });

  it('renders custom label', async () => {
    const el: any = await fixture(html`<wu-live-indicator></wu-live-indicator>`);
    el.label = 'STREAMING';
    await el.updateComplete;
    expect(el.label).toBe('STREAMING');
  });

  it('shows dot when active', async () => {
    const el: any = await fixture(html`<wu-live-indicator active></wu-live-indicator>`);
    expect(el.shadowRoot!.querySelector('.dot')).toBeTruthy();
  });
});
