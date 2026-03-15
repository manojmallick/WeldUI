import { css } from 'lit';

export const styles = css`
  :host { display: inline-flex; }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-2);
    background: transparent;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  .btn:hover {
    background: var(--wu-color-danger-subtle);
    border-color: var(--wu-color-danger);
    color: var(--wu-color-danger);
  }

  .btn:focus-visible { box-shadow: var(--wu-focus-ring); }

  :host([active]) .btn {
    color: var(--wu-color-danger);
    border-color: var(--wu-color-danger);
    background: var(--wu-color-danger-subtle);
  }

  .heart { width: 20px; height: 20px; }

  .count {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    line-height: 1;
    padding-right: var(--wu-space-1);
  }
`;
