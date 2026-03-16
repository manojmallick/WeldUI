import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-connection-status.js';

describe('wu-connection-status', () => {
  it('defaults to online', async () => {
    const el: any = await fixture(html`<wu-connection-status></wu-connection-status>`);
    expect(el.status).toBe('online');
  });

  it('shows offline message', async () => {
    const el: any = await fixture(html`<wu-connection-status status="offline"></wu-connection-status>`);
    expect(el.shadowRoot!.querySelector('.banner')!.textContent!.trim()).toContain('No internet');
  });

  it('shows reconnecting message', async () => {
    const el: any = await fixture(html`<wu-connection-status status="reconnecting"></wu-connection-status>`);
    expect(el.shadowRoot!.querySelector('.banner')!.textContent!.trim()).toContain('Reconnecting');
  });
});
