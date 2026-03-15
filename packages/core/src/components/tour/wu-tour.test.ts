import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-tour.js';
import type { WuTour } from './wu-tour.js';

describe('wu-tour', () => {
  const steps = [
    { title: 'Step 1', content: 'First step' },
    { title: 'Step 2', content: 'Second step' },
  ];

  it('renders nothing when not active', async () => {
    const el = await fixture<WuTour>(html`<wu-tour .steps=${steps}></wu-tour>`);
    expect(el.shadowRoot!.querySelector('.panel')).toBeNull();
  });

  it('renders panel when active', async () => {
    const el = await fixture<WuTour>(html`<wu-tour .steps=${steps} active></wu-tour>`);
    expect(el.shadowRoot!.querySelector('.panel')).toBeTruthy();
  });

  it('shows step title', async () => {
    const el = await fixture<WuTour>(html`<wu-tour .steps=${steps} active></wu-tour>`);
    expect(el.shadowRoot!.querySelector('.title')?.textContent?.trim()).toBe('Step 1');
  });

  it('emits wu-skip on close', async () => {
    const el = await fixture<WuTour>(html`<wu-tour .steps=${steps} active></wu-tour>`);
    const handler = vi.fn();
    el.addEventListener('wu-skip', handler);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.skip-btn')!.click();
    expect(handler).toHaveBeenCalledOnce();
  });

  it('advances to next step on Next click', async () => {
    const el = await fixture<WuTour>(html`<wu-tour .steps=${steps} active></wu-tour>`);
    el.shadowRoot!.querySelector<HTMLButtonElement>('.btn-primary')!.click();
    await el.updateComplete;
    expect(el.shadowRoot!.querySelector('.title')?.textContent?.trim()).toBe('Step 2');
  });
});
