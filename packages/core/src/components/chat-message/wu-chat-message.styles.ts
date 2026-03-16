import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-chat-message-gap: var(--wu-space-2);
    --wu-chat-message-radius: var(--wu-radius-lg);
    --wu-chat-message-padding: var(--wu-space-3) var(--wu-space-4);
    --wu-chat-message-font-size: var(--wu-text-sm);
    --wu-chat-message-user-bg: var(--wu-color-primary);
    --wu-chat-message-user-color: var(--wu-color-primary-fg);
    --wu-chat-message-assistant-bg: var(--wu-color-surface);
    --wu-chat-message-assistant-color: var(--wu-color-text);
  }

  .message {
    display: flex;
    flex-direction: column;
    gap: var(--wu-chat-message-gap);
    max-width: 80%;
  }

  :host([role="user"]) .message {
    align-self: flex-end;
    align-items: flex-end;
    margin-left: auto;
  }

  :host([role="assistant"]) .message,
  :host([role="system"]) .message {
    align-self: flex-start;
    align-items: flex-start;
    margin-right: auto;
  }

  .bubble {
    padding: var(--wu-chat-message-padding);
    border-radius: var(--wu-chat-message-radius);
    font-size: var(--wu-chat-message-font-size);
    line-height: var(--wu-leading-normal);
    word-break: break-word;
  }

  :host([role="user"]) .bubble {
    background: var(--wu-chat-message-user-bg);
    color: var(--wu-chat-message-user-color);
    border-bottom-right-radius: var(--wu-radius-sm);
  }

  :host([role="assistant"]) .bubble,
  :host([role="system"]) .bubble {
    background: var(--wu-chat-message-assistant-bg);
    color: var(--wu-chat-message-assistant-color);
    border-bottom-left-radius: var(--wu-radius-sm);
  }

  .meta {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    padding: 0 var(--wu-space-1);
  }

  .code-block {
    background: var(--wu-color-gray-900, #0f172a);
    color: var(--wu-color-gray-100, #f1f5f9);
    padding: var(--wu-space-3) var(--wu-space-4);
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    overflow-x: auto;
    white-space: pre-wrap;
    margin: var(--wu-space-2) 0;
  }

  .tool-call {
    background: var(--wu-color-primary-subtle);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) var(--wu-space-3);
    font-size: var(--wu-text-xs);
    font-family: var(--wu-font-mono);
    color: var(--wu-color-text-secondary);
  }
`;
