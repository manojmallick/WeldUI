import { css } from 'lit';

export const styles = css`
  :host { display: inline-block; font-family: var(--wu-font-sans); }

  .picker {
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    height: 36px;
  }

  .btn {
    width: 36px;
    height: 100%;
    background: var(--wu-color-surface);
    border: none;
    color: var(--wu-color-text);
    font-size: var(--wu-text-lg);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
    padding: 0;
    line-height: 1;
  }

  .btn:hover:not(:disabled) { background: var(--wu-color-surface-raised); }
  .btn:disabled { opacity: 0.4; cursor: not-allowed; }
  .btn:focus-visible { outline: none; box-shadow: inset var(--wu-focus-ring); }

  .value {
    width: 44px;
    height: 100%;
    border: none;
    border-left: 1px solid var(--wu-color-border);
    border-right: 1px solid var(--wu-color-border);
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    -moz-appearance: textfield;
  }

  .value::-webkit-inner-spin-button,
  .value::-webkit-outer-spin-button { -webkit-appearance: none; }

  .value:focus { outline: none; }
`;
