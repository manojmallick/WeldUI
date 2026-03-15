import { describe, expect, it, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-feedback.js';
import type { WuFeedback } from './wu-feedback.js';

describe('wu-feedback', () => {
  it('renders with default variant thumbs', async () => {
    const el = await fixture<WuFeedback>(html`<wu-feedback></wu-feedback>`);
    expect(el.variant).toBe('thumbs');
  });

  it('renders thumb buttons for thumbs variant', async () => {
    const el = await fixture<WuFeedback>(html`<wu-feedback variant="thumbs"></wu-feedback>`);
    const buttons = el.shadowRoot?.querySelectorAll('.thumb');
    expect(buttons?.length).toBe(2);
  });

  it('renders 5 star buttons for stars variant', async () => {
    const el = await fixture<WuFeedback>(html`<wu-feedback variant="stars"></wu-feedback>`);
    const stars = el.shadowRoot?.querySelectorAll('.star');
    expect(stars?.length).toBe(5);
  });

  it('emits wu-feedback event when thumb clicked', async () => {
    const el = await fixture<WuFeedback>(html`<wu-feedback variant="thumbs"></wu-feedback>`);
    const handler = vi.fn();
    el.addEventListener('wu-feedback', handler);
    const thumbUp = el.shadowRoot?.querySelector('.thumb') as HTMLButtonElement;
    thumbUp.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.value).toBe(1);
  });

  it('shows thank-you message after submission', async () => {
    const el = await fixture<WuFeedback>(html`<wu-feedback></wu-feedback>`);
    const btn = el.shadowRoot?.querySelector('.thumb') as HTMLButtonElement;
    btn.click();
    await el.updateComplete;
    expect(el.shadowRoot?.querySelector('.submitted')).toBeTruthy();
  });
});
