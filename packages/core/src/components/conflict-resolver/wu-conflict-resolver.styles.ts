import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    font-size: var(--wu-text-sm);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-warning-subtle);
    border-bottom: 1px solid var(--wu-color-border);
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .title {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-warning);
  }

  .diff {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .pane {
    padding: var(--wu-space-4);
  }

  .pane + .pane {
    border-left: 1px solid var(--wu-color-border);
  }

  .pane-title {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--wu-color-text-secondary);
    margin-bottom: var(--wu-space-2);
  }

  .content {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    white-space: pre-wrap;
    word-break: break-all;
    background: var(--wu-color-surface-raised);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-3);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-top: 1px solid var(--wu-color-border);
    justify-content: flex-end;
  }

  button {
    padding: var(--wu-space-2) var(--wu-space-4);
    border-radius: var(--wu-radius-md);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    border: 1px solid var(--wu-color-border);
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  button.primary {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-color: transparent;
  }

  button:hover { opacity: 0.85; }
`;
