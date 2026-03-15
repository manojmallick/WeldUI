import { css } from 'lit';
export const styles = css`
  :host { position: relative; display: inline-block; }
  .trigger-slot { display: inline-flex; }
  .dropdown-menu {
    position: absolute; z-index: 200; top: calc(100% + 4px); left: 0;
    min-width: 180px; background: var(--wu-color-surface-overlay);
    border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-lg); padding: var(--wu-space-1);
  }
  .dropdown-menu[hidden] { display: none; }
  :host([placement="right"]) .dropdown-menu { left: auto; right: 0; }
  :host([placement="top"]) .dropdown-menu { top: auto; bottom: calc(100% + 4px); }
  .item { display: flex; align-items: center; gap: var(--wu-space-2); width: 100%; padding: var(--wu-space-2) var(--wu-space-3); border: none; background: none; border-radius: var(--wu-radius-md); cursor: pointer; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); text-align: left; }
  .item:hover { background: var(--wu-color-surface); }
  .item.danger { color: var(--wu-color-danger); }
  .item:disabled { opacity: 0.5; cursor: not-allowed; }
  .separator { height: 1px; background: var(--wu-color-border); margin: var(--wu-space-1) 0; }
`;
