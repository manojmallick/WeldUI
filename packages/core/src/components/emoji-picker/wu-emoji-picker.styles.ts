import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-emoji-bg: var(--wu-color-surface);
    --wu-emoji-border: var(--wu-color-border);
    --wu-emoji-radius: var(--wu-radius-lg);
  }

  .picker {
    background: var(--wu-emoji-bg);
    border: 1px solid var(--wu-emoji-border);
    border-radius: var(--wu-emoji-radius);
    width: 320px;
    max-width: 100%;
    overflow: hidden;
  }

  .search-row {
    padding: var(--wu-space-2) var(--wu-space-3);
    border-bottom: 1px solid var(--wu-emoji-border);
  }

  .search-input {
    width: 100%;
    box-sizing: border-box;
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-emoji-border);
    border-radius: var(--wu-radius-md);
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .search-input:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .category-label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-2) var(--wu-space-3) var(--wu-space-1);
  }

  .emoji-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 0 var(--wu-space-2) var(--wu-space-2);
    gap: 2px;
    max-height: 240px;
    overflow-y: auto;
  }

  .emoji-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    line-height: 1;
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    text-align: center;
  }

  .emoji-btn:hover {
    background: var(--wu-color-surface-raised);
  }

  .emoji-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .no-results {
    padding: var(--wu-space-4);
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }
`;
