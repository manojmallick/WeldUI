import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-address-display-bg: var(--wu-color-surface);
    --wu-address-display-border: var(--wu-color-border);
    --wu-address-display-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-address-display-bg);
    border: 1px solid var(--wu-address-display-border);
    border-radius: var(--wu-address-display-radius);
    padding: var(--wu-space-4);
    font-size: var(--wu-text-sm);
  }
  .label {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }
  .content {
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;
