import { css } from 'lit';

export const styles = css`
  :host { display: inline-flex; }

  .badge {
    display: inline-flex;
    align-items: center;
    padding: 2px 8px;
    border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
  }

  :host([variant="alpha"])        .badge { background: var(--wu-color-danger-subtle);  color: var(--wu-color-danger); }
  :host([variant="beta"])         .badge { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  :host([variant="new"])          .badge { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  :host([variant="experimental"]) .badge { background: var(--wu-color-info-subtle);    color: var(--wu-color-info); }
  :host([variant="deprecated"])   .badge { background: var(--wu-color-surface);        color: var(--wu-color-text-secondary); border: 1px solid var(--wu-color-border); }
  :host([variant="stable"])       .badge { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
`;
