import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .bars { display: flex; align-items: flex-end; gap: var(--wu-space-2); height: 120px; }
  .bar-wrap { display: flex; flex-direction: column; align-items: center; gap: 2px; flex: 1; }
  .bar { width: 100%; border-radius: var(--wu-radius-sm) var(--wu-radius-sm) 0 0; min-height: 4px; transition: opacity var(--wu-duration-normal) var(--wu-ease-default); }
  .bar.positive { background: var(--wu-color-success); }
  .bar.negative { background: var(--wu-color-danger); }
  .bar.total { background: var(--wu-color-primary); }
  .bar-label { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); text-align: center; }
  .bar-value { font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); color: var(--wu-color-text); }
`;
