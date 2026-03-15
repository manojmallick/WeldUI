import { css } from 'lit';
export const styles = css`
  :host { display: inline-block; }
  .countdown { display: flex; gap: var(--wu-space-2); align-items: flex-end; }
  .unit { display: flex; flex-direction: column; align-items: center; }
  .value { font-family: var(--wu-font-mono); font-size: var(--wu-text-2xl); font-weight: var(--wu-font-bold); color: var(--wu-color-text); line-height: 1; min-width: 2ch; text-align: center; }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: 2px; }
  .sep { font-family: var(--wu-font-mono); font-size: var(--wu-text-2xl); font-weight: var(--wu-font-bold); color: var(--wu-color-text-secondary); padding-bottom: 16px; }
  :host([variant="compact"]) .label { display: none; }
  .expired { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-danger); font-weight: var(--wu-font-medium); }
`;
