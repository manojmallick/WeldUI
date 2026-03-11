import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    font-family: var(--wu-font-sans);

    --wu-pagination-btn-size:    32px;
    --wu-pagination-radius:      var(--wu-radius-md);
    --wu-pagination-color:       var(--wu-color-text-secondary);
    --wu-pagination-color-active:var(--wu-color-primary-fg);
    --wu-pagination-bg-active:   var(--wu-color-primary);
    --wu-pagination-bg-hover:    var(--wu-color-surface);
    --wu-pagination-font-size:   var(--wu-text-sm);
  }

  .pages {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .page-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wu-pagination-btn-size);
    height: var(--wu-pagination-btn-size);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-pagination-radius);
    background: transparent;
    color: var(--wu-pagination-color);
    font-size: var(--wu-pagination-font-size);
    font-family: var(--wu-font-sans);
    cursor: pointer;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
  }

  .page-btn:hover:not(:disabled):not([aria-current]) {
    background: var(--wu-pagination-bg-hover);
    color: var(--wu-color-text);
  }

  .page-btn[aria-current="page"] {
    background: var(--wu-pagination-bg-active);
    color: var(--wu-pagination-color-active);
    border-color: var(--wu-pagination-bg-active);
    font-weight: var(--wu-font-semibold);
  }

  .page-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  .page-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .dots {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--wu-pagination-btn-size);
    color: var(--wu-color-text-disabled);
    font-size: var(--wu-pagination-font-size);
  }

  .nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    padding: 0 var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-pagination-radius);
    background: transparent;
    color: var(--wu-color-text);
    font-size: var(--wu-pagination-font-size);
    font-family: var(--wu-font-sans);
    cursor: pointer;
    gap: var(--wu-space-1);
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    white-space: nowrap;
  }

  .nav-btn:hover:not(:disabled) { background: var(--wu-pagination-bg-hover); }
  .nav-btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .nav-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .info {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
  }
`;
