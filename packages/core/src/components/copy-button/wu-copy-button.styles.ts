import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
    white-space: nowrap;
  }

  button:hover {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text);
  }

  button:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  button.copied {
    color: var(--wu-color-success);
    border-color: var(--wu-color-success);
  }
`;
