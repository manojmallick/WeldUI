import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-pagination.js';
import type { WuPagination } from './wu-pagination.js';

describe('wu-pagination', () => {
  it('renders with default props', async () => {
    const el = await fixture<WuPagination>(html`<wu-pagination total-pages="5"></wu-pagination>`);
    expect(el.page).toBe(1);
    expect(el.totalPages).toBe(5);
  });

  it('prev button is disabled on page 1', async () => {
    const el = await fixture<WuPagination>(html`<wu-pagination total-pages="5"></wu-pagination>`);
    const prev = el.shadowRoot!.querySelector<HTMLButtonElement>('.nav-btn')!;
    expect(prev.disabled).toBe(true);
  });

  it('next button is disabled on last page', async () => {
    const el = await fixture<WuPagination>(html`<wu-pagination page="5" total-pages="5"></wu-pagination>`);
    const btns = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.nav-btn');
    expect(btns[1].disabled).toBe(true);
  });

  it('emits wu-page-change when next is clicked', async () => {
    const el = await fixture<WuPagination>(html`<wu-pagination page="2" total-pages="5"></wu-pagination>`);
    const handler = vi.fn();
    el.addEventListener('wu-page-change', handler);
    const btns = el.shadowRoot!.querySelectorAll<HTMLButtonElement>('.nav-btn');
    btns[1].click(); // next
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.page).toBe(3);
  });

  it('renders page buttons', async () => {
    const el = await fixture<WuPagination>(html`<wu-pagination total-pages="3"></wu-pagination>`);
    const pageBtns = el.shadowRoot!.querySelectorAll('.page-btn');
    expect(pageBtns.length).toBe(3);
  });

  it('marks current page with aria-current="page"', async () => {
    const el = await fixture<WuPagination>(html`<wu-pagination page="2" total-pages="5"></wu-pagination>`);
    const current = el.shadowRoot!.querySelector('[aria-current="page"]');
    expect(current).toBeTruthy();
    expect(current!.textContent).toBe('2');
  });
});
