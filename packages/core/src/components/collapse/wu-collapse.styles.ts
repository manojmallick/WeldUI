import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .trigger {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--wu-space-2);
    width: 100%;
    padding: var(--wu-space-3) var(--wu-space-4);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    background: none;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    text-align: left;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  .trigger:hover {
    background: var(--wu-color-surface);
  }

  .trigger:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  :host([open]) .trigger {
    border-color: var(--wu-color-border-strong);
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .chevron {
    flex-shrink: 0;
    width: 16px;
    height: 16px;
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
    color: var(--wu-color-text-secondary);
  }

  :host([open]) .chevron {
    transform: rotate(180deg);
  }

  .content {
    overflow: hidden;
    border: 1px solid var(--wu-color-border-strong);
    border-top: none;
    border-bottom-left-radius: var(--wu-radius-md);
    border-bottom-right-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-relaxed);
  }

  :host(:not([open])) .content {
    display: none;
  }
`;
