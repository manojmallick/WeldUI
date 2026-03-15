import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-banner-bg:     var(--wu-color-info-subtle);
    --wu-banner-color:  var(--wu-color-text);
    --wu-banner-border: var(--wu-color-info);
  }

  :host([variant='success']) {
    --wu-banner-bg:     var(--wu-color-success-subtle);
    --wu-banner-border: var(--wu-color-success);
  }

  :host([variant='warning']) {
    --wu-banner-bg:     var(--wu-color-warning-subtle);
    --wu-banner-border: var(--wu-color-warning);
  }

  :host([variant='danger']) {
    --wu-banner-bg:     var(--wu-color-danger-subtle);
    --wu-banner-border: var(--wu-color-danger);
  }

  :host([sticky]) {
    position: sticky;
    top: 0;
    z-index: 50;
  }

  .banner {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-banner-bg);
    border-bottom: 1px solid var(--wu-banner-border);
    font-size: var(--wu-text-sm);
    font-family: var(--wu-font-sans);
    color: var(--wu-banner-color);
  }

  .content {
    flex: 1;
  }

  .actions {
    display: contents;
  }

  .close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    opacity: 0.7;
    border-radius: var(--wu-radius-sm);
    flex-shrink: 0;
    padding: 0;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default);
  }

  .close:hover { opacity: 1; }
  .close:focus-visible { box-shadow: var(--wu-focus-ring); outline: none; }
`;
