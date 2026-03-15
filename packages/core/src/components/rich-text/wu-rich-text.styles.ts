import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  label { display: block; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-1); }
  .wrapper { border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); overflow: hidden; }
  .wrapper:focus-within { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .toolbar { display: flex; flex-wrap: wrap; gap: 2px; padding: var(--wu-space-2); background: var(--wu-color-surface); border-bottom: 1px solid var(--wu-color-border); }
  .tb-btn {
    padding: 4px 8px; background: none; border: 1px solid transparent;
    border-radius: var(--wu-radius-sm); cursor: pointer;
    font-family: var(--wu-font-sans); font-size: var(--wu-text-xs);
    color: var(--wu-color-text); line-height: 1.2; transition: background var(--wu-duration-fast);
  }
  .tb-btn:hover { background: var(--wu-color-surface-raised); }
  .tb-btn.active { background: var(--wu-color-primary-subtle); border-color: var(--wu-color-primary); color: var(--wu-color-primary); }
  .tb-sep { width: 1px; height: 24px; background: var(--wu-color-border); margin: 0 4px; align-self: center; }
  .content {
    min-height: 120px; max-height: 400px; overflow-y: auto;
    padding: var(--wu-space-3); font-family: var(--wu-font-sans); font-size: var(--wu-text-sm);
    color: var(--wu-color-text); line-height: var(--wu-leading-normal); outline: none;
  }
  .content:empty::before { content: attr(data-placeholder); color: var(--wu-color-text-disabled); pointer-events: none; }
  .content h1 { font-size: var(--wu-text-xl); font-weight: var(--wu-font-bold); margin: 0 0 var(--wu-space-2); }
  .content h2 { font-size: var(--wu-text-lg); font-weight: var(--wu-font-semibold); margin: 0 0 var(--wu-space-2); }
  .content ul, .content ol { padding-left: var(--wu-space-5); margin: 0 0 var(--wu-space-2); }
  .content a { color: var(--wu-color-primary); text-decoration: underline; }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
  :host([readonly]) .toolbar { display: none; }
  :host([readonly]) .content { background: var(--wu-color-surface); }
`;
