import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-cal-bg: var(--wu-color-surface);
    --wu-cal-border: var(--wu-color-border);
    --wu-cal-radius: var(--wu-radius-lg);
    --wu-cal-today-bg: var(--wu-color-primary-subtle);
    --wu-cal-today-border: var(--wu-color-primary);
    --wu-cal-event-bg: var(--wu-color-primary);
    --wu-cal-event-color: var(--wu-color-primary-fg);
  }

  .calendar {
    background: var(--wu-cal-bg);
    border: 1px solid var(--wu-cal-border);
    border-radius: var(--wu-cal-radius);
    overflow: hidden;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-cal-border);
  }

  .month-label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .nav-btn {
    background: none;
    border: 1px solid var(--wu-cal-border);
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    padding: var(--wu-space-1) var(--wu-space-2);
    color: var(--wu-color-text-secondary);
    line-height: 1;
    font-size: var(--wu-text-sm);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .nav-btn:hover { background: var(--wu-color-surface-raised); }
  .nav-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
  }

  .dow {
    text-align: center;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-2) 0;
    border-bottom: 1px solid var(--wu-cal-border);
  }

  .day {
    min-height: 72px;
    padding: var(--wu-space-1);
    border-right: 1px solid var(--wu-cal-border);
    border-bottom: 1px solid var(--wu-cal-border);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .day:hover { background: var(--wu-color-surface-raised); }
  .day:focus-visible { outline: none; box-shadow: var(--wu-focus-ring) inset; }

  .day:nth-child(7n) { border-right: none; }

  .day.other-month .day-num {
    color: var(--wu-color-text-disabled);
  }

  .day.today {
    background: var(--wu-cal-today-bg);
  }

  .day-num {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-1);
  }

  .day.today .day-num {
    color: var(--wu-cal-today-border);
    font-weight: var(--wu-font-bold);
  }

  .event-chip {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: 10px;
    padding: 1px 4px;
    border-radius: var(--wu-radius-sm);
    background: var(--wu-cal-event-bg);
    color: var(--wu-cal-event-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    margin-bottom: 2px;
  }
`;
