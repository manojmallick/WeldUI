import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-app-shell.js';
import type { WuAppShell } from './wu-app-shell.js';

describe('wu-app-shell', () => {
  it('renders sidebar by default', async () => {
    const el = await fixture<WuAppShell>(html`<wu-app-shell></wu-app-shell>`);
    expect(el.shadowRoot!.querySelector('aside.sidebar')).toBeTruthy();
  });

  it('hides sidebar when no-sidebar is set', async () => {
    const el = await fixture<WuAppShell>(html`<wu-app-shell no-sidebar></wu-app-shell>`);
    expect(el.shadowRoot!.querySelector('aside.sidebar')).toBeNull();
  });

  it('adds collapsed class when sidebar-collapsed', async () => {
    const el = await fixture<WuAppShell>(html`<wu-app-shell sidebar-collapsed></wu-app-shell>`);
    expect(el.shadowRoot!.querySelector('.shell')?.classList.contains('collapsed')).toBe(true);
  });

  it('renders header and main slots', async () => {
    const el = await fixture<WuAppShell>(html`<wu-app-shell></wu-app-shell>`);
    expect(el.shadowRoot!.querySelector('header')).toBeTruthy();
    expect(el.shadowRoot!.querySelector('main')).toBeTruthy();
  });

  it('defaults to non-collapsed state', async () => {
    const el = await fixture<WuAppShell>(html`<wu-app-shell></wu-app-shell>`);
    expect(el.sidebarCollapsed).toBe(false);
  });
});
