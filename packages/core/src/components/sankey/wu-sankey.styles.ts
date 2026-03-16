import { css } from 'lit';

export const styles = css`
  :host { display: block; }
  svg { overflow: visible; }
  .node rect { rx: 2; }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
  .placeholder { background: var(--wu-color-surface); border: 1px dashed var(--wu-color-border); border-radius: var(--wu-radius-md); display: flex; align-items: center; justify-content: center; color: var(--wu-color-text-secondary); font-size: var(--wu-text-sm); height: 200px; }
`;
