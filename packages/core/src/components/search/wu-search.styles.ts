import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    flex-direction: column;
    position: relative;
    width: 100%;

    /* ── Input tokens ─────────────────────────────────────────── */
    --wu-search-bg:           var(--wu-color-surface);
    --wu-search-border:       var(--wu-color-border);
    --wu-search-border-focus: var(--wu-color-border-focus);
    --wu-search-color:        var(--wu-color-text);
    --wu-search-placeholder:  var(--wu-color-text-disabled);
    --wu-search-icon-color:   var(--wu-color-text-secondary);
    --wu-search-radius:       var(--wu-radius-md);
    --wu-search-height:       40px;
    --wu-search-font-size:    var(--wu-text-sm);
    --wu-search-padding-x:    var(--wu-space-4);

    /* ── File-type icon colours ────────────────────────────────── */
    --wu-search-icon-doc:    #3b82f6;
    --wu-search-icon-sheet:  #22c55e;
    --wu-search-icon-pdf:    #ef4444;
    --wu-search-icon-image:  #a855f7;
    --wu-search-icon-video:  #f59e0b;
    --wu-search-icon-user:   #0ea5e9;
    --wu-search-icon-action: #f97316;
  }

  /* ── Input row ──────────────────────────────────────────────── */
  .wrapper {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--wu-search-height);
    background: var(--wu-search-bg);
    border: 1px solid var(--wu-search-border);
    border-radius: var(--wu-search-radius);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default),
                box-shadow  var(--wu-duration-fast) var(--wu-ease-default);
    z-index: 1;
  }

  .wrapper--open {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border-bottom-color: transparent;
  }

  .wrapper:focus-within {
    border-color: var(--wu-search-border-focus);
    box-shadow: var(--wu-focus-ring);
    outline: none;
  }

  .wrapper--open:focus-within {
    box-shadow: none;
    border-color: var(--wu-search-border-focus);
  }

  .icon-search {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    padding-left: var(--wu-search-padding-x);
    color: var(--wu-search-icon-color);
    pointer-events: none;
  }

  input {
    flex: 1;
    height: 100%;
    padding: 0 var(--wu-space-2);
    background: transparent;
    border: none;
    outline: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-search-font-size);
    color: var(--wu-search-color);
    min-width: 0;
  }

  input::placeholder { color: var(--wu-search-placeholder); }

  .actions {
    display: flex;
    align-items: center;
    padding-right: var(--wu-space-2);
    gap: var(--wu-space-1);
  }

  button.clear {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-search-icon-color);
    padding: 0;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  button.clear:hover {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text);
  }

  button.clear:focus-visible {
    outline: 2px solid var(--wu-color-border-focus);
    outline-offset: 1px;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border: 2px solid var(--wu-search-icon-color);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── Suggestion panel ───────────────────────────────────────── */
  .panel {
    position: absolute;
    top: calc(var(--wu-search-height) - 1px);
    left: 0;
    right: 0;
    background: var(--wu-color-surface-overlay, var(--wu-color-surface));
    border: 1px solid var(--wu-search-border-focus);
    border-top: none;
    border-radius: 0 0 var(--wu-search-radius) var(--wu-search-radius);
    box-shadow: var(--wu-shadow-lg);
    overflow-y: auto;
    max-height: 360px;
    z-index: 9999;
  }

  /* ── Category header ───────────────────────────────────────── */
  .category-header {
    padding: 6px 12px 4px;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  /* ── Suggestion item ───────────────────────────────────────── */
  .item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 7px 10px;
    cursor: pointer;
    border-radius: 0;
    transition: background var(--wu-duration-fast);
    outline: none;
    user-select: none;
    -webkit-user-select: none;
  }

  .item:last-child {
    border-radius: 0 0 var(--wu-search-radius) var(--wu-search-radius);
  }

  .item:hover, .item--active {
    background: var(--wu-color-primary-subtle, var(--wu-color-surface));
  }

  .item--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* ── Icon wrapper ──────────────────────────────────────────── */
  .si-wrap {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: var(--wu-radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--wu-color-surface-raised);
  }

  .si-wrap--document { background: color-mix(in srgb, var(--wu-search-icon-doc) 12%, transparent); }
  .si-wrap--spreadsheet { background: color-mix(in srgb, var(--wu-search-icon-sheet) 12%, transparent); }
  .si-wrap--pdf { background: color-mix(in srgb, var(--wu-search-icon-pdf) 12%, transparent); }
  .si-wrap--image { background: color-mix(in srgb, var(--wu-search-icon-image) 12%, transparent); }
  .si-wrap--video { background: color-mix(in srgb, var(--wu-search-icon-video) 12%, transparent); }
  .si-wrap--user { background: color-mix(in srgb, var(--wu-search-icon-user) 12%, transparent); }
  .si-wrap--action { background: color-mix(in srgb, var(--wu-search-icon-action) 12%, transparent); }

  .si-wrap svg { width: 16px; height: 16px; }

  /* ── Image thumbnail ───────────────────────────────────────── */
  .si-img {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    border-radius: var(--wu-radius-sm);
    overflow: hidden;
    background: var(--wu-color-surface-raised);
  }

  .si-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ── Item text ─────────────────────────────────────────────── */
  .item-content {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  .item-label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.4;
  }

  mark.hl {
    background: transparent;
    color: var(--wu-color-primary);
    font-weight: var(--wu-font-semibold);
  }

  .item-desc {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3;
  }

  /* ── Trailing meta ─────────────────────────────────────────── */
  .item-meta {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 3px;
  }

  .item-badge {
    display: inline-flex;
    align-items: center;
    padding: 1px 6px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-family: var(--wu-font-sans);
    font-size: 10px;
    font-weight: var(--wu-font-semibold);
    white-space: nowrap;
  }

  .item-time {
    font-family: var(--wu-font-sans);
    font-size: 10px;
    color: var(--wu-color-text-disabled);
    white-space: nowrap;
  }

  /* ── Remove recent button ──────────────────────────────────── */
  .remove-recent {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    color: var(--wu-color-text-disabled);
    padding: 0;
    opacity: 0;
    transition: opacity var(--wu-duration-fast), background var(--wu-duration-fast);
  }

  .item:hover .remove-recent { opacity: 1; }
  .remove-recent:hover { background: var(--wu-color-surface-raised); color: var(--wu-color-text); }

  /* ── Empty state ───────────────────────────────────────────── */
  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 24px 16px;
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    text-align: center;
  }

  .empty-state p { margin: 0; }
  .empty-state strong { color: var(--wu-color-text); }

  /* ── Panel footer ──────────────────────────────────────────── */
  .panel-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 6px 12px;
    border-top: 1px solid var(--wu-color-border);
  }

  .footer-hint {
    font-family: var(--wu-font-sans);
    font-size: 10px;
    color: var(--wu-color-text-disabled);
    display: flex;
    align-items: center;
    gap: 2px;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 18px;
    height: 16px;
    padding: 0 3px;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: 3px;
    font-family: var(--wu-font-mono);
    font-size: 9px;
    color: var(--wu-color-text-secondary);
  }
`;
