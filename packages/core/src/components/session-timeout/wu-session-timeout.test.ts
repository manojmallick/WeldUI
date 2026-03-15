import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import type { WuSessionTimeout } from './wu-session-timeout.js';
import './wu-session-timeout.js';

describe('wu-session-timeout', () => {
  it('renders nothing when not visible', async () => {
    const el = await fixture<WuSessionTimeout>(html`<wu-session-timeout></wu-session-timeout>`);
    expect(el.shadowRoot!.querySelector('.timeout-warning')).toBeNull();
  });

  it('renders warning when visible', async () => {
    const el = await fixture<WuSessionTimeout>(html`<wu-session-timeout visible seconds-remaining="60"></wu-session-timeout>`);
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.timeout-warning')).toBeTruthy();
  });

  it('emits wu-extend when Stay signed in is clicked', async () => {
    const el = await fixture<WuSessionTimeout>(html`<wu-session-timeout visible seconds-remaining="60"></wu-session-timeout>`);
    await el.updateComplete;
    const handler = vi.fn();
    el.addEventListener('wu-extend', handler);
    (el.shadowRoot!.querySelector('.extend-btn') as HTMLButtonElement).click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('emits wu-logout when Sign out is clicked', async () => {
    const el = await fixture<WuSessionTimeout>(html`<wu-session-timeout visible seconds-remaining="60"></wu-session-timeout>`);
    await el.updateComplete;
    const handler = vi.fn();
    el.addEventListener('wu-logout', handler);
    (el.shadowRoot!.querySelector('.logout-btn') as HTMLButtonElement).click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('shows formatted countdown', async () => {
    const el = await fixture<WuSessionTimeout>(html`<wu-session-timeout visible seconds-remaining="90"></wu-session-timeout>`);
    await el.updateComplete;
    const text = el.shadowRoot!.querySelector('.message')!.textContent!;
    expect(text).toContain('1:30');
  });
});
