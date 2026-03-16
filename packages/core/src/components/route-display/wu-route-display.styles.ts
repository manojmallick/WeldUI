import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-route-display-bg: var(--wu-color-surface);
    --wu-route-display-border: var(--wu-color-border);
    --wu-route-display-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-route-display-bg);
    border: 1px solid var(--wu-route-display-border);
    border-radius: var(--wu-route-display-radius);
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
