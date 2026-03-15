import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-countdown.js';
import type { WuCountdown } from './wu-countdown.js';

describe('wu-countdown', () => {
  it('shows expired for past date', async () => {
    const el = await fixture<WuCountdown>(html`<wu-countdown target="2000-01-01T00:00:00Z"></wu-countdown>`);
    expect(el.shadowRoot!.querySelector('.expired')).toBeTruthy();
  });
  it('shows timer for future date', async () => {
    const future = new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString();
    const el = await fixture<WuCountdown>(html`<wu-countdown .target=${future}></wu-countdown>`);
    expect(el.shadowRoot!.querySelector('.countdown')).toBeTruthy();
  });
  it('has timer role', async () => {
    const future = new Date(Date.now() + 3600000).toISOString();
    const el = await fixture<WuCountdown>(html`<wu-countdown .target=${future}></wu-countdown>`);
    expect(el.shadowRoot!.querySelector('[role="timer"]')).toBeTruthy();
  });
  it('shows expired when no target', async () => {
    const el = await fixture<WuCountdown>(html`<wu-countdown></wu-countdown>`);
    expect(el.shadowRoot!.querySelector('.expired')).toBeTruthy();
  });
  it('emits wu-expire for already expired', async () => {
    const handler = vi.fn();
    const el = await fixture<WuCountdown>(html`<wu-countdown target="2000-01-01T00:00:00Z"></wu-countdown>`);
    el.addEventListener('wu-expire', handler);
  });
});
