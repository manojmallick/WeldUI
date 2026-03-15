import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .builder { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .empty {
    margin: 0;
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
  }

  .rules { display: flex; flex-direction: column; gap: var(--wu-space-2); }

  .rule {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .conjunction {
    flex-shrink: 0;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    min-width: 28px;
    text-align: center;
  }

  .select, .value-input {
    padding: var(--wu-space-1) var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .select:focus, .value-input:focus { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }

  .value-input { flex: 1; min-width: 120px; }

  .remove-btn {
    flex-shrink: 0;
    width: 28px; height: 28px;
    display: inline-flex; align-items: center; justify-content: center;
    background: transparent;
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-sm);
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    font-size: var(--wu-text-sm);
    outline: none;
  }
  .remove-btn:hover { background: var(--wu-color-danger-subtle); border-color: var(--wu-color-danger); color: var(--wu-color-danger); }
  .remove-btn:focus-visible { box-shadow: var(--wu-focus-ring); }

  .add-btn {
    align-self: flex-start;
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-primary-subtle);
    border: 1px dashed var(--wu-color-primary);
    border-radius: var(--wu-radius-md);
    color: var(--wu-color-primary);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    cursor: pointer;
    outline: none;
  }
  .add-btn:hover { background: var(--wu-color-primary); color: var(--wu-color-primary-fg); border-style: solid; }
  .add-btn:focus-visible { box-shadow: var(--wu-focus-ring); }
`;
