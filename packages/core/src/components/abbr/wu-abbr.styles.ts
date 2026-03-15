import { css } from 'lit';

export const styles = css`
  :host { display: inline; }

  abbr {
    font-style: inherit;
    text-decoration: underline dotted var(--wu-color-text-secondary);
    text-underline-offset: 2px;
    cursor: help;
  }
`;
