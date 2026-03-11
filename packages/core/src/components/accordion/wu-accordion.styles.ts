import { css } from 'lit';

export const accordionStyles = css`
  :host {
    display: block;

    --wu-accordion-border: var(--wu-color-border);
    --wu-accordion-radius: var(--wu-radius-lg);
  }

  .accordion {
    border: 1px solid var(--wu-accordion-border);
    border-radius: var(--wu-accordion-radius);
    overflow: hidden;
  }

  ::slotted(wu-accordion-item:not(:last-child)) {
    border-bottom: 1px solid var(--wu-accordion-border);
  }
`;

export const itemStyles = css`
  :host {
    display: block;

    --wu-accordion-header-bg:       transparent;
    --wu-accordion-header-bg-hover: var(--wu-color-surface);
    --wu-accordion-header-color:    var(--wu-color-text);
    --wu-accordion-padding-x:       var(--wu-space-5);
    --wu-accordion-padding-y:       var(--wu-space-4);
    --wu-accordion-font-weight:     var(--wu-font-medium);
    --wu-accordion-content-color:   var(--wu-color-text-secondary);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: var(--wu-accordion-padding-y) var(--wu-accordion-padding-x);
    background: var(--wu-accordion-header-bg);
    border: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-accordion-font-weight);
    color: var(--wu-accordion-header-color);
    cursor: pointer;
    text-align: left;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    gap: var(--wu-space-4);
  }

  .header:hover { background: var(--wu-accordion-header-bg-hover); }

  .header:focus-visible {
    outline: none;
    box-shadow: inset var(--wu-focus-ring);
  }

  .chevron {
    display: inline-flex;
    flex-shrink: 0;
    transition: transform var(--wu-duration-fast) var(--wu-ease-default);
    color: var(--wu-color-text-secondary);
  }

  :host([open]) .chevron {
    transform: rotate(180deg);
  }

  .body {
    overflow: hidden;
    max-height: 0;
    transition: max-height var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([open]) .body {
    max-height: 1000px;
  }

  .content {
    padding: 0 var(--wu-accordion-padding-x) var(--wu-accordion-padding-y);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-accordion-content-color);
    line-height: var(--wu-leading-normal);
  }
`;
