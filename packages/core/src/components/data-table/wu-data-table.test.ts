import { describe, it, expect, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import './wu-data-table.js';

const COLS = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'age',  label: 'Age',  sortable: false },
];

const ROWS = [
  { name: 'Alice', age: 30 },
  { name: 'Bob',   age: 25 },
  { name: 'Carol', age: 35 },
];

describe('wu-data-table', () => {
  it('renders with default props', async () => {
    const el = await fixture<any>(html`<wu-data-table></wu-data-table>`);
    expect(el.page).toBe(1);
    expect(el.pageSize).toBe(10);
    expect(el.loading).toBe(false);
    expect(el.selectable).toBe(false);
    expect(el.searchable).toBe(false);
  });

  it('renders column headers', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .rows=${[]} total="0"></wu-data-table>`);
    const headers = el.shadowRoot!.querySelectorAll('th');
    expect(headers.length).toBe(2);
    expect(headers[0].textContent!.trim()).toContain('Name');
    expect(headers[1].textContent!.trim()).toContain('Age');
  });

  it('renders data rows', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .rows=${ROWS} total="3"></wu-data-table>`);
    const rows = el.shadowRoot!.querySelectorAll('tr[aria-selected]');
    expect(rows.length).toBe(3);
  });

  it('shows empty message when no rows', async () => {
    const el = await fixture<any>(html`
      <wu-data-table .columns=${COLS} .rows=${[]} total="0" empty-message="No data"></wu-data-table>
    `);
    await el.updateComplete;
    const emptyRow = el.shadowRoot!.querySelector('tr.empty-row td');
    expect(emptyRow).toBeTruthy();
    expect(emptyRow!.textContent!.trim()).toBe('No data');
  });

  it('shows loading overlay when loading', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .loading=${true}></wu-data-table>`);
    const overlay = el.shadowRoot!.querySelector('.loading-overlay');
    expect(overlay).toBeTruthy();
  });

  it('renders search toolbar when searchable', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .rows=${ROWS} total="3" searchable></wu-data-table>`);
    const toolbar = el.shadowRoot!.querySelector('[part="toolbar"]');
    expect(toolbar).toBeTruthy();
    expect((toolbar as HTMLElement).hidden).toBe(false);
  });

  it('does not render toolbar when not searchable', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .rows=${ROWS} total="3"></wu-data-table>`);
    const toolbar = el.shadowRoot!.querySelector('[part="toolbar"]') as HTMLElement;
    expect(toolbar!.hidden).toBe(true);
  });

  it('renders checkbox column when selectable', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .rows=${ROWS} total="3" selectable></wu-data-table>`);
    const checkboxes = el.shadowRoot!.querySelectorAll('input[type="checkbox"]');
    // header + 3 rows
    expect(checkboxes.length).toBe(4);
  });

  it('emits wu-page-change when page button clicked', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .total=${50} .page=${2} .pageSize=${10}></wu-data-table>`);
    const handler = vi.fn();
    el.addEventListener('wu-page-change', handler);
    const prevBtn = el.shadowRoot!.querySelector('button[aria-label="Previous page"]') as HTMLButtonElement;
    prevBtn.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.page).toBe(1);
  });

  it('emits wu-sort-change when sortable column header clicked', async () => {
    const el = await fixture<any>(html`<wu-data-table .columns=${COLS} .rows=${ROWS} total="3"></wu-data-table>`);
    const handler = vi.fn();
    el.addEventListener('wu-sort-change', handler);
    const nameHeader = el.shadowRoot!.querySelector('th.sortable') as HTMLElement;
    nameHeader.click();
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.key).toBe('name');
    expect(handler.mock.calls[0][0].detail.direction).toBe('asc');
  });
});
