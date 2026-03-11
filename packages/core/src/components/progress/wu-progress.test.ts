import { describe, it, expect } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-progress.js';
import type { WuProgress } from './wu-progress.js';

describe('wu-progress', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuProgress>(html`<wu-progress></wu-progress>`);
    expect(el.value).toBe(0);
    expect(el.min).toBe(0);
    expect(el.max).toBe(100);
    expect(el.indeterminate).toBe(false);
  });

  it('has role="progressbar"', async () => {
    const el = await fixture<WuProgress>(html`<wu-progress></wu-progress>`);
    expect(el.shadowRoot!.querySelector('[role="progressbar"]')).toBeTruthy();
  });

  it('sets aria-valuenow to percentage', async () => {
    const el = await fixture<WuProgress>(html`<wu-progress value="50"></wu-progress>`);
    const bar = el.shadowRoot!.querySelector('[role="progressbar"]')!;
    expect(bar.getAttribute('aria-valuenow')).toBe('50');
  });

  it('clamps value between min and max', async () => {
    const el = await fixture<WuProgress>(html`<wu-progress value="150" max="100"></wu-progress>`);
    const fill = el.shadowRoot!.querySelector<HTMLElement>('.fill')!;
    expect(fill.style.width).toBe('100%');
  });

  it('shows label when showLabel is true', async () => {
    const el = await fixture<WuProgress>(html`<wu-progress value="60" show-label label="Upload"></wu-progress>`);
    const labels = el.shadowRoot!.querySelector('.labels');
    expect(labels).toBeTruthy();
  });

  it('reflects indeterminate attribute', async () => {
    const el = await fixture<WuProgress>(html`<wu-progress indeterminate></wu-progress>`);
    expect(el.hasAttribute('indeterminate')).toBe(true);
  });
});
