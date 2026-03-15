import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-rating.js';
import type { WuRating } from './wu-rating.js';

describe('wu-rating', () => {
  it('renders 5 stars by default', async () => {
    const el = await fixture<WuRating>(html`<wu-rating></wu-rating>`);
    expect(el.shadowRoot!.querySelectorAll('.star').length).toBe(5);
  });
  it('renders custom max stars', async () => {
    const el = await fixture<WuRating>(html`<wu-rating max="10"></wu-rating>`);
    expect(el.shadowRoot!.querySelectorAll('.star').length).toBe(10);
  });
  it('filled stars match value', async () => {
    const el = await fixture<WuRating>(html`<wu-rating value="3"></wu-rating>`);
    const filled = el.shadowRoot!.querySelectorAll('.star.filled');
    expect(filled.length).toBe(3);
  });
  it('emits wu-change on star click', async () => {
    const el = await fixture<WuRating>(html`<wu-rating></wu-rating>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.star')[2].click();
    expect(handler).toHaveBeenCalledOnce();
    expect((handler.mock.calls[0][0] as CustomEvent).detail.value).toBe(3);
  });
  it('does not emit in readonly mode', async () => {
    const el = await fixture<WuRating>(html`<wu-rating readonly value="3"></wu-rating>`);
    const handler = vi.fn();
    el.addEventListener('wu-change', handler);
    el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.star')[0].click();
    expect(handler).not.toHaveBeenCalled();
  });
  it('has radiogroup role', async () => {
    const el = await fixture<WuRating>(html`<wu-rating></wu-rating>`);
    expect(el.shadowRoot!.querySelector('[role="radiogroup"]')).toBeTruthy();
  });
});
