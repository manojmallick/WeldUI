import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
  }

  .survey {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    padding: var(--wu-space-6);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
  }

  .question {
    margin: 0;
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .scale {
    display: flex;
    gap: var(--wu-space-1);
    flex-wrap: wrap;
  }

  .score-btn {
    width: 36px;
    height: 36px;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: transparent;
    color: var(--wu-color-text);
    font-size: var(--wu-text-sm);
    font-family: var(--wu-font-sans);
    cursor: pointer;
    transition: all var(--wu-duration-normal) var(--wu-ease-default);
    padding: 0;
  }

  .score-btn:hover {
    background: var(--wu-color-primary-subtle);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary);
  }

  .score-btn.selected {
    background: var(--wu-color-primary);
    border-color: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
  }

  .score-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .scale-labels {
    display: flex;
    justify-content: space-between;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .comment {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    resize: vertical;
  }

  .comment:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .submit-btn {
    align-self: flex-end;
    padding: var(--wu-space-2) var(--wu-space-6);
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
    opacity: 0.5;
    cursor: not-allowed;
  }

  .submit-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .submitted .thanks {
    margin: 0;
    text-align: center;
    color: var(--wu-color-success);
    font-weight: var(--wu-font-semibold);
    font-size: var(--wu-text-base);
    padding: var(--wu-space-4) 0;
  }
`;
