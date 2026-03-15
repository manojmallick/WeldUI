import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .providers {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
  }

  .provider-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--wu-space-3);
    width: 100%;
    height: 40px;
    padding: 0 var(--wu-space-4);
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    cursor: pointer;
    transition: background var(--wu-duration-normal) var(--wu-ease-default),
      border-color var(--wu-duration-normal);
  }

  .provider-btn:hover {
    background: var(--wu-color-surface-raised);
    border-color: var(--wu-color-border-strong);
  }

  .provider-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .provider-icon {
    display: flex;
    align-items: center;
    width: 20px;
    flex-shrink: 0;
  }
`;
