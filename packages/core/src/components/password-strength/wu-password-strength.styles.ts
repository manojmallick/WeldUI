import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .strength {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .bar {
    flex: 1;
    height: 4px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-border);
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  .bar.danger   { background: var(--wu-color-danger); }
  .bar.warning  { background: var(--wu-color-warning); }
  .bar.info     { background: var(--wu-color-info); }
  .bar.success  { background: var(--wu-color-success); }

  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    min-width: 44px;
    text-align: right;
  }

  .label.danger   { color: var(--wu-color-danger); }
  .label.warning  { color: var(--wu-color-warning); }
  .label.info     { color: var(--wu-color-info); }
  .label.success  { color: var(--wu-color-success); }
`;
