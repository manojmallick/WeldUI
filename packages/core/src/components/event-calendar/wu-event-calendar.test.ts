import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-event-calendar.js';

describe('wu-event-calendar', () => {
  it('renders calendar grid', async () => {
    const el = await fixture(html`<wu-event-calendar></wu-event-calendar>`);
    const grid = el.shadowRoot!.querySelector('[role="grid"]');
    expect(grid).toBeTruthy();
  });

  it('renders 7 day-of-week headers', async () => {
    const el = await fixture(html`<wu-event-calendar></wu-event-calendar>`);
    const dows = el.shadowRoot!.querySelectorAll('.dow');
    expect(dows.length).toBe(7);
  });

  it('renders 42 day cells', async () => {
    const el = await fixture(html`<wu-event-calendar></wu-event-calendar>`);
    const cells = el.shadowRoot!.querySelectorAll('.day');
    expect(cells.length).toBe(42);
  });

  it('renders event chips for matching dates', async () => {
    const now = new Date();
    const iso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-10`;
    const el: any = await fixture(html`<wu-event-calendar .events=${[{ id: '1', title: 'Meeting', date: iso }]}></wu-event-calendar>`);
    await elementUpdated(el);
    const chip = el.shadowRoot!.querySelector('.event-chip');
    expect(chip).toBeTruthy();
    expect(chip.textContent?.trim()).toBe('Meeting');
  });

  it('emits wu-date-click on day click', async () => {
    const el = await fixture(html`<wu-event-calendar></wu-event-calendar>`);
    const handler = vi.fn();
    el.addEventListener('wu-date-click', handler);
    const day = el.shadowRoot!.querySelector('.day.today') as HTMLElement | null;
    (day ?? el.shadowRoot!.querySelectorAll('.day')[15] as HTMLElement).click();
    expect(handler).toHaveBeenCalledOnce();
  });
});
