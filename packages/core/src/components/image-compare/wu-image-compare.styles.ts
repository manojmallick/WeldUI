import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-image-compare-bg: var(--wu-color-surface);
    --wu-image-compare-border: var(--wu-color-border);
    --wu-image-compare-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-image-compare-bg);
    border: 1px solid var(--wu-image-compare-border);
    border-radius: var(--wu-image-compare-radius);
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
