import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
  }

  kbd {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 2px var(--wu-space-2);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    line-height: 1;
    color: var(--wu-color-text-secondary);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border-strong);
    border-radius: var(--wu-radius-sm);
    box-shadow: 0 1px 0 var(--wu-color-border-strong);
    white-space: nowrap;
  }
`;
