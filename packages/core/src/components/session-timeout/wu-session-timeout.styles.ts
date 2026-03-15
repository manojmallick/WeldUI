import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .timeout-warning {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    background: var(--wu-color-warning-subtle);
    border: 1px solid var(--wu-color-warning);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-4) var(--wu-space-5);
    flex-wrap: wrap;
  }

  .icon {
    font-size: 24px;
    flex-shrink: 0;
  }

  .content {
    flex: 1;
    min-width: 200px;
  }

  .message, .sub {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }

  .sub {
    color: var(--wu-color-text-secondary);
    margin-top: var(--wu-space-1);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-2);
    flex-shrink: 0;
  }

  .extend-btn {
    padding: var(--wu-space-2) var(--wu-space-4);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal);
  }

  .extend-btn:hover { background: var(--wu-color-primary-hover); }
  .extend-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .logout-btn {
    padding: var(--wu-space-2) var(--wu-space-4);
    background: transparent;
    color: var(--wu-color-text-secondary);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    cursor: pointer;
    transition: background var(--wu-duration-normal);
  }

  .logout-btn:hover { background: var(--wu-color-surface-raised); }
  .logout-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;
