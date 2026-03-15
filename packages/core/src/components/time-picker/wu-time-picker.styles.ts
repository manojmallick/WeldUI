import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  label { display: block; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-1); }
  .time-wrap { display: flex; align-items: center; gap: var(--wu-space-1); }
  .drum { display: flex; flex-direction: column; align-items: center; gap: 2px; }
  .drum-label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); }
  select.drum-select {
    -webkit-appearance: none; appearance: none;
    width: 56px; text-align: center; padding: var(--wu-space-1);
    border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-mono); font-size: var(--wu-text-sm);
    color: var(--wu-color-text); background: var(--wu-color-background);
    cursor: pointer;
  }
  select.drum-select:focus { outline: none; border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .sep { font-family: var(--wu-font-mono); font-size: var(--wu-text-lg); font-weight: var(--wu-font-bold); color: var(--wu-color-text-secondary); align-self: flex-end; padding-bottom: 4px; }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;
