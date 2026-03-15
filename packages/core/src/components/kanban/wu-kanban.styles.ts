import { css } from 'lit';

export const boardStyles = css`
  :host { display: flex; gap: var(--wu-space-4); overflow-x: auto; padding: var(--wu-space-2); }
`;

export const columnStyles = css`
  :host {
    display: flex;
    flex-direction: column;
    min-width: 260px;
    max-width: 320px;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-xl);
    overflow: hidden;
    flex-shrink: 0;
  }
  :host(.drag-over) { background: var(--wu-color-primary-subtle); border-color: var(--wu-color-primary); }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
    font-family: var(--wu-font-sans, system-ui);
    font-weight: var(--wu-font-semibold);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }
  .count {
    background: var(--wu-color-border);
    padding: 2px 8px;
    border-radius: var(--wu-radius-full);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
  .cards {
    flex: 1;
    padding: var(--wu-space-3);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
    min-height: 80px;
  }
  .card {
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-3);
    font-family: var(--wu-font-sans, system-ui);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: grab;
    transition: box-shadow var(--wu-duration-fast);
  }
  .card:active { cursor: grabbing; }
  .card.dragging { opacity: 0.4; }
  .card:hover { box-shadow: var(--wu-shadow-md); }
`;
