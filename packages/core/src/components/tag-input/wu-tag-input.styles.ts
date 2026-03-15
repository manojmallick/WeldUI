import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  label { display: block; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-1); }
  .tag-container {
    min-height: 40px; padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md);
    background: var(--wu-color-background); display: flex; flex-wrap: wrap;
    gap: var(--wu-space-1); align-items: center; cursor: text;
    transition: border-color var(--wu-duration-fast);
  }
  .tag-container:focus-within { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .tag {
    display: inline-flex; align-items: center; gap: 4px;
    padding: 2px var(--wu-space-2);
    background: var(--wu-color-surface); color: var(--wu-color-text);
    border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans); font-size: var(--wu-text-xs);
  }
  .tag-remove { background: none; border: none; cursor: pointer; padding: 0; color: var(--wu-color-text-secondary); font-size: 12px; line-height: 1; }
  .tag-remove:hover { color: var(--wu-color-danger); }
  .tag-input { flex: 1; min-width: 80px; border: none; outline: none; background: transparent; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); }
  .hint { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: var(--wu-space-1); }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;
