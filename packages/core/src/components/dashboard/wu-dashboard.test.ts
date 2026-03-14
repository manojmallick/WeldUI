import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-dashboard.js';
import type { WuDashboard } from './wu-dashboard.js';

describe('wu-dashboard', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuDashboard>(html`<wu-dashboard></wu-dashboard>`);
    expect(el.fullWidth).toBe(false);
  });

  it('renders shell structure in shadow root', async () => {
    const el = await fixture<WuDashboard>(html`<wu-dashboard></wu-dashboard>`);
    expect(el.shadowRoot!.querySelector('.shell')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('.body')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('main')).toBeTruthy();
  });

  it('renders navbar, sidebar, and content slots', async () => {
    const el = await fixture<WuDashboard>(html`
      <wu-dashboard>
        <div slot="navbar">Nav</div>
        <div slot="sidebar">Side</div>
        <p>Content</p>
      </wu-dashboard>
    `);
    expect(el.querySelector('[slot="navbar"]')!.textContent).toBe('Nav');
    expect(el.querySelector('[slot="sidebar"]')!.textContent).toBe('Side');
    expect(el.querySelector('p')!.textContent).toBe('Content');
  });

  it('reflects full-width attribute', async () => {
    const el = await fixture<WuDashboard>(html`<wu-dashboard full-width></wu-dashboard>`);
    expect(el.fullWidth).toBe(true);
    expect(el.hasAttribute('full-width')).toBe(true);
  });
});
