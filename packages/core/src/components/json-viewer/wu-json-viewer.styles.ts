import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .viewer {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    line-height: 1.7;
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    overflow: auto;
  }

  .entries { display: flex; flex-direction: column; }

  .entry {
    display: flex;
    align-items: flex-start;
    gap: 4px;
    padding: 1px 0;
  }

  .key   { color: var(--wu-color-primary); }
  .index { color: var(--wu-color-text-secondary); }
  .colon { color: var(--wu-color-text-secondary); }
  .str   { color: var(--wu-color-success); }
  .num   { color: var(--wu-color-warning); }
  .bool  { color: var(--wu-color-info); }
  .null  { color: var(--wu-color-text-disabled); font-style: italic; }
  .bracket { color: var(--wu-color-text-secondary); }
`;
