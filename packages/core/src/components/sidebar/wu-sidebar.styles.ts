import { css } from 'lit';

export const sidebarStyles = css`
  :host {
    display: flex;
    flex-direction: column;

    --wu-sidebar-width:          240px;
    --wu-sidebar-collapsed-width: 64px;
    --wu-sidebar-bg:             var(--wu-color-surface);
    --wu-sidebar-border:         var(--wu-color-border);
    --wu-sidebar-padding:        var(--wu-space-3);
    --wu-sidebar-transition:     width var(--wu-duration-normal) var(--wu-ease-default);
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    width: var(--wu-sidebar-width);
    height: 100%;
    background: var(--wu-sidebar-bg);
    border-right: 1px solid var(--wu-sidebar-border);
    overflow: hidden;
    transition: var(--wu-sidebar-transition);
    flex-shrink: 0;
  }

  :host([collapsed]) .sidebar {
    width: var(--wu-sidebar-collapsed-width);
  }

  /* ── Header ──────────────────────────────── */
  .header {
    display: flex;
    align-items: center;
    padding: var(--wu-sidebar-padding);
    border-bottom: 1px solid var(--wu-sidebar-border);
    gap: var(--wu-space-3);
    min-height: 60px;
    flex-shrink: 0;
  }

  .header-slot {
    flex: 1;
    overflow: hidden;
    transition: opacity var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([collapsed]) .header-slot {
    opacity: 0;
    pointer-events: none;
    width: 0;
  }

  /* ── Toggle button ───────────────────────── */
  .toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    background: none;
    border: 1px solid var(--wu-sidebar-border);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .toggle:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .toggle-icon {
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([collapsed]) .toggle-icon {
    transform: rotate(180deg);
  }

  /* ── Nav items area ──────────────────────── */
  .body {
    flex: 1;
    overflow-y: auto;
    overflow-x: hidden;
    padding: var(--wu-sidebar-padding);
    scrollbar-width: thin;
  }

  /* ── Footer ──────────────────────────────── */
  .footer {
    padding: var(--wu-sidebar-padding);
    border-top: 1px solid var(--wu-sidebar-border);
    flex-shrink: 0;
  }

  :host(:not([collapsed])) .footer:empty { display: none; }
`;

export const itemStyles = css`
  :host {
    display: block;

    --wu-sidebar-item-bg-hover:  var(--wu-color-surface-raised);
    --wu-sidebar-item-bg-active: var(--wu-color-primary-subtle);
    --wu-sidebar-item-color:     var(--wu-color-text-secondary);
    --wu-sidebar-item-color-active: var(--wu-color-primary);
    --wu-sidebar-item-radius:    var(--wu-radius-md);
    --wu-sidebar-item-font-size: var(--wu-text-sm);
  }

  a, .item-btn {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-3);
    border-radius: var(--wu-sidebar-item-radius);
    text-decoration: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-sidebar-item-font-size);
    font-weight: var(--wu-font-medium);
    color: var(--wu-sidebar-item-color);
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    transition: background var(--wu-duration-fast) var(--wu-ease-default),
                color var(--wu-duration-fast) var(--wu-ease-default);
    white-space: nowrap;
    overflow: hidden;
  }

  a:hover, .item-btn:hover { background: var(--wu-sidebar-item-bg-hover); }
  a:focus-visible, .item-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  :host([active]) a, :host([active]) .item-btn {
    background: var(--wu-sidebar-item-bg-active);
    color: var(--wu-sidebar-item-color-active);
    font-weight: var(--wu-font-semibold);
  }

  :host([disabled]) a, :host([disabled]) .item-btn {
    opacity: 0.45;
    pointer-events: none;
  }

  .icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 20px;
    height: 20px;
    color: inherit;
  }

  .label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: opacity var(--wu-duration-normal) var(--wu-ease-default),
                width var(--wu-duration-normal) var(--wu-ease-default);
  }

  /* Hidden by parent when sidebar is collapsed */
  :host([collapsed]) .label {
    opacity: 0;
    width: 0;
    overflow: hidden;
  }
`;
