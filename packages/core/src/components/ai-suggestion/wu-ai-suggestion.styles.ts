import { css } from 'lit';

export const styles = css`
  :host {
    display: inline;
    position: relative;
  }

  .suggestion {
    display: inline;
    color: var(--wu-color-text-disabled);
    font-style: italic;
    pointer-events: none;
    user-select: none;
  }

  .accept-hint {
    display: inline-block;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    padding: 1px 4px;
    margin-left: var(--wu-space-1);
    vertical-align: middle;
  }
`;
