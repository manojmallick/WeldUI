import { css } from 'lit';

export const styles = css`
  :host { display: inline; }

  mark {
    background: color-mix(in srgb, var(--wu-color-warning) 25%, transparent);
    color: inherit;
    border-radius: 2px;
    padding: 0.05em 0.2em;
  }

  :host([variant='success']) mark {
    background: color-mix(in srgb, var(--wu-color-success) 20%, transparent);
  }

  :host([variant='danger']) mark {
    background: color-mix(in srgb, var(--wu-color-danger) 20%, transparent);
  }

  :host([variant='info']) mark {
    background: color-mix(in srgb, var(--wu-color-primary) 20%, transparent);
  }
`;
