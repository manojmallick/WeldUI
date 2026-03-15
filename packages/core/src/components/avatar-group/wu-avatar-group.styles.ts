import { css } from 'lit';
export const styles = css`
  :host { display: inline-flex; }
  .group { display: flex; align-items: center; }
  ::slotted(wu-avatar) { margin-left: -8px; border: 2px solid var(--wu-color-background); border-radius: 50%; }
  ::slotted(wu-avatar:first-child) { margin-left: 0; }
  .overflow { width: 36px; height: 36px; border-radius: 50%; background: var(--wu-color-surface); color: var(--wu-color-text-secondary); font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-semibold); display: flex; align-items: center; justify-content: center; border: 2px solid var(--wu-color-background); margin-left: -8px; }
`;
