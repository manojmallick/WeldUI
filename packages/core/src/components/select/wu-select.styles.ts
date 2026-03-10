import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-select-bg:          var(--wu-color-surface-raised);
    --wu-select-color:       var(--wu-color-text);
    --wu-select-border:      var(--wu-color-border);
    --wu-select-border-focus:var(--wu-color-border-focus);
    --wu-select-radius:      var(--wu-radius-md);
    --wu-select-font-size:   var(--wu-text-sm);
    --wu-select-height:      36px;
    --wu-select-padding-x:   var(--wu-space-3);
  }

  :host([size='sm']) { --wu-select-height: 28px; --wu-select-font-size: var(--wu-text-xs); }
  :host([size='lg']) { --wu-select-height: 44px; --wu-select-font-size: var(--wu-text-base); }
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

  .select-row {
    position: relative;
    display: flex;
    align-items: center;
  }

  select {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: var(--wu-select-height);
    padding: 0 calc(var(--wu-select-padding-x) * 2.5) 0 var(--wu-select-padding-x);
    background: var(--wu-select-bg);
    color: var(--wu-select-color);
    border: 1px solid var(--wu-select-border);
    border-radius: var(--wu-select-radius);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-select-font-size);
    outline: none;
    cursor: pointer;
    transition: border-color var(--wu-duration-fast) var(--wu-ease-default),
                box-shadow var(--wu-duration-fast) var(--wu-ease-default);
  }

  select:focus {
    border-color: var(--wu-select-border-focus);
    box-shadow: var(--wu-focus-ring);
  }

  .chevron {
    position: absolute;
    right: var(--wu-space-3);
    pointer-events: none;
    color: var(--wu-color-text-secondary);
    width: 16px;
    height: 16px;
  }

  .hint, .error {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .error { color: var(--wu-color-danger); }
`;
