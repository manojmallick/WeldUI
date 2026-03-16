import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-2); }
  .placeholder { background: var(--wu-color-surface); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--wu-space-2); padding: var(--wu-space-8); color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); min-height: 200px; }
  .placeholder svg { width: 40px; height: 40px; opacity: 0.5; }
  .stats { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); }
  .nodes-list { display: flex; flex-wrap: wrap; gap: var(--wu-space-2); margin-top: var(--wu-space-2); }
  .node-chip { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); padding: 2px var(--wu-space-2); border-radius: var(--wu-radius-full); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); }
`;
