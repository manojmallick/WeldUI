import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-schema-viewer-bg: var(--wu-color-surface);
    --wu-schema-viewer-border: var(--wu-color-border);
    --wu-schema-viewer-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-schema-viewer-bg);
    border: 1px solid var(--wu-schema-viewer-border);
    border-radius: var(--wu-schema-viewer-radius);
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
