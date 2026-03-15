import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .sticky {
    position: sticky;
    top: var(--wu-sticky-top, 0);
    bottom: var(--wu-sticky-bottom, auto);
    z-index: var(--wu-sticky-z, 10);
  }
`;
