import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-slider.js';
import type { WuSlider } from './wu-slider.js';

describe('wu-slider', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuSlider>(html`<wu-slider></wu-slider>`);
    expect(el.value).toBe(0);
    expect(el.min).toBe(0);
    expect(el.max).toBe(100);
    expect(el.step).toBe(1);
    expect(el.disabled).toBe(false);
  });

  it('renders label when provided', async () => {
    const el = await fixture<WuSlider>(html`<wu-slider label="Volume"></wu-slider>`);
    const label = el.shadowRoot!.querySelector('label');
    expect(label!.textContent).toBe('Volume');
  });

  it('shows current value when show-value is set', async () => {
    const el = await fixture<WuSlider>(
      html`<wu-slider label="Volume" value="42" show-value></wu-slider>`
    );
    const valueEl = el.shadowRoot!.querySelector('.value');
    expect(valueEl!.textContent).toBe('42');
  });

  it('emits wu-input on input event', async () => {
    const el = await fixture<WuSlider>(html`<wu-slider min="0" max="100"></wu-slider>`);
    const handler = vi.fn();
    el.addEventListener('wu-input', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = '60';
    input.dispatchEvent(new Event('input'));
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe(60);
  });

  it('emits wu-change on change event', async () => {
    const el = await fixture<WuSlider>(html`<wu-slider min="0" max="100"></wu-slider>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    const input = el.shadowRoot!.querySelector('input')!;
    input.value = '75';
    input.dispatchEvent(new Event('change'));
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe(75);
  });

  it('sets correct aria attributes', async () => {
    const el = await fixture<WuSlider>(
      html`<wu-slider label="Progress" min="0" max="100" value="40"></wu-slider>`
    );
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.getAttribute('aria-valuemin')).toBe('0');
    expect(input.getAttribute('aria-valuemax')).toBe('100');
    expect(input.getAttribute('aria-valuenow')).toBe('40');
  });

  it('disables the input when disabled', async () => {
    const el = await fixture<WuSlider>(html`<wu-slider disabled></wu-slider>`);
    const input = el.shadowRoot!.querySelector('input')!;
    expect(input.disabled).toBe(true);
  });

  it('renders tick marks when ticks are provided', async () => {
    const el = await fixture<WuSlider>(
      html`<wu-slider .ticks=${[0, 25, 50, 75, 100]}></wu-slider>`
    );
    const ticks = el.shadowRoot!.querySelectorAll('.tick');
    expect(ticks.length).toBe(5);
  });

  it('renders hint text', async () => {
    const el = await fixture<WuSlider>(
      html`<wu-slider hint="Drag to adjust volume"></wu-slider>`
    );
    const hint = el.shadowRoot!.querySelector('.hint');
    expect(hint!.textContent).toBe('Drag to adjust volume');
  });
});
