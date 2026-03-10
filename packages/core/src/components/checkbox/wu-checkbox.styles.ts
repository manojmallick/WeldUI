import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    --wu-checkbox-size:         18px;
    --wu-checkbox-border:       var(--wu-color-border-strong);
    --wu-checkbox-bg:           var(--wu-color-surface-raised);
    --wu-checkbox-checked-bg:   var(--wu-color-primary);
    --wu-checkbox-checked-border: var(--wu-color-primary);
    --wu-checkbox-radius:       var(--wu-radius-sm);
    --wu-checkbox-gap:          var(--wu-space-2);
  }

  :host([disabled]) { opacity: 0.5; cursor: not-allowed; }

  .wrapper {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-checkbox-gap);
    cursor: pointer;
  }

  :host([disabled]) .wrapper { cursor: not-allowed; pointer-events: none; }

  input[type='checkbox'] {
    appearance: none;
    -webkit-appearance: none;
    width: var(--wu-checkbox-size);
    height: var(--wu-checkbox-size);
    border: 2px solid var(--wu-checkbox-border);
    border-radius: var(--wu-checkbox-radius);
    background: var(--wu-checkbox-bg);
    cursor: pointer;
    flex-shrink: 0;
    position: relative;
    transition: background var(--wu-duration-fast) var(--wu-ease-default),
                border-color var(--wu-duration-fast) var(--wu-ease-default);
    outline: none;
  }

  input[type='checkbox']:checked,
  input[type='checkbox']:indeterminate {
    background: var(--wu-checkbox-checked-bg);
    border-color: var(--wu-checkbox-checked-border);
  }

  input[type='checkbox']:checked::after {
    content: '';
    position: absolute;
    left: 4px;
    top: 1px;
    width: 5px;
    height: 9px;
    border: 2px solid white;
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
  }

  input[type='checkbox']:indeterminate::after {
    content: '';
    position: absolute;
    left: 3px;
    top: 5px;
    width: 8px;
    height: 2px;
    background: white;
    border-radius: 1px;
  }

  input[type='checkbox']:focus-visible {
    box-shadow: var(--wu-focus-ring);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }
`;
