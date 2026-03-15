import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .api-key-display {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .key-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-3);
  }

  .key-value {
    flex: 1;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    letter-spacing: 0.05em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .actions {
    display: flex;
    gap: var(--wu-space-1);
    flex-shrink: 0;
  }

  .icon-btn {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    transition: color var(--wu-duration-fast), background var(--wu-duration-fast);
    padding: 0;
  }

  .icon-btn:hover { background: var(--wu-color-surface-raised); color: var(--wu-color-text); }
  .icon-btn.copied { color: var(--wu-color-success); }
  .icon-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;
