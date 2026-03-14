import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
  }

  /* ── Error summary ──────────────────────── */
  .error-summary {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-color-danger-subtle, var(--wu-color-red-50));
    border: 1px solid var(--wu-color-danger);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-danger);
  }

  .error-summary-title {
    font-weight: var(--wu-font-semibold);
  }

  .error-summary ul {
    margin: 0;
    padding-left: var(--wu-space-5);
  }

  .error-summary li {
    line-height: var(--wu-leading-normal);
  }

  /* ── Fields area ────────────────────────── */
  .fields {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-4);
  }

  /* ── Actions row ────────────────────────── */
  .actions {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding-top: var(--wu-space-2);
  }
`;
