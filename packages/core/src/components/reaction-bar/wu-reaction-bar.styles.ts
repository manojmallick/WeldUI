import { css } from 'lit';

export const styles = css`
  :host { display: inline-flex; }

  .bar {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    align-items: center;
  }

  .reaction, .add-btn {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-surface);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  .reaction:hover, .add-btn:hover {
    background: var(--wu-color-primary-subtle);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .reaction:focus-visible, .add-btn:focus-visible { box-shadow: var(--wu-focus-ring); }

  .reaction.active {
    background: var(--wu-color-primary-subtle);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .emoji { font-size: 1rem; line-height: 1; }
  .count { font-weight: var(--wu-font-semibold); }
  .add-btn { padding: var(--wu-space-1) var(--wu-space-2); font-size: var(--wu-text-sm); }
`;
