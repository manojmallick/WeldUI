import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .feed { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .heading {
    margin: 0 0 var(--wu-space-2);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--wu-color-text-secondary);
  }

  .empty {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .list { list-style: none; margin: 0; padding: 0; }

  .item {
    display: flex;
    gap: var(--wu-space-3);
    position: relative;
  }

  .avatar-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }

  .avatar {
    width: 32px; height: 32px;
    border-radius: 50%;
    object-fit: cover;
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .initials {
    width: 32px; height: 32px;
    border-radius: 50%;
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .connector {
    flex: 1;
    width: 2px;
    background: var(--wu-color-border);
    margin-top: 2px;
    min-height: 16px;
  }

  .item:last-child .connector { display: none; }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding-bottom: var(--wu-space-4);
    min-width: 0;
  }

  .item:last-child .content { padding-bottom: 0; }

  .text {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }

  .text strong { font-weight: var(--wu-font-semibold); }
  .text em { font-style: normal; color: var(--wu-color-primary); }

  .time {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;
