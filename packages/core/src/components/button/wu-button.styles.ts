import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;

    /* ── Component Tokens ── */
    --wu-btn-bg:           var(--wu-color-primary);
    --wu-btn-bg-hover:     var(--wu-color-primary-hover);
    --wu-btn-color:        var(--wu-color-primary-fg);
    --wu-btn-border:       transparent;
    --wu-btn-radius:       var(--wu-radius-md);
    --wu-btn-font-size:    var(--wu-text-sm);
    --wu-btn-font-weight:  var(--wu-font-semibold);
    --wu-btn-padding-x:    var(--wu-space-4);
    --wu-btn-padding-y:    var(--wu-space-2);
    --wu-btn-height:       36px;
    --wu-btn-gap:          var(--wu-space-2);
    --wu-btn-transition:   all var(--wu-duration-normal) var(--wu-ease-default);
  }

  /* ── Sizes ── */
  :host([size="sm"]) {
    --wu-btn-height:      28px;
    --wu-btn-font-size:   var(--wu-text-xs);
    --wu-btn-padding-x:   var(--wu-space-3);
  }
  :host([size="lg"]) {
    --wu-btn-height:      44px;
    --wu-btn-font-size:   var(--wu-text-base);
    --wu-btn-padding-x:   var(--wu-space-6);
  }

  /* ── Variants ── */
  :host([variant="secondary"]) {
    --wu-btn-bg:        var(--wu-color-surface);
    --wu-btn-bg-hover:  var(--wu-color-surface-raised);
    --wu-btn-color:     var(--wu-color-text);
    --wu-btn-border:    var(--wu-color-border);
  }

  :host([variant="ghost"]) {
    --wu-btn-bg:        transparent;
    --wu-btn-bg-hover:  var(--wu-color-surface);
    --wu-btn-color:     var(--wu-color-text);
    --wu-btn-border:    transparent;
  }

  :host([variant="danger"]) {
    --wu-btn-bg:        var(--wu-color-danger);
    --wu-btn-bg-hover:  color-mix(in srgb, var(--wu-color-danger) 85%, black);
    --wu-btn-color:     white;
    --wu-btn-border:    transparent;
  }

  :host([variant="success"]) {
    --wu-btn-bg:        var(--wu-color-success);
    --wu-btn-bg-hover:  color-mix(in srgb, var(--wu-color-success) 85%, black);
    --wu-btn-color:     white;
    --wu-btn-border:    transparent;
  }

  /* ── Base button element ── */
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-btn-gap);
    height: var(--wu-btn-height);
    padding: var(--wu-btn-padding-y) var(--wu-btn-padding-x);
    background: var(--wu-btn-bg);
    color: var(--wu-btn-color);
    border: 1px solid var(--wu-btn-border);
    border-radius: var(--wu-btn-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-btn-font-size);
    font-weight: var(--wu-btn-font-weight);
    line-height: 1;
    cursor: pointer;
    transition: var(--wu-btn-transition);
    outline: none;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    box-sizing: border-box;
  }

  button:hover:not(:disabled) {
    background: var(--wu-btn-bg-hover);
  }

  button:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }

  .spinner {
    width: 14px;
    height: 14px;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 0.6s linear infinite;
    flex-shrink: 0;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
