import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-5);
    max-width: 400px;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-8);
  }

  .heading {
    margin: 0;
    font-size: var(--wu-text-xl);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .error-msg {
    margin: 0;
    padding: var(--wu-space-3);
    background: var(--wu-color-danger-subtle);
    color: var(--wu-color-danger);
    border-radius: var(--wu-radius-md);
    font-size: var(--wu-text-sm);
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  label {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input[type='email'],
  input[type='password'],
  input[type='text'] {
    width: 100%;
    box-sizing: border-box;
    height: 36px;
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
  }

  input:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .pw-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }

  .pw-wrap input {
    padding-right: 56px;
  }

  .show-pw {
    position: absolute;
    right: var(--wu-space-2);
    background: transparent;
    border: none;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
    cursor: pointer;
    padding: var(--wu-space-1);
    font-family: var(--wu-font-sans);
  }

  .link-btn {
    background: transparent;
    border: none;
    padding: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-primary);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    text-decoration: underline;
  }

  .remember {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  .submit-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-space-2);
    width: 100%;
    height: 40px;
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  .submit-btn:hover:not(:disabled) {
    background: var(--wu-color-primary-hover);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submit-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin { to { transform: rotate(360deg); } }
`;
