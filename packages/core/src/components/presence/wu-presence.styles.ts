import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
  }

  .avatars {
    display: flex;
    flex-direction: row-reverse;
  }

  .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid var(--wu-color-background);
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    margin-left: -8px;
    position: relative;
    cursor: default;
    overflow: hidden;
    flex-shrink: 0;
  }

  .avatar:last-child { margin-left: 0; }

  .avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .overflow {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
  }

  .label {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    margin-left: var(--wu-space-2);
  }
`;
