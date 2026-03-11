import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-fu-border: var(--wu-color-border);
    --wu-fu-border-active: var(--wu-color-primary);
    --wu-fu-bg: var(--wu-color-surface);
    --wu-fu-radius: var(--wu-radius-lg);
  }

  .drop-zone {
    border: 2px dashed var(--wu-fu-border);
    border-radius: var(--wu-fu-radius);
    background: var(--wu-fu-bg);
    padding: var(--wu-space-8) var(--wu-space-6);
    text-align: center;
    cursor: pointer;
    transition: border-color var(--wu-duration-fast), background var(--wu-duration-fast);
    outline: none;
  }

  .drop-zone.drag-over {
    border-color: var(--wu-fu-border-active);
    background: var(--wu-color-primary-subtle);
  }

  .drop-zone:focus-visible {
    box-shadow: var(--wu-focus-ring);
    border-color: var(--wu-fu-border-active);
  }

  .drop-icon {
    color: var(--wu-color-text-secondary);
    margin-bottom: var(--wu-space-3);
  }

  .drop-text {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    margin: 0 0 var(--wu-space-2);
  }

  .drop-text strong {
    color: var(--wu-color-primary);
    cursor: pointer;
  }

  .hint {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-disabled);
    margin: 0;
  }

  input[type='file'] {
    display: none;
  }

  .file-list {
    margin-top: var(--wu-space-3);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-2);
  }

  .file-item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface-raised, var(--wu-color-white));
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
  }

  .file-icon {
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .file-name {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--wu-color-text);
  }

  .file-size {
    color: var(--wu-color-text-secondary);
    font-size: var(--wu-text-xs);
    flex-shrink: 0;
  }

  .remove-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: var(--wu-radius-sm);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
    transition: background var(--wu-duration-fast);
  }

  .remove-btn:hover {
    background: var(--wu-color-danger-subtle);
    color: var(--wu-color-danger);
  }

  :host([disabled]) .drop-zone {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;
