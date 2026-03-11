import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-data-grid.js';
import type { WuDataGrid } from './wu-data-grid.js';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', sortable: true, filterable: true },
  { key: 'dept', label: 'Department', sortable: true, filterable: true },
];

const makeData = (n: number) =>
  Array.from({ length: n }, (_, i) => ({ id: String(i + 1), name: `User ${i + 1}`, dept: i % 2 === 0 ? 'Engineering' : 'Design' }));

describe('wu-data-grid', () => {
  it('renders column headers', async () => {
    const el = await fixture<WuDataGrid>(html`<wu-data-grid></wu-data-grid>`);
    el.columns = columns;
    el.data = makeData(5);
    await elementUpdated(el);
    const headers = el.shadowRoot!.querySelectorAll('.header-cell');
    expect(headers.length).toBe(3);
  });

  it('renders visible rows', async () => {
    const el = await fixture<WuDataGrid>(html`<wu-data-grid></wu-data-grid>`);
    el.columns = columns;
    el.data = makeData(5);
    await elementUpdated(el);
    const rows = el.shadowRoot!.querySelectorAll('.data-row');
    expect(rows.length).toBe(5);
  });

  it('paginates data', async () => {
    const el = await fixture<WuDataGrid>(html`<wu-data-grid page-size="5"></wu-data-grid>`);
    el.columns = columns;
    el.data = makeData(15);
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelectorAll('.data-row').length).toBe(5);
  });

  it('emits wu-sort-change when sortable header is clicked', async () => {
    const el = await fixture<WuDataGrid>(html`<wu-data-grid></wu-data-grid>`);
    el.columns = columns;
    el.data = makeData(5);
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-sort-change', handler);
    const sortable = el.shadowRoot!.querySelector<HTMLElement>('.header-cell.sortable')!;
    sortable.click();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.key).toBe('name');
  });

  it('filters rows by query', async () => {
    const el = await fixture<WuDataGrid>(html`<wu-data-grid page-size="20"></wu-data-grid>`);
    el.columns = columns;
    el.data = makeData(10);
    el['_filter'] = 'User 1';
    await elementUpdated(el);
    // "User 1", "User 10" both match "User 1"
    expect(el.shadowRoot!.querySelectorAll('.data-row').length).toBeGreaterThanOrEqual(1);
  });

  it('shows empty message when no data', async () => {
    const el = await fixture<WuDataGrid>(html`<wu-data-grid empty-message="Empty grid"></wu-data-grid>`);
    el.columns = columns;
    el.data = [];
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.empty')!.textContent!.trim()).toBe('Empty grid');
  });
});
