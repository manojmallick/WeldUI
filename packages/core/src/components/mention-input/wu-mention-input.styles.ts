import { css } from 'lit';

export const styles = css`
  :host { display: block; }
  .wrapper { position: relative; }

  .textarea {
    width: 100%;
    box-sizing: border-box;
    padding: var(--wu-space-3);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    background: var(--wu-color-background);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    resize: vertical;
    outline: none;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default);
  }

  .textarea::placeholder { color: var(--wu-color-text-disabled); }
  .textarea:focus { border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .textarea.mentioning { border-color: var(--wu-color-primary); }

  .mention-hint {
    margin-top: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
  }
`;
