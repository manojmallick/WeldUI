import { css } from 'lit';

export const styles = css`
  :host {
    display: contents;
    --wu-cmd-bg: var(--wu-color-surface-overlay, var(--wu-color-white));
    --wu-cmd-border: var(--wu-color-border);
    --wu-cmd-shadow: var(--wu-shadow-xl);
    --wu-cmd-radius: var(--wu-radius-xl);
    --wu-cmd-max-height: 480px;
  }

  .backdrop {
    display: none;
    position: fixed;
    inset: 0;
    background: rgb(0 0 0 / 0.4);
    z-index: 200;
    align-items: flex-start;
    justify-content: center;
    padding-top: 10vh;
  }

  :host([open]) .backdrop {
    display: flex;
  }

  .panel {
    width: 100%;
    max-width: 560px;
    background: var(--wu-cmd-bg);
    border: 1px solid var(--wu-cmd-border);
    border-radius: var(--wu-cmd-radius);
    box-shadow: var(--wu-cmd-shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: var(--wu-cmd-max-height);
  }

  .search-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-cmd-border);
  }

  .search-icon {
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .search-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    color: var(--wu-color-text);
    padding: 0;
  }

  .search-input::placeholder {
    color: var(--wu-color-text-disabled);
  }

  .list {
    overflow-y: auto;
    flex: 1;
    padding: var(--wu-space-2);
  }

  .group-label {
    padding: var(--wu-space-1) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-top: var(--wu-space-1);
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-3);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
    list-style: none;
  }

  .item:hover,
  .item[aria-selected='true'] {
    background: var(--wu-color-surface);
  }

  .item[aria-selected='true'] {
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
  }

  .item-icon {
    flex-shrink: 0;
    color: var(--wu-color-text-secondary);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-label {
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: inherit;
  }

  .item-shortcut {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
    background: var(--wu-color-surface);
    padding: 1px 5px;
    border-radius: var(--wu-radius-sm);
    border: 1px solid var(--wu-color-border);
  }

  .empty {
    padding: var(--wu-space-8) var(--wu-space-4);
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .footer {
    border-top: 1px solid var(--wu-cmd-border);
    padding: var(--wu-space-2) var(--wu-space-4);
    display: flex;
    gap: var(--wu-space-4);
  }

  .kbd-hint {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
  }

  kbd {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: 3px;
    padding: 1px 4px;
  }
`;
