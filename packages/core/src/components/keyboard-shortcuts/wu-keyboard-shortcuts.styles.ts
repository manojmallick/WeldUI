import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .wrapper { display: flex; flex-direction: column; gap: var(--wu-space-5); }

  .heading {
    margin: 0;
    font-size: var(--wu-text-xl);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .group { display: flex; flex-direction: column; gap: var(--wu-space-2); }

  .group-heading {
    margin: 0;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wu-color-text-secondary);
    padding-bottom: var(--wu-space-1);
    border-bottom: 1px solid var(--wu-color-border);
  }

  .list { margin: 0; padding: 0; display: flex; flex-direction: column; }

  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-2) 0;
    border-bottom: 1px solid var(--wu-color-border);
  }

  .row:last-child { border-bottom: none; }

  .desc {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }

  .keys {
    display: flex;
    align-items: center;
    gap: 4px;
    margin: 0;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    padding: 2px 7px;
    border: 1px solid var(--wu-color-border-strong);
    border-bottom-width: 2px;
    border-radius: var(--wu-radius-sm);
    background: var(--wu-color-surface);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text);
    box-shadow: var(--wu-shadow-sm);
  }
`;
