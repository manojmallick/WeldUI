import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-tool-call-display.js';

describe('wu-tool-call-display', () => {
  it('renders tool name', async () => {
    const el: any = await fixture(html`<wu-tool-call-display tool-name="search_web"></wu-tool-call-display>`);
    const name = el.shadowRoot!.querySelector('.tool-name');
    expect(name!.textContent).toBe('search_web');
  });

  it('shows success status', async () => {
    const el: any = await fixture(html`<wu-tool-call-display status="success"></wu-tool-call-display>`);
    const badge = el.shadowRoot!.querySelector('.status-badge');
    expect(badge!.classList.contains('success')).toBe(true);
  });

  it('shows error status', async () => {
    const el: any = await fixture(html`<wu-tool-call-display status="error"></wu-tool-call-display>`);
    const badge = el.shadowRoot!.querySelector('.status-badge');
    expect(badge!.classList.contains('error')).toBe(true);
  });

  it('formats JSON input', async () => {
    const el: any = await fixture(html`<wu-tool-call-display input='{"key":"value"}'></wu-tool-call-display>`);
    const pre = el.shadowRoot!.querySelectorAll('pre')[0];
    expect(pre!.textContent).toContain('"key"');
  });
});
