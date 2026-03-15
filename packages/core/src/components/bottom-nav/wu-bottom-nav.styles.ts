import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--wu-color-surface-raised);
    border-top: 1px solid var(--wu-color-border);
    z-index: 100;
    padding: var(--wu-space-1) 0;
    box-shadow: var(--wu-shadow-md);
  }
  ::slotted(wu-bottom-nav-item) {
    flex: 1;
  }
`;

export const itemStyles = css`
  :host {
    display: block;
  }
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 100%;
    padding: var(--wu-space-2) var(--wu-space-1);
    background: none;
    border: none;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    cursor: pointer;
    transition: color var(--wu-duration-fast) var(--wu-ease-default);
  }
  button:hover { color: var(--wu-color-primary); }
  :host([active]) button { color: var(--wu-color-primary); }
  .icon { font-size: 1.25rem; line-height: 1; }
  .label { line-height: 1; }
`;
