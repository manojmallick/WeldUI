import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    margin-bottom: var(--wu-space-4);
    position: relative;
  }

  label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .input-wrap {
    position: relative;
  }

  input, textarea {
    width: 100%;
    box-sizing: border-box;
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  input:focus, textarea:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  input[aria-readonly="true"], textarea[aria-readonly="true"] {
    background: var(--wu-color-surface);
    cursor: not-allowed;
    opacity: 0.7;
  }

  .lock-badge {
    position: absolute;
    right: var(--wu-space-2);
    top: 50%;
    transform: translateY(-50%);
    font-size: var(--wu-text-xs);
    background: var(--wu-color-warning-subtle);
    color: var(--wu-color-warning);
    padding: 2px 6px;
    border-radius: var(--wu-radius-full);
    white-space: nowrap;
  }
`;
