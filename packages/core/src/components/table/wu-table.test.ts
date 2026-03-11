import { describe, it, expect, vi } from 'vitest';
import { fixture, html, elementUpdated } from '@open-wc/testing';
import './wu-table.js';
import type { WuTable } from './wu-table.js';

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role' },
];
const data = [
  { id: '1', name: 'Alice', role: 'Admin' },
  { id: '2', name: 'Bob', role: 'User' },
  { id: '3', name: 'Charlie', role: 'User' },
];

describe('wu-table', () => {
  it('renders column headers', async () => {
    const el = await fixture<WuTable>(html`<wu-table></wu-table>`);
    el.columns = columns;
    el.data = data;
    await elementUpdated(el);
    const ths = el.shadowRoot!.querySelectorAll('th');
    expect(ths.length).toBe(3);
    expect(ths[1].textContent!.trim()).toContain('Name');
  });

  it('renders data rows', async () => {
    const el = await fixture<WuTable>(html`<wu-table></wu-table>`);
    el.columns = columns;
    el.data = data;
    await elementUpdated(el);
    const rows = el.shadowRoot!.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });

  it('shows empty message when no data', async () => {
    const el = await fixture<WuTable>(html`<wu-table empty-message="Nothing here"></wu-table>`);
    el.columns = columns;
    el.data = [];
    await elementUpdated(el);
    expect(el.shadowRoot!.querySelector('.empty')!.textContent!.trim()).toBe('Nothing here');
  });

  it('emits wu-sort when sortable header is clicked', async () => {
    const el = await fixture<WuTable>(html`<wu-table></wu-table>`);
    el.columns = columns;
    el.data = data;
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-sort', handler);
    const ths = el.shadowRoot!.querySelectorAll<HTMLTableCellElement>('th.sortable');
    ths[0].click();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.key).toBe('name');
  });

  it('renders checkboxes when selectable', async () => {
    const el = await fixture<WuTable>(html`<wu-table selectable></wu-table>`);
    el.columns = columns;
    el.data = data;
    await elementUpdated(el);
    const checkboxes = el.shadowRoot!.querySelectorAll('input[type="checkbox"]');
    expect(checkboxes.length).toBe(data.length + 1); // +1 for select-all
  });

  it('emits wu-select when row checkbox is clicked', async () => {
    const el = await fixture<WuTable>(html`<wu-table selectable></wu-table>`);
    el.columns = columns;
    el.data = data;
    await elementUpdated(el);
    const handler = vi.fn();
    el.addEventListener('wu-select', handler);
    const checkboxes = el.shadowRoot!.querySelectorAll<HTMLInputElement>('tbody input[type="checkbox"]');
    checkboxes[0].click();
    await elementUpdated(el);
    expect(handler).toHaveBeenCalledOnce();
    expect(handler.mock.calls[0][0].detail.selected).toContain('1');
  });
});
