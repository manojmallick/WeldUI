import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  .cal { display: inline-flex; flex-direction: column; gap: var(--wu-space-2); background: var(--wu-color-background); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-lg); padding: var(--wu-space-4); }
  .cal-header { display: flex; align-items: center; justify-content: space-between; }
  .cal-title { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .nav-btn { background: none; border: none; cursor: pointer; padding: 4px 8px; border-radius: var(--wu-radius-md); color: var(--wu-color-text-secondary); }
  .nav-btn:hover { background: var(--wu-color-surface); }
  .grid { display: grid; grid-template-columns: repeat(7, 36px); gap: 2px; }
  .dow { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); text-align: center; padding: 4px 0; }
  .day { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); border-radius: var(--wu-radius-md); cursor: pointer; background: none; border: none; color: var(--wu-color-text); }
  .day:hover:not(:disabled) { background: var(--wu-color-surface); }
  .day.today { font-weight: var(--wu-font-bold); color: var(--wu-color-primary); }
  .day.selected { background: var(--wu-color-primary); color: var(--wu-color-primary-fg); }
  .day:disabled { color: var(--wu-color-text-disabled); cursor: not-allowed; }
`;
