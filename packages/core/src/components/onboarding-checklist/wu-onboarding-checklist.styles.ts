import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
  }

  .checklist {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-5);
    max-width: 360px;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--wu-space-3);
  }

  .title {
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .dismiss-btn {
    background: transparent;
    border: none;
    padding: var(--wu-space-1);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    border-radius: var(--wu-radius-sm);
    display: flex;
    align-items: center;
  }

  .dismiss-btn:hover { color: var(--wu-color-text); }

  .dismiss-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .progress-bar-wrap {
    height: 6px;
    background: var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    overflow: hidden;
    margin-bottom: var(--wu-space-2);
  }

  .progress-bar {
    height: 100%;
    background: var(--wu-color-primary);
    border-radius: var(--wu-radius-full);
    transition: width var(--wu-duration-slow) var(--wu-ease-default);
  }

  .progress-text {
    margin: 0 0 var(--wu-space-3);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
  }

  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
  }

  .item-label {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    transition: color var(--wu-duration-normal);
  }

  .item.completed .item-label {
    color: var(--wu-color-text-secondary);
    text-decoration: line-through;
  }

  .check-btn {
    width: 24px;
    height: 24px;
    min-width: 24px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-border-strong);
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    color: var(--wu-color-primary-fg);
    transition: all var(--wu-duration-normal) var(--wu-ease-default);
  }

  .check-btn:hover:not(:disabled) {
    border-color: var(--wu-color-primary);
    background: var(--wu-color-primary-subtle);
  }

  .check-btn:disabled {
    background: var(--wu-color-primary);
    border-color: var(--wu-color-primary);
    cursor: default;
    color: var(--wu-color-primary-fg);
  }

  .check-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .empty-check {
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: transparent;
  }
`;
