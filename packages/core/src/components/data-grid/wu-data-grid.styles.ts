import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-dg-border: var(--wu-color-border);
    --wu-dg-header-bg: var(--wu-color-surface);
    --wu-dg-row-hover: var(--wu-color-surface);
    --wu-dg-row-height: 40px;
    --wu-dg-font: var(--wu-font-sans);
    --wu-dg-font-size: var(--wu-text-sm);
  }

  .grid {
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-family: var(--wu-dg-font);
    font-size: var(--wu-dg-font-size);
  }

  .toolbar {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    border-bottom: 1px solid var(--wu-dg-border);
    background: var(--wu-dg-header-bg);
  }

  .search-wrap {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    flex: 1;
    max-width: 240px;
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
  }

  .search-wrap svg {
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .search-input {
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-dg-font);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    width: 100%;
  }

  .search-input::placeholder {
    color: var(--wu-color-text-disabled);
  }

  .row-count {
    margin-left: auto;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .header-row {
    display: flex;
    background: var(--wu-dg-header-bg);
    border-bottom: 1px solid var(--wu-dg-border);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .header-cell {
    flex: 1;
    min-width: 80px;
    padding: var(--wu-space-2) var(--wu-space-3);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    user-select: none;
    -webkit-user-select: none;
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .header-cell.sortable {
    cursor: pointer;
  }

  .header-cell.sortable:hover {
    color: var(--wu-color-text);
  }

  .sort-indicator {
    font-size: 10px;
    color: var(--wu-color-primary);
  }

  .body {
    overflow-y: auto;
    flex: 1;
  }

  .data-row {
    display: flex;
    border-bottom: 1px solid var(--wu-dg-border);
    min-height: var(--wu-dg-row-height);
  }

  .data-row:last-child {
    border-bottom: none;
  }

  .data-row:hover {
    background: var(--wu-dg-row-hover);
  }

  .cell {
    flex: 1;
    min-width: 80px;
    padding: var(--wu-space-2) var(--wu-space-3);
    color: var(--wu-color-text);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: flex;
    align-items: center;
  }

  .empty {
    padding: var(--wu-space-12) var(--wu-space-4);
    text-align: center;
    color: var(--wu-color-text-secondary);
  }

  .pagination-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-2) var(--wu-space-3);
    border-top: 1px solid var(--wu-dg-border);
    background: var(--wu-dg-header-bg);
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .page-info {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .page-controls {
    display: flex;
    gap: var(--wu-space-1);
  }

  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 28px;
    height: 28px;
    padding: 0 var(--wu-space-1);
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-sm);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    font-family: var(--wu-dg-font);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
  }

  .page-btn:hover:not(:disabled) {
    background: var(--wu-color-surface);
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .page-btn.active {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-color: var(--wu-color-primary);
  }

  .page-size-select {
    font-family: var(--wu-dg-font);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    border: 1px solid var(--wu-dg-border);
    border-radius: var(--wu-radius-sm);
    padding: 2px var(--wu-space-1);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    cursor: pointer;
  }
`;
