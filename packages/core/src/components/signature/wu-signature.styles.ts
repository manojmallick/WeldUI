import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-sig-border: var(--wu-color-border);
    --wu-sig-bg: var(--wu-color-surface);
    --wu-sig-radius: var(--wu-radius-md);
    --wu-sig-line-color: var(--wu-color-text);
  }

  .wrapper {
    position: relative;
    border: 1px solid var(--wu-sig-border);
    border-radius: var(--wu-sig-radius);
    background: var(--wu-sig-bg);
    overflow: hidden;
  }

  canvas {
    display: block;
    width: 100%;
    touch-action: none;
    cursor: crosshair;
  }

  .placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wu-color-text-disabled);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    pointer-events: none;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    padding: var(--wu-space-2) var(--wu-space-3);
    border-top: 1px solid var(--wu-sig-border);
    background: var(--wu-color-surface);
  }

  .clear-btn {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--wu-space-1) var(--wu-space-2);
    border-radius: var(--wu-radius-sm);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .clear-btn:hover {
    background: var(--wu-color-surface-raised);
  }

  .clear-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }
`;
