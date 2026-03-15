import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-date-range-picker.js';
import type { WuDateRangePicker } from './wu-date-range-picker.js';

describe('wu-date-range-picker', () => {
  it('renders trigger button', async () => {
    const el = await fixture<WuDateRangePicker>(html`<wu-date-range-picker></wu-date-range-picker>`);
    const trigger = el.shadowRoot!.querySelector('button.trigger');
    expect(trigger).toBeTruthy();
  });

  it('renders label', async () => {
    const el = await fixture<WuDateRangePicker>(html`<wu-date-range-picker label="Choose dates"></wu-date-range-picker>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label?.textContent?.trim()).toBe('Choose dates');
  });

  it('opens popup on trigger click', async () => {
    const el = await fixture<WuDateRangePicker>(html`<wu-date-range-picker></wu-date-range-picker>`);
    const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('button.trigger')!;
    trigger.click();
    await elementUpdated(el);
    const popup = el.shadowRoot!.querySelector('.popup');
    expect(popup?.hasAttribute('hidden')).toBe(false);
  });

  it('shows formatted range in trigger', async () => {
    const el = await fixture<WuDateRangePicker>(html`<wu-date-range-picker start="2024-01-01" end="2024-01-31"></wu-date-range-picker>`);
    const trigger = el.shadowRoot!.querySelector('button.trigger')!;
    expect(trigger.textContent).toContain('2024-01-01');
    expect(trigger.textContent).toContain('2024-01-31');
  });

  it('emits wu-change when a range is confirmed', async () => {
    const el = await fixture<WuDateRangePicker>(html`<wu-date-range-picker></wu-date-range-picker>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('button.trigger')!.click();
    await elementUpdated(el);
    const days = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('button.day:not(:disabled)');
    days[0].click(); await elementUpdated(el);
    days[5].click(); await elementUpdated(el);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.btn-primary')!.click();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    const detail = (handler.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.start).toBeTruthy();
    expect(detail.end).toBeTruthy();
  });

  it('shows error message', async () => {
    const el = await fixture<WuDateRangePicker>(html`<wu-date-range-picker error="Invalid range"></wu-date-range-picker>`);
    const err = el.shadowRoot!.querySelector('.error-msg');
    expect(err?.textContent?.trim()).toBe('Invalid range');
  });

  it('reflects disabled attribute', async () => {
    const el = await fixture<WuDateRangePicker>(html`<wu-date-range-picker disabled></wu-date-range-picker>`);
    expect(el.disabled).toBe(true);
    const trigger = el.shadowRoot!.querySelector<HTMLButtonElement>('button.trigger')!;
    expect(trigger.disabled).toBe(true);
  });
});
