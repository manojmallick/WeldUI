import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .summary {
    padding: var(--wu-space-4);
    background: var(--wu-color-danger-subtle);
    border: 1px solid var(--wu-color-danger);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
  }

  .title {
    margin: 0 0 var(--wu-space-2);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-danger);
  }

  .list {
    margin: 0;
    padding-left: var(--wu-space-5);
    list-style: disc;
  }

  .item {
    margin-bottom: var(--wu-space-1);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }

  .item:last-child { margin-bottom: 0; }
`;
