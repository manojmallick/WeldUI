import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .placeholder { background: var(--wu-color-surface); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--wu-space-2); padding: var(--wu-space-8); color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); min-height: 200px; }
  .placeholder svg { width: 40px; height: 40px; opacity: 0.5; }
  .region-list { width: 100%; max-height: 120px; overflow-y: auto; }
  .region { display: flex; align-items: center; justify-content: space-between; padding: var(--wu-space-1) var(--wu-space-2); border-radius: var(--wu-radius-sm); font-size: var(--wu-text-xs); }
  .region:hover { background: var(--wu-color-surface); }
  .region-id { color: var(--wu-color-text-secondary); font-weight: var(--wu-font-medium); }
  .region-label { color: var(--wu-color-text); flex: 1; margin: 0 var(--wu-space-2); }
  .region-value { color: var(--wu-color-primary); font-weight: var(--wu-font-semibold); }
`;
