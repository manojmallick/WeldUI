import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    --wu-badge-bg:          var(--wu-color-surface);
    --wu-badge-color:       var(--wu-color-text);
    --wu-badge-border:      var(--wu-color-border);
    --wu-badge-font-size:   var(--wu-text-xs);
    --wu-badge-font-weight: var(--wu-font-semibold);
    --wu-badge-radius:      var(--wu-radius-full);
    --wu-badge-padding-x:   var(--wu-space-2);
    --wu-badge-padding-y:   2px;
  }

  :host([variant='primary']) {
    --wu-badge-bg:     var(--wu-color-primary);
    --wu-badge-color:  var(--wu-color-primary-fg);
    --wu-badge-border: transparent;
  }

  :host([variant='success']) {
    --wu-badge-bg:     var(--wu-color-success-subtle);
    --wu-badge-color:  var(--wu-color-success);
    --wu-badge-border: transparent;
  }

  :host([variant='warning']) {
    --wu-badge-bg:     var(--wu-color-warning-subtle);
    --wu-badge-color:  var(--wu-color-warning);
    --wu-badge-border: transparent;
  }

  :host([variant='danger']) {
    --wu-badge-bg:     var(--wu-color-danger-subtle);
    --wu-badge-color:  var(--wu-color-danger);
    --wu-badge-border: transparent;
  }

  :host([variant='outline']) {
    --wu-badge-bg:     transparent;
    --wu-badge-color:  var(--wu-color-text);
    --wu-badge-border: var(--wu-color-border-strong);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    background: var(--wu-badge-bg);
    color: var(--wu-badge-color);
    border: 1px solid var(--wu-badge-border);
    border-radius: var(--wu-badge-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-badge-font-size);
    font-weight: var(--wu-badge-font-weight);
    line-height: 1;
    padding: var(--wu-badge-padding-y) var(--wu-badge-padding-x);
    white-space: nowrap;
  }
`;
