import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-3);
    font-family: var(--wu-font-sans);
  }

  .prompt {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
  }

  .controls {
    display: flex;
    gap: var(--wu-space-1);
  }

  .thumb,
  .star {
    background: none;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-1) var(--wu-space-2);
    font-size: var(--wu-text-base);
    cursor: pointer;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    line-height: 1;
  }

  .thumb:hover,
  .star:hover {
    background: var(--wu-color-surface);
    border-color: var(--wu-color-border-strong);
  }

  .thumb:focus-visible,
  .star:focus-visible { box-shadow: var(--wu-focus-ring); outline: none; }

  .star { color: var(--wu-color-border-strong); border: none; font-size: var(--wu-text-lg); }
  .star.filled { color: var(--wu-color-warning); }

  .submitted { color: var(--wu-color-success); font-size: var(--wu-text-sm); }
  .thanks { font-weight: var(--wu-font-medium); }
`;
