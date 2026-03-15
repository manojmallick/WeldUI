import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .bar {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    cursor: text;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .bar:focus-within {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .icon {
    flex-shrink: 0;
    width: 16px; height: 16px;
    color: var(--wu-color-text-secondary);
  }

  .input {
    flex: 1;
    border: none;
    background: transparent;
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    outline: none;
    min-width: 0;
  }

  .input::placeholder { color: var(--wu-color-text-disabled); }

  .placeholder {
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-disabled);
    user-select: none;
  }

  .shortcut {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    background: var(--wu-color-background);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;
