import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    position: fixed;
    bottom: var(--wu-space-6);
    right: var(--wu-space-6);
    z-index: 300;
    font-family: var(--wu-font-sans);
  }
  .container { position: relative; display: flex; flex-direction: column; align-items: center; gap: var(--wu-space-2); }
  :host([direction="up"]) .container { flex-direction: column-reverse; }
  :host([direction="left"]) .container { flex-direction: row-reverse; align-items: center; }
  .fab {
    width: 56px;
    height: 56px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--wu-shadow-lg);
    transition: transform var(--wu-duration-normal) var(--wu-ease-default), background var(--wu-duration-fast);
    flex-shrink: 0;
  }
  .fab:hover { background: var(--wu-color-primary-hover); }
  :host([open]) .fab { transform: rotate(45deg); }
  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--wu-space-2);
    transition: opacity var(--wu-duration-normal), transform var(--wu-duration-normal) var(--wu-ease-default);
  }
  :host([direction="left"]) .actions { flex-direction: row; }
  .actions[hidden] { display: none; }
  .action-btn {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    padding: var(--wu-space-2) var(--wu-space-3);
    cursor: pointer;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    box-shadow: var(--wu-shadow-md);
    white-space: nowrap;
    transition: background var(--wu-duration-fast);
  }
  .action-btn:hover { background: var(--wu-color-surface); }
  .action-icon { font-size: 1rem; }
`;
