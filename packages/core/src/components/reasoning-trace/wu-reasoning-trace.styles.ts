import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    background: var(--wu-color-surface);
    font-size: var(--wu-text-sm);
  }

  .header {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface-raised);
    border-bottom: 1px solid var(--wu-color-border);
    cursor: pointer;
    user-select: none;
  }

  .header:hover { background: var(--wu-color-surface); }

  .icon {
    font-size: 14px;
    transition: transform var(--wu-duration-fast) var(--wu-ease-default);
  }

  :host([open]) .icon { transform: rotate(90deg); }

  .title {
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .steps {
    padding: var(--wu-space-3);
    display: none;
  }

  :host([open]) .steps { display: block; }

  .step {
    display: flex;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) 0;
    color: var(--wu-color-text);
    border-bottom: 1px solid var(--wu-color-border);
    line-height: var(--wu-leading-normal);
  }

  .step:last-child { border-bottom: none; }

  .step-num {
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    min-width: 20px;
    flex-shrink: 0;
    padding-top: 2px;
  }
`;
