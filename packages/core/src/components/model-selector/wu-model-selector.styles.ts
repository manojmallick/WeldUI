import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-block;
  }

  select {
    appearance: none;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-8) var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  select:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .badge {
    display: inline-block;
    font-size: var(--wu-text-xs);
    padding: 2px 6px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    margin-left: var(--wu-space-2);
    font-weight: var(--wu-font-medium);
  }
`;
