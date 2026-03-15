import { css } from 'lit';

export const styles = css`
  :host { display: inline; }

  a {
    display: inline-flex;
    align-items: center;
    gap: 2px;
    font-family: inherit;
    font-size: inherit;
    color: var(--wu-color-primary);
    text-decoration: none;
    border-radius: var(--wu-radius-sm);
    transition: color var(--wu-duration-fast) var(--wu-ease-default),
                text-decoration-color var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  a:hover {
    color: var(--wu-color-primary-hover);
  }

  a:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  :host([underline='always']) a,
  :host([underline='hover']) a:hover {
    text-decoration: underline;
  }

  :host([underline='never']) a {
    text-decoration: none !important;
  }

  :host([variant='subtle']) a {
    color: var(--wu-color-text-secondary);
  }

  :host([variant='subtle']) a:hover {
    color: var(--wu-color-text);
  }

  :host([variant='danger']) a {
    color: var(--wu-color-danger);
  }

  .external-icon {
    flex-shrink: 0;
    opacity: 0.7;
  }
`;
