import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    position: relative;
    --wu-cmb-height: 36px;
  }

  :host([disabled]) {
    opacity: 0.5;
    pointer-events: none;
  }

  label {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-1);
  }

  .wrapper {
    position: relative;
  }

  input {
    width: 100%;
    height: var(--wu-cmb-height);
    padding: 0 var(--wu-space-8) 0 var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    outline: none;
    box-sizing: border-box;
    transition: border-color var(--wu-duration-fast);
  }

  input:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  :host([error]) input {
    border-color: var(--wu-color-danger);
  }

  .chevron {
    position: absolute;
    right: var(--wu-space-3);
    top: 50%;
    transform: translateY(-50%);
    color: var(--wu-color-text-secondary);
    pointer-events: none;
    font-size: 10px;
  }

  .dropdown {
    position: absolute;
    top: calc(100% + var(--wu-space-1));
    left: 0;
    right: 0;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    box-shadow: var(--wu-shadow-md);
    max-height: 240px;
    overflow-y: auto;
    z-index: 100;
    list-style: none;
    margin: 0;
    padding: var(--wu-space-1) 0;
  }

  .dropdown[hidden] {
    display: none;
  }

  .option {
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  .option:hover,
  .option[aria-selected='true'] {
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
  }

  .option.highlighted {
    background: var(--wu-color-surface);
  }

  .empty {
    padding: var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-align: center;
  }

  .error-msg {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-danger);
    margin-top: var(--wu-space-1);
  }

  .loading-indicator {
    position: absolute;
    right: var(--wu-space-3);
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border: 2px solid var(--wu-color-border);
    border-top-color: var(--wu-color-primary);
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin { to { transform: translateY(-50%) rotate(360deg); } }
`;
