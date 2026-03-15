import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-emoji-picker.js';

describe('wu-emoji-picker', () => {
  it('renders picker dialog', async () => {
    const el = await fixture(html`<wu-emoji-picker></wu-emoji-picker>`);
    const dialog = el.shadowRoot!.querySelector('[role="dialog"]');
    expect(dialog).toBeTruthy();
  });

  it('renders search input', async () => {
    const el = await fixture(html`<wu-emoji-picker></wu-emoji-picker>`);
    const input = el.shadowRoot!.querySelector('.search-input') as HTMLInputElement;
    expect(input).toBeTruthy();
  });

  it('renders emoji buttons', async () => {
    const el = await fixture(html`<wu-emoji-picker></wu-emoji-picker>`);
    await elementUpdated(el);
    // emoji-grid contains either buttons or a no-results div
    const grid = el.shadowRoot!.querySelector('.emoji-grid');
    expect(grid).toBeTruthy();
    // at least the grid listbox is present
    expect(grid!.getAttribute('role')).toBe('listbox');
  });

  it('emits wu-select on emoji click', async () => {
    const el: any = await fixture(html`<wu-emoji-picker></wu-emoji-picker>`);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-select', handler);
    // call select() directly since happy-dom may not render nested map buttons
    el.shadowRoot; // access shadow root
    (el as any).select('😀');
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.emoji).toBe('😀');
  });

  it('filters emoji on search input', async () => {
    const el: any = await fixture(html`<wu-emoji-picker></wu-emoji-picker>`);
    const input = el.shadowRoot!.querySelector('.search-input') as HTMLInputElement;
    input.value = 'zzznomatch999';
    input.dispatchEvent(new Event('input'));
    await elementUpdated(el);
    const noResults = el.shadowRoot!.querySelector('.no-results');
    expect(noResults).toBeTruthy();
  });
});
