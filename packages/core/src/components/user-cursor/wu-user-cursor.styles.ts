import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    position: absolute;
    pointer-events: none;
    z-index: 999;
  }

  .cursor {
    position: absolute;
    transform: translate(-2px, -2px);
  }

  .pointer {
    width: 16px;
    height: 16px;
  }

  .label {
    display: inline-block;
    background: var(--wu-cursor-color, var(--wu-color-primary));
    color: white;
    font-size: 10px;
    padding: 1px 5px;
    border-radius: var(--wu-radius-sm);
    white-space: nowrap;
    margin-top: 2px;
    font-weight: var(--wu-font-medium);
    font-family: var(--wu-font-sans);
  }
`;
