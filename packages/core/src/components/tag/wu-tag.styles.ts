import { css } from 'lit';
export const styles = css`
  :host { display: inline-flex; }
  .tag {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 2px var(--wu-space-2); border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); font-weight: var(--wu-font-medium);
    border: 1px solid transparent; line-height: 1.5;
    background: var(--wu-color-surface); color: var(--wu-color-text); border-color: var(--wu-color-border);
  }
  :host([variant="primary"]) .tag { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); border-color: var(--wu-color-primary); }
  :host([variant="success"]) .tag { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  :host([variant="warning"]) .tag { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  :host([variant="danger"]) .tag { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  .dismiss { background: none; border: none; cursor: pointer; padding: 0; color: inherit; opacity: 0.7; font-size: 14px; line-height: 1; }
  .dismiss:hover { opacity: 1; }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;
