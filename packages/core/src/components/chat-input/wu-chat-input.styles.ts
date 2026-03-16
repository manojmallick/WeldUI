import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-chat-input-bg: var(--wu-color-surface);
    --wu-chat-input-border: var(--wu-color-border);
    --wu-chat-input-radius: var(--wu-radius-xl);
    --wu-chat-input-padding: var(--wu-space-3) var(--wu-space-4);
    --wu-chat-input-font-size: var(--wu-text-sm);
  }

  .wrapper {
    display: flex;
    align-items: flex-end;
    gap: var(--wu-space-2);
    background: var(--wu-chat-input-bg);
    border: 1px solid var(--wu-chat-input-border);
    border-radius: var(--wu-chat-input-radius);
    padding: var(--wu-chat-input-padding);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .wrapper:focus-within {
    border-color: var(--wu-color-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  textarea {
    flex: 1;
    border: none;
    background: transparent;
    resize: none;
    outline: none;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-chat-input-font-size);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
    min-height: 40px;
    max-height: 200px;
    overflow-y: auto;
    field-sizing: content;
  }

  textarea::placeholder {
    color: var(--wu-color-text-disabled);
  }

  .actions {
    display: flex;
    gap: var(--wu-space-1);
    align-items: center;
    flex-shrink: 0;
  }

  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: var(--wu-radius-md);
    background: transparent;
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    font-size: 16px;
  }

  button:hover:not(:disabled) {
    background: var(--wu-color-surface-raised);
    color: var(--wu-color-text);
  }

  button.send {
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border-radius: var(--wu-radius-md);
  }

  button.send:hover:not(:disabled) {
    background: var(--wu-color-primary-hover);
  }

  button:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
