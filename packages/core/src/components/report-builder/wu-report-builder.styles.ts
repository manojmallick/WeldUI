import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-rb-bg: var(--wu-color-surface);
    --wu-rb-border: var(--wu-color-border);
    --wu-rb-radius: var(--wu-radius-lg);
  }

  .builder {
    background: var(--wu-rb-bg);
    border: 1px solid var(--wu-rb-border);
    border-radius: var(--wu-rb-radius);
    overflow: hidden;
  }

  .builder-header {
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-rb-border);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .count {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    font-weight: var(--wu-font-normal);
  }

  .column-list {
    list-style: none;
    margin: 0;
    padding: var(--wu-space-2) 0;
  }

  .column-item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-4);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .column-item:hover {
    background: var(--wu-color-surface-raised);
  }

  label {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    flex: 1;
  }

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    accent-color: var(--wu-color-primary);
    cursor: pointer;
    flex-shrink: 0;
  }

  .reorder {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin-left: auto;
  }

  .reorder-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-disabled);
    padding: 0 2px;
    font-size: 10px;
    line-height: 1;
    transition: color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .reorder-btn:hover { color: var(--wu-color-text-secondary); }
  .reorder-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .footer {
    padding: var(--wu-space-3) var(--wu-space-4);
    border-top: 1px solid var(--wu-rb-border);
    display: flex;
    gap: var(--wu-space-2);
  }

  .select-all-btn {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    text-decoration: underline;
  }

  .select-all-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); border-radius: var(--wu-radius-sm); }
`;
