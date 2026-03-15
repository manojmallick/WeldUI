import { css } from 'lit';

export const radioGroupStyles = css`
  :host {
    display: block;
    --wu-radio-group-gap: var(--wu-space-3);
  }

  .group {
    display: flex;
    flex-direction: column;
    gap: var(--wu-radio-group-gap);
  }

  :host([orientation='horizontal']) .group {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .legend {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-2);
  }

  .error {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-danger);
    margin-top: var(--wu-space-1);
  }
`;

export const radioStyles = css`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    cursor: pointer;
    --wu-radio-size: 18px;
    --wu-radio-color: var(--wu-color-primary);
    --wu-radio-border: var(--wu-color-border-strong);
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    width: var(--wu-radio-size);
    height: var(--wu-radio-size);
    border: 2px solid var(--wu-radio-border);
    border-radius: 50%;
    background: var(--wu-color-background);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    flex-shrink: 0;
    cursor: pointer;
    position: relative;
    outline: none;
  }

  input[type='radio']:checked {
    border-color: var(--wu-radio-color);
    background: var(--wu-radio-color);
    box-shadow: inset 0 0 0 3px var(--wu-color-background);
  }

  input[type='radio']:focus-visible {
    box-shadow: var(--wu-focus-ring), inset 0 0 0 3px var(--wu-color-background);
  }

  input[type='radio']:checked:focus-visible {
    border-color: var(--wu-radio-color);
  }

  input[type='radio']:disabled {
    cursor: not-allowed;
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
  }

  :host([disabled]) label {
    cursor: not-allowed;
  }
`;
