import { css } from 'lit';
export const styles = css`
  :host { display: inline-block; }
  .rating { display: flex; gap: 2px; align-items: center; }
  .star { background: none; border: none; cursor: pointer; padding: 2px; font-size: 20px; color: var(--wu-color-border-strong); transition: color var(--wu-duration-fast); line-height: 1; }
  .star.filled { color: var(--wu-color-warning); }
  .star:hover, .star.hovered { color: var(--wu-color-warning); }
  :host([readonly]) .star { cursor: default; pointer-events: none; }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
  .label { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-left: var(--wu-space-2); }
`;
