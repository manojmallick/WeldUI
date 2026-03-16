import { css } from 'lit';

export const styles = css`
  :host { display: block; }
  .chart { width: 100%; }
  .stage { display: flex; flex-direction: column; gap: var(--wu-space-1); margin-bottom: var(--wu-space-2); }
  .stage-row { display: flex; align-items: center; gap: var(--wu-space-2); }
  .bar { height: 28px; background: var(--wu-color-primary); border-radius: var(--wu-radius-sm); transition: width var(--wu-duration-slow) var(--wu-ease-default); }
  .label { font-size: var(--wu-text-xs); color: var(--wu-color-text); min-width: 80px; white-space: nowrap; }
  .value { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
`;
