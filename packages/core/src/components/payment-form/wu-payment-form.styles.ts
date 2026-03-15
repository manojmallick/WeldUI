import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
    padding: var(--wu-space-6);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    max-width: 420px;
  }

  .heading {
    margin: 0;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .error-msg {
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-danger-subtle);
    border-left: 3px solid var(--wu-color-danger);
    border-radius: var(--wu-radius-sm);
    color: var(--wu-color-danger);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    margin: 0;
  }

  .field { display: flex; flex-direction: column; gap: var(--wu-space-1); }

  .field-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--wu-space-3);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  input {
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  input::placeholder { color: var(--wu-color-text-disabled); }

  input:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .submit-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .submit-btn:hover:not(:disabled) { background: var(--wu-color-primary-hover); }
  .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

  .spinner {
    width: 14px; height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`;
