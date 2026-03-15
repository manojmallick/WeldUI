import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .header {
    display: flex;
    align-items: center;
    gap: var(--wu-space-4);
    padding: 0 var(--wu-space-6);
    height: 56px;
    background: var(--wu-color-surface-raised);
    border-bottom: 1px solid var(--wu-color-border);
    font-family: var(--wu-font-sans);
  }

  .logo { flex-shrink: 0; }

  .wordmark {
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
  }

  .nav { flex: 1; display: flex; align-items: center; gap: var(--wu-space-1); }

  .actions { flex-shrink: 0; display: flex; align-items: center; gap: var(--wu-space-2); }
`;
