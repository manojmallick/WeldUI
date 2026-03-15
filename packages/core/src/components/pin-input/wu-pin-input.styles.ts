import { css } from 'lit';
export const styles = css`
  :host { display: inline-flex; flex-direction: column; }
  label { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .pin-row { display: flex; gap: var(--wu-space-2); }
  input {
    width: 40px; height: 48px; text-align: center;
    font-family: var(--wu-font-mono); font-size: var(--wu-text-lg); font-weight: var(--wu-font-bold);
    color: var(--wu-color-text); background: var(--wu-color-background);
    border: 2px solid var(--wu-color-border); border-radius: var(--wu-radius-md);
    outline: none; caret-color: var(--wu-color-primary);
    transition: border-color var(--wu-duration-fast);
  }
  input:focus { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  input.filled { border-color: var(--wu-color-primary); }
  :host([error]) input { border-color: var(--wu-color-danger); }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
`;
