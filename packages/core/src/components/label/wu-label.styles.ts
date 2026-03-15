import { css } from 'lit';

export const styles = css`
  :host { display: inline-block; }

  label {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([disabled]) label {
    color: var(--wu-color-text-disabled);
    cursor: not-allowed;
  }

  .required {
    color: var(--wu-color-danger);
    font-weight: var(--wu-font-bold);
    line-height: 1;
  }
`;
