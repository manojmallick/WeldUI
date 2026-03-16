import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    position: relative;
  }

  .bar {
    display: inline-flex;
    gap: var(--wu-space-1);
    align-items: center;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-1) var(--wu-space-2);
    box-shadow: var(--wu-shadow-md);
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    border: none;
    background: transparent;
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    white-space: nowrap;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  button:hover {
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
  }

  .divider {
    width: 1px;
    height: 16px;
    background: var(--wu-color-border);
    align-self: center;
  }
`;
