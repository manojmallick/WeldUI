import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .wrapper {
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    line-height: 1.7;
  }

  .filename {
    padding: var(--wu-space-2) var(--wu-space-4);
    background: var(--wu-color-surface);
    border-bottom: 1px solid var(--wu-color-border);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text-secondary);
    font-family: var(--wu-font-sans);
  }

  .table-wrap { overflow-x: auto; background: var(--wu-color-background); }

  .row {
    display: flex;
    align-items: stretch;
    min-height: 22px;
  }

  .row:hover { filter: brightness(1.03); }

  .type-added   { background: color-mix(in srgb, var(--wu-color-success) 10%, transparent); }
  .type-removed { background: color-mix(in srgb, var(--wu-color-danger)  10%, transparent); }
  .type-unchanged { background: transparent; }

  .gutter {
    flex-shrink: 0;
    width: 40px;
    padding: 0 var(--wu-space-2);
    text-align: right;
    color: var(--wu-color-text-disabled);
    border-right: 1px solid var(--wu-color-border);
    user-select: none;
  }

  .sign {
    flex-shrink: 0;
    width: 20px;
    text-align: center;
    user-select: none;
  }

  .type-added   .sign { color: var(--wu-color-success); font-weight: bold; }
  .type-removed .sign { color: var(--wu-color-danger);  font-weight: bold; }

  .content {
    flex: 1;
    padding: 0 var(--wu-space-3);
    white-space: pre;
    color: var(--wu-color-text);
    overflow: visible;
  }
`;
