import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    font-size: var(--wu-text-sm);
    background: var(--wu-color-surface);
  }

  .header {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-primary-subtle);
    border-bottom: 1px solid var(--wu-color-border);
  }

  .tool-name {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-primary);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
  }

  .status-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: var(--wu-text-xs);
    padding: 2px 6px;
    border-radius: var(--wu-radius-full);
    font-weight: var(--wu-font-medium);
    margin-left: auto;
  }

  .status-badge.running { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  .status-badge.success { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .status-badge.error { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }

  .body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
  }

  .section {
    padding: var(--wu-space-3);
  }

  .section + .section {
    border-left: 1px solid var(--wu-color-border);
  }

  .section-title {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: var(--wu-space-2);
  }

  pre {
    margin: 0;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    white-space: pre-wrap;
    word-break: break-all;
  }
`;
