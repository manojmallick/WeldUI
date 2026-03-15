import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .otp {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--wu-space-4);
  }

  .heading {
    margin: 0;
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    text-align: center;
  }

  .hint {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-align: center;
  }

  .digits {
    display: flex;
    gap: var(--wu-space-2);
  }

  .digit {
    width: 44px;
    height: 52px;
    text-align: center;
    font-size: var(--wu-text-xl);
    font-family: var(--wu-font-mono);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
    background: var(--wu-color-background);
    border: 2px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    outline: none;
    transition: border-color var(--wu-duration-normal);
  }

  .digit:focus {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }
`;
