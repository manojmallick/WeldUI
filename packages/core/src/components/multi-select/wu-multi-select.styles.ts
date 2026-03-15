import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-ms-height: 36px;
  }

  :host([disabled]) { opacity: 0.5; pointer-events: none; }

  label {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    margin-bottom: var(--wu-space-1);
  }

  .chips-input {
    min-height: var(--wu-ms-height);
    padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    display: flex;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    align-items: center;
    cursor: text;
    outline: none;
    transition: border-color var(--wu-duration-fast);
  }

  .chips-input:focus-within {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px var(--wu-space-2);
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    border-radius: var(--wu-radius-full);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-medium);
  }

  .chip-remove {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 0;
    font-size: 12px;
    line-height: 1;
    opacity: 0.7;
  }

  .chip-remove:hover { opacity: 1; }

  .search-input {
    flex: 1;
    min-width: 80px;
    border: none;
    outline: none;
    background: transparent;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }

  .dropdown {
    position: absolute;
    left: 0; right: 0;
    top: calc(100% + var(--wu-space-1));
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    box-shadow: var(--wu-shadow-md);
    max-height: 200px;
    overflow-y: auto;
    z-index: 100;
    list-style: none;
    margin: 0;
    padding: var(--wu-space-1) 0;
  }

  .dropdown[hidden] { display: none; }

  .option {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-3);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
  }

  .option:hover { background: var(--wu-color-surface); }

  .option input[type='checkbox'] { accent-color: var(--wu-color-primary); }

  .select-all {
    padding: var(--wu-space-2) var(--wu-space-3);
    border-bottom: 1px solid var(--wu-color-border);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
  }

  .select-all:hover { background: var(--wu-color-surface); }

  .wrapper { position: relative; }

  .error-msg {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-danger);
    margin-top: var(--wu-space-1);
  }
`;
