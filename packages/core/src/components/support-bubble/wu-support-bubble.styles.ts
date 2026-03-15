import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    position: fixed;
    bottom: var(--wu-space-6);
    right: var(--wu-space-6);
    z-index: 100;
  }

  :host([position='bottom-left']) {
    right: auto;
    left: var(--wu-space-6);
  }

  .bubble {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    box-shadow: var(--wu-shadow-lg);
    transition: background var(--wu-duration-normal) var(--wu-ease-default),
      box-shadow var(--wu-duration-normal) var(--wu-ease-default);
    white-space: nowrap;
  }

  .bubble:hover {
    background: var(--wu-color-primary-hover);
    box-shadow: var(--wu-shadow-xl);
  }

  .bubble:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .label {
    font-size: var(--wu-text-sm);
  }
`;
