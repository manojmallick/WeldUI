import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    position: relative;

    --wu-popover-bg:      var(--wu-color-surface-overlay);
    --wu-popover-border:  var(--wu-color-border);
    --wu-popover-radius:  var(--wu-radius-lg);
    --wu-popover-shadow:  var(--wu-shadow-lg);
    --wu-popover-padding: var(--wu-space-4);
    --wu-popover-width:   280px;
  }

  .trigger {
    display: inline-flex;
  }

  .popover {
    position: absolute;
    z-index: 1000;
    background: var(--wu-popover-bg);
    border: 1px solid var(--wu-popover-border);
    border-radius: var(--wu-popover-radius);
    box-shadow: var(--wu-popover-shadow);
    padding: var(--wu-popover-padding);
    width: var(--wu-popover-width);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default),
                transform var(--wu-duration-fast) var(--wu-ease-default);
  }

  .popover.open {
    opacity: 1;
    pointer-events: auto;
  }

  /* Placement */
  :host([placement="bottom"]) .popover,
  :host(:not([placement])) .popover {
    top: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(-4px);
  }

  :host([placement="bottom"]) .popover.open,
  :host(:not([placement])) .popover.open {
    transform: translateX(-50%) translateY(0);
  }

  :host([placement="top"]) .popover {
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
  }

  :host([placement="top"]) .popover.open {
    transform: translateX(-50%) translateY(0);
  }
`;
