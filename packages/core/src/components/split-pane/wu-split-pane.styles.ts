import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  :host([orientation="vertical"]) { flex-direction: column; }

  .pane { overflow: auto; }
  .pane-primary { flex: 0 0 auto; }
  .pane-secondary { flex: 1 1 0; min-width: 0; min-height: 0; }

  /* ── Divider ───────────────────────────────────────────────── */
  .divider {
    flex: 0 0 8px;
    background: var(--wu-color-border);
    cursor: col-resize;
    transition: background var(--wu-duration-fast);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    touch-action: none; /* needed for pointer capture on touch */
  }

  :host([orientation="vertical"]) .divider { cursor: row-resize; }

  .divider:hover, .divider.active { background: var(--wu-color-primary); }

  .divider:focus-visible {
    background: var(--wu-color-primary);
    box-shadow: 0 0 0 2px var(--wu-color-surface), 0 0 0 4px var(--wu-color-border-focus);
  }

  /* Larger hit target without changing visual size */
  .divider::before {
    content: '';
    position: absolute;
    inset: 0 -4px;
  }

  /* ── Drag handle dots ──────────────────────────────────────── */
  .divider-handle {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--wu-color-text-disabled);
    pointer-events: none;
    transition: color var(--wu-duration-fast);
    border-radius: var(--wu-radius-sm);
    padding: 2px;
  }

  .divider:hover .divider-handle,
  .divider.active .divider-handle {
    color: var(--wu-color-primary-fg, white);
  }

  /* ── Collapse button ───────────────────────────────────────── */
  .collapse-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    opacity: 0;
    transition: opacity var(--wu-duration-fast), background var(--wu-duration-fast);
    z-index: 2;
  }

  .divider:hover .collapse-btn,
  .divider.active .collapse-btn,
  .divider:focus-visible .collapse-btn { opacity: 1; }

  .collapse-btn:hover {
    background: var(--wu-color-primary);
    border-color: var(--wu-color-primary);
    color: white;
  }

  .collapse-btn:focus-visible {
    outline: 2px solid var(--wu-color-border-focus);
    outline-offset: 1px;
    opacity: 1;
  }
`;
