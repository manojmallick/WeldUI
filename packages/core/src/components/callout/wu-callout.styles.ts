import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-callout-bg:     var(--wu-color-info-subtle);
    --wu-callout-border: var(--wu-color-info);
    --wu-callout-color:  var(--wu-color-info);
  }

  :host([variant='success']) {
    --wu-callout-bg:     var(--wu-color-success-subtle);
    --wu-callout-border: var(--wu-color-success);
    --wu-callout-color:  var(--wu-color-success);
  }

  :host([variant='warning']) {
    --wu-callout-bg:     var(--wu-color-warning-subtle);
    --wu-callout-border: var(--wu-color-warning);
    --wu-callout-color:  var(--wu-color-warning);
  }

  :host([variant='danger']) {
    --wu-callout-bg:     var(--wu-color-danger-subtle);
    --wu-callout-border: var(--wu-color-danger);
    --wu-callout-color:  var(--wu-color-danger);
  }

  .callout {
    display: flex;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4);
    background: var(--wu-callout-bg);
    border-left: 4px solid var(--wu-callout-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    color: var(--wu-color-text);
  }

  .icon {
    flex-shrink: 0;
    color: var(--wu-callout-color);
    margin-top: 1px;
  }

  .title {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-callout-color);
    margin-bottom: var(--wu-space-1);
  }
`;
