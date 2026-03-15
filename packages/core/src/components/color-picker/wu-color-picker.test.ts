import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-color-picker.js';
import type { WuColorPicker } from './wu-color-picker.js';

describe('wu-color-picker', () => {
  it('renders with default value', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker></wu-color-picker>`);
    expect(el.value).toBe('#3b82f6');
  });

  it('renders label', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker label="Brand colour"></wu-color-picker>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label?.textContent?.trim()).toBe('Brand colour');
  });

  it('renders hex input with current value', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker value="#ff0000"></wu-color-picker>`);
    await elementUpdated(el);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.hex-input')!;
    expect(input.value).toBe('#ff0000');
  });

  it('emits wu-change on valid hex input', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker></wu-color-picker>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.hex-input')!;
    input.value = '#123456';
    input.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail.value).toBe('#123456');
  });

  it('does not emit wu-change on partial hex input', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker></wu-color-picker>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const input = el.shadowRoot!.querySelector<HTMLInputElement>('.hex-input')!;
    input.value = '#12345';
    input.dispatchEvent(new Event('input'));
    expect(handler).not.toHaveBeenCalled();
  });

  it('shows error message', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker error="Invalid colour"></wu-color-picker>`);
    const err = el.shadowRoot!.querySelector('.error-msg');
    expect(err?.textContent?.trim()).toBe('Invalid colour');
  });

  it('has hue slider', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker></wu-color-picker>`);
    const slider = el.shadowRoot!.querySelector('.hue-slider');
    expect(slider).toBeTruthy();
  });

  it('reflects disabled attribute', async () => {
    const el = await fixture<WuColorPicker>(html`<wu-color-picker disabled></wu-color-picker>`);
    expect(el.disabled).toBe(true);
  });
});
