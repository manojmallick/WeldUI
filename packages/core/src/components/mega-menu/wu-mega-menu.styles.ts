import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    position: relative;
  }
  .trigger-slot { display: inline-block; cursor: pointer; }
  .backdrop {
    position: fixed;
    inset: 0;
    z-index: 99;
  }
  .overlay {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    box-shadow: var(--wu-shadow-xl);
    z-index: 100;
    display: flex;
    gap: var(--wu-space-6);
    padding: var(--wu-space-6);
  }
  .overlay[hidden] { display: none; }
  .column {
    flex: 1;
    min-width: 160px;
  }
  .column-title {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wu-color-text-secondary);
    margin-bottom: var(--wu-space-2);
  }
  ::slotted([slot^="col-"]) {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }
`;
