import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-calendar.js';
import type { WuCalendar } from './wu-calendar.js';

describe('wu-calendar', () => {
  it('renders day buttons', async () => {
    const el = await fixture<WuCalendar>(html`<wu-calendar></wu-calendar>`);
    const days = el.shadowRoot!.querySelectorAll('button.day');
    expect(days.length).toBeGreaterThan(0);
  });
  it('emits wu-change on day click', async () => {
    const el = await fixture<WuCalendar>(html`<wu-calendar></wu-calendar>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const firstDay = el.shadowRoot!.querySelector<HTMLButtonElement>('button.day:not(:disabled)')!;
    firstDay.click();
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail.value).toBeTruthy();
  });
  it('marks selected day', async () => {
    const today = new Date().toISOString().split('T')[0];
    const el = await fixture<WuCalendar>(html`<wu-calendar .value=${today}></wu-calendar>`);
    await elementUpdated(el);
    const selected = el.shadowRoot!.querySelector('.day.selected');
    expect(selected).toBeTruthy();
  });
  it('has application role', async () => {
    const el = await fixture<WuCalendar>(html`<wu-calendar></wu-calendar>`);
    expect(el.shadowRoot!.querySelector('[role="application"]')).toBeTruthy();
  });
  it('nav buttons present', async () => {
    const el = await fixture<WuCalendar>(html`<wu-calendar></wu-calendar>`);
    const navBtns = el.shadowRoot!.querySelectorAll('.nav-btn');
    expect(navBtns.length).toBe(2);
  });
});
