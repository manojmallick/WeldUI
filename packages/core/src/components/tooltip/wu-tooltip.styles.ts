import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    position: relative;

    --wu-tooltip-bg:      var(--wu-color-gray-900);
    --wu-tooltip-color:   var(--wu-color-white);
    --wu-tooltip-radius:  var(--wu-radius-sm);
    --wu-tooltip-font:    var(--wu-text-xs);
    --wu-tooltip-padding: var(--wu-space-1) var(--wu-space-2);
    --wu-tooltip-max-width: 240px;
    --wu-tooltip-delay:   var(--wu-duration-slow);
  }

  .trigger {
    display: inline-flex;
    align-items: center;
  }

  .tooltip {
    position: absolute;
    z-index: 1000;
    pointer-events: none;
    background: var(--wu-tooltip-bg);
    color: var(--wu-tooltip-color);
    border-radius: var(--wu-tooltip-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-tooltip-font);
    padding: var(--wu-tooltip-padding);
    white-space: nowrap;
    max-width: var(--wu-tooltip-max-width);
    white-space: normal;
    line-height: var(--wu-leading-tight);
    box-shadow: var(--wu-shadow-md);
    opacity: 0;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default);
  }

  .tooltip.visible {
    opacity: 1;
  }

  /* Placement */
  :host([placement="top"]) .tooltip,
  :host(:not([placement])) .tooltip {
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }

  :host([placement="bottom"]) .tooltip {
    top: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
  }

  :host([placement="left"]) .tooltip {
    right: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }

  :host([placement="right"]) .tooltip {
    left: calc(100% + 6px);
    top: 50%;
    transform: translateY(-50%);
  }
`;
