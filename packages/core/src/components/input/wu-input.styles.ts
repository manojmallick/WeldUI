import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-input-bg:          var(--wu-color-surface-raised);
    --wu-input-color:       var(--wu-color-text);
    --wu-input-border:      var(--wu-color-border);
    --wu-input-border-focus:var(--wu-color-border-focus);
    --wu-input-placeholder: var(--wu-color-text-disabled);
    --wu-input-radius:      var(--wu-radius-md);
    --wu-input-font-size:   var(--wu-text-sm);
    --wu-input-height:      36px;
    --wu-input-padding-x:   var(--wu-space-3);
    --wu-input-padding-y:   var(--wu-space-2);
  }

  :host([size='sm']) { --wu-input-height: 28px; --wu-input-font-size: var(--wu-text-xs); }
  :host([size='lg']) { --wu-input-height: 44px; --wu-input-font-size: var(--wu-text-base); }

  :host([disabled]) { opacity: 0.5; }

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .input-row {
    display: flex;
    align-items: center;
    background: var(--wu-input-bg);
    border: 1px solid var(--wu-input-border);
    border-radius: var(--wu-input-radius);
    height: var(--wu-input-height);
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default),
                box-shadow var(--wu-duration-fast) var(--wu-ease-default);
    overflow: hidden;
  }

  .input-row:focus-within {
    border-color: var(--wu-input-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  input {
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    padding: var(--wu-input-padding-y) var(--wu-input-padding-x);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-input-font-size);
    color: var(--wu-input-color);
    height: 100%;
    width: 100%;
  }

  input::placeholder {
    color: var(--wu-input-placeholder);
  }

  .hint, .error {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .error {
    color: var(--wu-color-danger);
  }

  :host([invalid]) .input-row {
    border-color: var(--wu-color-danger);
  }
`;
