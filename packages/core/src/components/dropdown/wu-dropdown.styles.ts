import { css } from 'lit';
export const styles = css`
  :host { position: relative; display: inline-block; }
  .trigger-slot { display: inline-flex; }

  .dropdown-menu {
    position: absolute; z-index: 200; top: calc(100% + 4px); left: 0;
    min-width: 200px;
    background: var(--wu-color-surface-overlay, var(--wu-color-surface));
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-lg);
    padding: var(--wu-space-1);
    overflow: hidden;
  }
  .dropdown-menu[hidden] { display: none; }
  :host([placement="right"]) .dropdown-menu { left: auto; right: 0; }
  :host([placement="top"]) .dropdown-menu { top: auto; bottom: calc(100% + 4px); }

  /* ── Search input ─────────────────────────────────────────── */
  .search-wrapper {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 8px;
    border-bottom: 1px solid var(--wu-color-border);
    margin-bottom: 4px;
  }
  .search-icon { flex-shrink: 0; color: var(--wu-color-text-secondary); }
  .search-input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    min-width: 0;
  }
  .search-input::placeholder { color: var(--wu-color-text-disabled); }

  /* ── Group header ─────────────────────────────────────────── */
  .group-header {
    padding: 4px 10px 2px;
    font-size: 10px;
    font-weight: var(--wu-font-semibold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  /* ── Menu item ────────────────────────────────────────────── */
  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    width: 100%;
    padding: 7px 10px;
    border: none;
    background: none;
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    text-align: left;
    transition: background var(--wu-duration-fast);
  }

  .item:hover:not(:disabled) { background: var(--wu-color-primary-subtle, var(--wu-color-surface)); }
  .item.danger { color: var(--wu-color-danger); }
  .item.danger:hover:not(:disabled) { background: color-mix(in srgb, var(--wu-color-danger) 10%, transparent); }
  .item.checked { font-weight: var(--wu-font-medium); }
  .item:disabled { opacity: 0.5; cursor: not-allowed; }

  .item-icon { flex-shrink: 0; width: 18px; display: flex; align-items: center; justify-content: center; font-size: 14px; }
  .item-body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 1px; }
  .item-label { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .item-desc { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .checkmark { flex-shrink: 0; color: var(--wu-color-primary); }

  .separator { height: 1px; background: var(--wu-color-border); margin: var(--wu-space-1) 0; }

  /* ── Empty state ──────────────────────────────────────────── */
  .empty {
    padding: 10px 12px;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-align: center;
  }
`;
