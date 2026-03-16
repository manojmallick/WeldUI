import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    background: var(--wu-color-surface);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .search input {
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-3);
    font-size: var(--wu-text-xs);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    outline: none;
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 320px;
    overflow-y: auto;
  }

  .item {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .item:hover { background: var(--wu-color-surface-raised); }
  .item:last-child { border-bottom: none; }

  .item-info { flex: 1; }
  .item-title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); }
  .item-preview { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: 2px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 240px; }

  .insert-btn {
    flex-shrink: 0;
    border: 1px solid var(--wu-color-border);
    background: var(--wu-color-background);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-size: var(--wu-text-xs);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
  }

  .insert-btn:hover { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }

  .empty { padding: var(--wu-space-6); text-align: center; color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); }
`;
