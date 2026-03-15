import { css } from 'lit';

export const styles = css`
  :host { display: inline-block; position: relative; font-family: var(--wu-font-sans, system-ui); }
  .field {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
  }
  textarea, input {
    width: 100%;
    padding: var(--wu-space-2) var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans, system-ui);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    background: var(--wu-color-surface-raised);
    resize: vertical;
  }
  textarea:focus, input:focus {
    outline: none;
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }
  .mention-list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    min-width: 200px;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-lg);
    z-index: 200;
    max-height: 240px;
    overflow-y: auto;
  }
  .mention-list[hidden] { display: none; }
  .mention-item {
    padding: var(--wu-space-2) var(--wu-space-3);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    transition: background var(--wu-duration-fast);
  }
  .mention-item:hover, .mention-item.active { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
  .avatar { width: 24px; height: 24px; border-radius: 50%; background: var(--wu-color-primary); color: white; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 600; flex-shrink: 0; }
`;
