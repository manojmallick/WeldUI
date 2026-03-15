import { css } from 'lit';
export const styles = css`
  :host { display: inline-block; }
  .stat { padding: var(--wu-space-4); background: var(--wu-color-surface-raised); border-radius: var(--wu-radius-lg); border: 1px solid var(--wu-color-border); }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); color: var(--wu-color-text-secondary); text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: var(--wu-space-1); }
  .value { font-family: var(--wu-font-sans); font-size: var(--wu-text-2xl); font-weight: var(--wu-font-bold); color: var(--wu-color-text); line-height: 1; }
  .delta { display: inline-flex; align-items: center; gap: 4px; font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium); margin-top: var(--wu-space-1); padding: 2px 6px; border-radius: var(--wu-radius-full); }
  .delta.up { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .delta.down { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  .delta.neutral { background: var(--wu-color-surface); color: var(--wu-color-text-secondary); }
  .description { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: var(--wu-space-1); }
`;
