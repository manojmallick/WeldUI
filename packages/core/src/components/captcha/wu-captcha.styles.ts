import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .captcha-widget {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4) var(--wu-space-5);
    max-width: 300px;
  }

  .check-label {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
  }

  .checkbox {
    width: 20px;
    height: 20px;
    accent-color: var(--wu-color-primary);
    cursor: pointer;
  }

  .brand {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
  }

  .brand-name {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text-secondary);
  }

  .brand-sub {
    font-size: 10px;
    color: var(--wu-color-text-disabled);
  }
`;
