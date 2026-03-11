import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-table-border: var(--wu-color-border);
    --wu-table-header-bg: var(--wu-color-surface);
    --wu-table-header-color: var(--wu-color-text-secondary);
    --wu-table-row-hover-bg: var(--wu-color-primary-subtle, var(--wu-color-surface));
    --wu-table-row-selected-bg: var(--wu-color-primary-subtle);
    --wu-table-font-size: var(--wu-text-sm);
    --wu-table-cell-padding: var(--wu-space-3) var(--wu-space-4);
  }

  .wrapper {
    overflow-x: auto;
    border: 1px solid var(--wu-table-border);
    border-radius: var(--wu-radius-lg);
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: var(--wu-table-font-size);
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
  }

  thead {
    background: var(--wu-table-header-bg);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  th {
    padding: var(--wu-table-cell-padding);
    text-align: left;
    font-weight: var(--wu-font-semibold);
    color: var(--wu-table-header-color);
    white-space: nowrap;
    border-bottom: 1px solid var(--wu-table-border);
  }

  th.sortable {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  th.sortable:hover {
    color: var(--wu-color-text);
  }

  .th-inner {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .sort-icon {
    width: 14px;
    height: 14px;
    opacity: 0.4;
    transition: opacity 100ms;
  }

  th.sorted .sort-icon {
    opacity: 1;
  }

  .sort-icon svg {
    display: block;
  }

  td {
    padding: var(--wu-table-cell-padding);
    border-bottom: 1px solid var(--wu-table-border);
    vertical-align: middle;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover {
    background: var(--wu-table-row-hover-bg);
  }

  tbody tr.selected {
    background: var(--wu-table-row-selected-bg);
  }

  td.select-cell,
  th.select-cell {
    width: 40px;
    padding: var(--wu-space-2) var(--wu-space-3);
  }

  input[type='checkbox'] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: var(--wu-color-primary);
  }

  .empty {
    text-align: center;
    padding: var(--wu-space-10);
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-sm);
  }
`;
