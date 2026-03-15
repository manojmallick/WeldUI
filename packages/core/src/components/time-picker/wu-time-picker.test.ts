import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-time-picker.js';
import type { WuTimePicker } from './wu-time-picker.js';

describe('wu-time-picker', () => {
  it('renders with default value 12:00', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker></wu-time-picker>`);
    expect(el.value).toBe('12:00');
  });

  it('renders label', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker label="Start time"></wu-time-picker>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label?.textContent?.trim()).toBe('Start time');
  });

  it('has hour and minute selects', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker></wu-time-picker>`);
    const selects = el.shadowRoot!.querySelectorAll('select.drum-select');
    expect(selects.length).toBe(2);
  });

  it('shows AM/PM select in 12h mode', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker hour12></wu-time-picker>`);
    const selects = el.shadowRoot!.querySelectorAll('select.drum-select');
    expect(selects.length).toBe(3);
  });

  it('emits wu-change when hour changes', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker value="09:30"></wu-time-picker>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const hourSelect = el.shadowRoot!.querySelector<HTMLSelectElement>('select[aria-label="Hour"]')!;
    hourSelect.value = '15';
    hourSelect.dispatchEvent(new Event('change'));
    expect(handler).toHaveBeenCalledOnce();
  });

  it('emits wu-change when minute changes', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker></wu-time-picker>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const minSelect = el.shadowRoot!.querySelector<HTMLSelectElement>('select[aria-label="Minute"]')!;
    minSelect.value = '45';
    minSelect.dispatchEvent(new Event('change'));
    expect(handler).toHaveBeenCalledOnce();
    const detail = (handler.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.value).toMatch(/:\d{2}$/);
  });

  it('shows error message', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker error="Invalid time"></wu-time-picker>`);
    const err = el.shadowRoot!.querySelector('.error-msg');
    expect(err?.textContent?.trim()).toBe('Invalid time');
  });

  it('reflects disabled attribute', async () => {
    const el = await fixture<WuTimePicker>(html`<wu-time-picker disabled></wu-time-picker>`);
    expect(el.disabled).toBe(true);
    const selects = el.shadowRoot!.querySelectorAll<HTMLSelectElement>('select.drum-select');
    selects.forEach(s => expect(s.disabled).toBe(true));
  });
});
