import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-block;
    position: relative;
    --wu-dp-border: var(--wu-color-border);
    --wu-dp-bg: var(--wu-color-surface-raised, var(--wu-color-white));
    --wu-dp-radius: var(--wu-radius-lg);
    --wu-dp-shadow: var(--wu-shadow-lg);
    --wu-dp-cell-size: 36px;
  }

  .trigger {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    border: 1px solid var(--wu-dp-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    min-width: 160px;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .trigger:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
    border-color: var(--wu-color-border-focus);
  }

  .trigger .icon {
    margin-left: auto;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .calendar {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    z-index: 100;
    background: var(--wu-dp-bg);
    border: 1px solid var(--wu-dp-border);
    border-radius: var(--wu-dp-radius);
    box-shadow: var(--wu-dp-shadow);
    padding: var(--wu-space-3);
    min-width: 280px;
    display: none;
  }

  :host([open]) .calendar {
    display: block;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--wu-space-3);
  }

  .nav-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border: none;
    background: transparent;
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    transition: background var(--wu-duration-fast);
  }

  .nav-btn:hover {
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
  }

  .month-year {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, var(--wu-dp-cell-size));
    gap: 2px;
  }

  .day-name {
    display: flex;
    align-items: center;
    justify-content: center;
    height: var(--wu-dp-cell-size);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  .day {
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--wu-dp-cell-size);
    height: var(--wu-dp-cell-size);
    border: none;
    border-radius: var(--wu-radius-full);
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    transition: background var(--wu-duration-fast);
  }

  .day:hover:not(:disabled):not(.selected) {
    background: var(--wu-color-surface);
  }

  .day.other-month {
    color: var(--wu-color-text-disabled);
  }

  .day.today:not(.selected) {
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-primary);
  }

  .day.selected {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    font-weight: var(--wu-font-semibold);
  }

  .day:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
`;
