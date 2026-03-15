import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  label { display: block; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-1); }
  .trigger { display: flex; align-items: center; gap: var(--wu-space-2); padding: var(--wu-space-2) var(--wu-space-3); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); background: var(--wu-color-background); cursor: pointer; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); min-width: 280px; }
  .trigger:focus { outline: none; border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .trigger-icon { color: var(--wu-color-text-secondary); }
  .popup { position: absolute; z-index: 200; margin-top: var(--wu-space-1); background: var(--wu-color-background); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-lg); box-shadow: var(--wu-shadow-lg); padding: var(--wu-space-4); display: flex; gap: var(--wu-space-4); }
  .popup[hidden] { display: none; }
  .cal { display: flex; flex-direction: column; gap: var(--wu-space-2); }
  .cal-header { display: flex; align-items: center; justify-content: space-between; }
  .cal-title { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .nav-btn { background: none; border: none; cursor: pointer; padding: 4px; color: var(--wu-color-text-secondary); border-radius: var(--wu-radius-sm); }
  .nav-btn:hover { background: var(--wu-color-surface); }
  .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 2px; }
  .cal-dow { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); text-align: center; padding: 4px 0; }
  .day { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); border-radius: var(--wu-radius-md); cursor: pointer; border: none; background: none; color: var(--wu-color-text); }
  .day:hover:not(:disabled) { background: var(--wu-color-surface); }
  .day.in-range { background: var(--wu-color-primary-subtle); }
  .day.start, .day.end { background: var(--wu-color-primary); color: var(--wu-color-primary-fg); }
  .day:disabled { color: var(--wu-color-text-disabled); cursor: not-allowed; }
  .actions { display: flex; justify-content: flex-end; gap: var(--wu-space-2); padding-top: var(--wu-space-2); border-top: 1px solid var(--wu-color-border); }
  .btn { padding: var(--wu-space-1) var(--wu-space-3); border-radius: var(--wu-radius-md); font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); cursor: pointer; border: 1px solid var(--wu-color-border); background: var(--wu-color-background); color: var(--wu-color-text); }
  .btn-primary { background: var(--wu-color-primary); color: var(--wu-color-primary-fg); border-color: var(--wu-color-primary); }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;
