import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .changelog { display: flex; flex-direction: column; gap: var(--wu-space-6); }

  .empty { margin: 0; font-size: var(--wu-text-sm); color: var(--wu-color-text-secondary); }

  .entry { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .version-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    border-bottom: 1px solid var(--wu-color-border);
    padding-bottom: var(--wu-space-2);
  }

  .version {
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .date {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .changes { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--wu-space-2); }

  .change { display: flex; align-items: flex-start; gap: var(--wu-space-2); }

  .badge {
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    padding: 2px 6px;
    border-radius: var(--wu-radius-sm);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .type-added   { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  .type-fixed   { background: var(--wu-color-info-subtle);    color: var(--wu-color-info); }
  .type-changed { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }
  .type-removed { background: var(--wu-color-danger-subtle);  color: var(--wu-color-danger); }

  .change-text {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }
`;
