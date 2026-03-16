import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    --wu-keyboard-focus-bg: var(--wu-color-surface);
    --wu-keyboard-focus-border: var(--wu-color-border);
    --wu-keyboard-focus-radius: var(--wu-radius-md);
  }
  .container {
    background: var(--wu-keyboard-focus-bg);
    border: 1px solid var(--wu-keyboard-focus-border);
    border-radius: var(--wu-keyboard-focus-radius);
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
