import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-date-picker.js';
import type { WuDatePicker } from './wu-date-picker.js';

describe('wu-date-picker', () => {
  it('renders with placeholder', async () => {
    const el = await fixture<WuDatePicker>(html`<wu-date-picker placeholder="Pick a date"></wu-date-picker>`);
    expect(el.shadowRoot!.querySelector('.trigger')!.textContent!.trim()).toContain('Pick a date');
  });

  it('opens calendar on trigger click', async () => {
    const el = await fixture<WuDatePicker>(html`<wu-date-picker></wu-date-picker>`);
    const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('.trigger')!;
    trigger.click();
    await elementUpdated(el);
    expect(el.open).toBe(true);
  });

  it('closes on Escape key', async () => {
    const el = await fixture<WuDatePicker>(html`<wu-date-picker></wu-date-picker>`);
    el.open = true;
    await elementUpdated(el);
    el.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    await elementUpdated(el);
    expect(el.open).toBe(false);
  });

  it('emits wu-date-change when a day is selected', async () => {
    const el = await fixture<WuDatePicker>(html`<wu-date-picker></wu-date-picker>`);
    el.open = true;
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-date-change', handler);
    const days = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('button.day:not(.other-month):not(:disabled)');
    days[0].click();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toMatch(/^\d{4}-\d{2}-\d{2}$/);
  });

  it('marks selected date', async () => {
    const el = await fixture<WuDatePicker>(html`<wu-date-picker value="2025-01-15"></wu-date-picker>`);
    el.open = true;
    el._viewYear = 2025;
    el._viewMonth = 0; // January
    await elementUpdated(el);
    const selected = el.shadowRoot!.querySelector('.day.selected');
    expect(selected).toBeTruthy();
    expect(selected!.textContent!.trim()).toBe('15');
  });

  it('renders day-of-week headers', async () => {
    const el = await fixture<WuDatePicker>(html`<wu-date-picker></wu-date-picker>`);
    el.open = true;
    await elementUpdated(el);
    const headers = el.shadowRoot!.querySelectorAll('.day-name');
    expect(headers.length).toBe(7);
  });
});
