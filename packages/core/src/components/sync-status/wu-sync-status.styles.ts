import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .icon { font-size: 14px; }

  :host([status="synced"]) { color: var(--wu-color-success); }
  :host([status="syncing"]) { color: var(--wu-color-warning); }
  :host([status="offline"]) { color: var(--wu-color-danger); }
  :host([status="error"]) { color: var(--wu-color-danger); }
`;
