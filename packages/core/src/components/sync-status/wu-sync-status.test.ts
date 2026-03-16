import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-sync-status.js';

describe('wu-sync-status', () => {
  it('renders synced state by default', async () => {
    const el: any = await fixture(html`<wu-sync-status></wu-sync-status>`);
    expect(el.status).toBe('synced');
  });

  it('shows syncing label', async () => {
    const el: any = await fixture(html`<wu-sync-status status="syncing"></wu-sync-status>`);
    const span = el.shadowRoot!.querySelector('[role="status"]');
    expect(span!.textContent).toContain('Saving');
  });

  it('shows offline label', async () => {
    const el: any = await fixture(html`<wu-sync-status status="offline"></wu-sync-status>`);
    const span = el.shadowRoot!.querySelector('[role="status"]');
    expect(span!.textContent!.toLowerCase()).toContain('offline');
  });

  it('shows last-saved text when synced', async () => {
    const el: any = await fixture(html`<wu-sync-status status="synced" last-saved="5 min ago"></wu-sync-status>`);
    const span = el.shadowRoot!.querySelector('[role="status"]');
    expect(span!.textContent).toContain('5 min ago');
  });
});
