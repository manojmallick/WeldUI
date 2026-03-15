import { css } from 'lit';

export const styles = css`
  :host { display: contents; }

  .overlay {
    position: fixed;
    inset: 0;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.4);
    backdrop-filter: blur(2px);
  }

  .panel {
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-xl);
    box-shadow: var(--wu-shadow-xl);
    padding: var(--wu-space-6);
    max-width: 360px;
    width: calc(100vw - 32px);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    font-family: var(--wu-font-sans);
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .counter {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
  }

  .skip-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-base);
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    outline: none;
  }
  .skip-btn:focus-visible { box-shadow: var(--wu-focus-ring); }
  .skip-btn:hover { color: var(--wu-color-text); }

  .title {
    margin: 0;
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .content {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    line-height: var(--wu-leading-relaxed);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-2);
    justify-content: flex-end;
  }

  .btn-primary, .btn-secondary {
    padding: var(--wu-space-2) var(--wu-space-4);
    border-radius: var(--wu-radius-md);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    outline: none;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
  }

  .btn-primary:focus-visible, .btn-secondary:focus-visible { box-shadow: var(--wu-focus-ring); }

  .btn-primary {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
  }
  .btn-primary:hover { background: var(--wu-color-primary-hover); }

  .btn-secondary {
    background: transparent;
    color: var(--wu-color-text);
    border: 1px solid var(--wu-color-border);
  }
  .btn-secondary:hover { background: var(--wu-color-surface); }

  .dots { display: flex; justify-content: center; gap: var(--wu-space-1); }

  .dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--wu-color-border-strong);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .dot.active { background: var(--wu-color-primary); }
`;
