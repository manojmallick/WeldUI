import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);

    --wu-dt-border:       var(--wu-color-border);
    --wu-dt-row-hover:    var(--wu-color-surface);
    --wu-dt-header-bg:    var(--wu-color-surface);
    --wu-dt-selected-bg:  var(--wu-color-primary-subtle);
    --wu-dt-radius:       var(--wu-radius-lg);
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--wu-space-3);
    margin-bottom: var(--wu-space-3);
    flex-wrap: wrap;
  }

  .toolbar wu-search {
    max-width: 280px;
    flex: 1;
  }

  .container {
    position: relative;
    border: 1px solid var(--wu-dt-border);
    border-radius: var(--wu-dt-radius);
    overflow: hidden;
  }

  .table-wrap {
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background: var(--wu-dt-header-bg);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  th {
    padding: var(--wu-space-3) var(--wu-space-4);
    text-align: left;
    font-weight: var(--wu-font-semibold);
    font-size: var(--wu-text-xs);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--wu-color-text-secondary);
    border-bottom: 1px solid var(--wu-dt-border);
    white-space: nowrap;
    user-select: none;
  }

  th.sortable {
    cursor: pointer;
  }

  th.sortable:hover {
    color: var(--wu-color-text);
  }

  .sort-icon {
    display: inline-flex;
    vertical-align: middle;
    margin-left: var(--wu-space-1);
    opacity: 0.4;
  }

  th.sorted .sort-icon {
    opacity: 1;
    color: var(--wu-color-primary);
  }

  td {
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-dt-border);
    vertical-align: middle;
    max-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  tr:last-child td {
    border-bottom: none;
  }

  tbody tr:hover td {
    background: var(--wu-dt-row-hover);
  }

  tr.selected td {
    background: var(--wu-dt-selected-bg);
  }

  .checkbox-col {
    width: 40px;
    padding-left: var(--wu-space-4);
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--wu-color-primary);
    cursor: pointer;
  }

  .empty-row td {
    text-align: center;
    padding: var(--wu-space-8) var(--wu-space-4);
    color: var(--wu-color-text-secondary);
  }

  .loading-overlay {
    position: absolute;
    inset: 0;
    background: color-mix(in srgb, var(--wu-color-background) 80%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
  }

  .spinner {
    width: 28px;
    height: 28px;
    border: 3px solid var(--wu-color-border);
    border-top-color: var(--wu-color-primary);
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-top: 1px solid var(--wu-dt-border);
    background: var(--wu-dt-header-bg);
    gap: var(--wu-space-4);
    flex-wrap: wrap;
  }

  .footer-info {
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    flex-shrink: 0;
  }

  .pagination-btns {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  button.page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 32px;
    height: 32px;
    padding: 0 var(--wu-space-2);
    background: transparent;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  button.page-btn:hover:not(:disabled) {
    background: var(--wu-color-surface-raised);
  }

  button.page-btn.active {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-color: var(--wu-color-primary);
  }

  button.page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  button.page-btn:focus-visible {
    box-shadow: var(--wu-focus-ring);
    outline: none;
  }
`;
