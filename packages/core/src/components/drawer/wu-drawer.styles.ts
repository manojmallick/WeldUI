import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  .backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); z-index: 300; opacity: 0; transition: opacity var(--wu-duration-normal); }
  :host([open]) .backdrop { opacity: 1; }
  .drawer {
    position: fixed; top: 0; bottom: 0; background: var(--wu-color-background);
    display: flex; flex-direction: column; z-index: 301;
    box-shadow: var(--wu-shadow-xl);
    transition: transform var(--wu-duration-slow) var(--wu-ease-default);
    width: var(--wu-drawer-width, 320px);
  }
  :host([placement="left"]) .drawer { left: 0; transform: translateX(-100%); }
  :host([placement="right"]) .drawer, :host(:not([placement])) .drawer { right: 0; transform: translateX(100%); }
  :host([placement="top"]) .drawer { top: 0; left: 0; right: 0; height: var(--wu-drawer-height, 40vh); width: 100%; transform: translateY(-100%); }
  :host([placement="bottom"]) .drawer { bottom: 0; left: 0; right: 0; height: var(--wu-drawer-height, 40vh); width: 100%; transform: translateY(100%); }
  :host([open]) .drawer { transform: none; }
  .backdrop[hidden], :host(:not([open])) .backdrop, :host(:not([open])) .drawer { display: none; }
  :host([open]) .backdrop { display: block; }
  :host([open]) .drawer { display: flex; }
  .drawer-header { display: flex; align-items: center; justify-content: space-between; padding: var(--wu-space-4); border-bottom: 1px solid var(--wu-color-border); }
  .drawer-title { font-family: var(--wu-font-sans); font-size: var(--wu-text-base); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .close-btn { background: none; border: none; cursor: pointer; padding: 4px; border-radius: var(--wu-radius-sm); color: var(--wu-color-text-secondary); }
  .close-btn:hover { background: var(--wu-color-surface); }
  .drawer-body { flex: 1; overflow-y: auto; padding: var(--wu-space-4); }
  .drawer-footer { padding: var(--wu-space-4); border-top: 1px solid var(--wu-color-border); }
`;
