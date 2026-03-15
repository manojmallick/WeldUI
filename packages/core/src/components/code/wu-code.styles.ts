import { css } from 'lit';

export const styles = css`
  :host {
    display: inline;
  }

  code {
    padding: 2px var(--wu-space-1);
    font-family: var(--wu-font-mono);
    font-size: 0.875em;
    color: var(--wu-color-danger);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
  }
`;
