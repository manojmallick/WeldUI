import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  /* wu-chat */
  .chat-container {
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4);
    background: var(--wu-color-background);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
  }

  /* wu-chat-bubble */
  .bubble-row {
    display: flex;
    align-items: flex-end;
    gap: var(--wu-space-2);
  }

  :host([side="right"]) .bubble-row { flex-direction: row-reverse; }

  .avatar {
    flex-shrink: 0;
    width: 28px; height: 28px;
    border-radius: 50%;
    background: var(--wu-color-primary-subtle);
    color: var(--wu-color-primary);
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .bubble {
    max-width: 70%;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  :host([side="right"]) .bubble { align-items: flex-end; }

  .author {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
    padding: 0 var(--wu-space-1);
  }

  .content {
    padding: var(--wu-space-2) var(--wu-space-3);
    border-radius: var(--wu-radius-lg);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    word-break: break-word;
  }

  :host([side="left"])  .content { background: var(--wu-color-surface); color: var(--wu-color-text); border-bottom-left-radius: var(--wu-radius-sm); }
  :host([side="right"]) .content { background: var(--wu-color-primary); color: var(--wu-color-primary-fg); border-bottom-right-radius: var(--wu-radius-sm); }

  .time {
    font-size: 10px;
    color: var(--wu-color-text-disabled);
    padding: 0 var(--wu-space-1);
  }
`;
