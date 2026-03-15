import { css } from 'lit';
export const timelineStyles = css`
  :host { display: block; }
  .timeline { display: flex; flex-direction: column; }
  :host([orientation="horizontal"]) .timeline { flex-direction: row; }
`;
export const timelineItemStyles = css`
  :host { display: flex; gap: var(--wu-space-3); }
  .connector { display: flex; flex-direction: column; align-items: center; }
  .dot { width: 12px; height: 12px; border-radius: 50%; background: var(--wu-color-primary); flex-shrink: 0; margin-top: 4px; }
  :host([status="success"]) .dot { background: var(--wu-color-success); }
  :host([status="warning"]) .dot { background: var(--wu-color-warning); }
  :host([status="danger"]) .dot { background: var(--wu-color-danger); }
  :host([status="pending"]) .dot { background: var(--wu-color-border); }
  .line { width: 2px; flex: 1; background: var(--wu-color-border); margin-top: 4px; min-height: 24px; }
  :host(:last-child) .line { display: none; }
  .body { padding-bottom: var(--wu-space-4); }
  .title { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .meta { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: 2px; }
  .content { margin-top: var(--wu-space-1); font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text-secondary); }
`;
