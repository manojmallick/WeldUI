import { css } from 'lit';

export const styles = css`
  :host { display: inline-block; font-family: var(--wu-font-sans); }

  .cart-btn {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    background: transparent;
    border: none;
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    color: var(--wu-color-text);
    transition: background var(--wu-duration-fast);
    padding: 0;
  }

  .cart-btn:hover { background: var(--wu-color-surface); }
  .cart-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .badge {
    position: absolute;
    top: 4px;
    right: 4px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    background: var(--wu-color-danger);
    color: white;
    border-radius: var(--wu-radius-full);
    font-size: 10px;
    font-weight: var(--wu-font-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
  }
`;
