import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    --wu-switch-width:        44px;
    --wu-switch-height:       24px;
    --wu-switch-thumb-size:   18px;
    --wu-switch-off-bg:       var(--wu-color-border-strong);
    --wu-switch-on-bg:        var(--wu-color-primary);
    --wu-switch-thumb-color:  white;
    --wu-switch-gap:          var(--wu-space-2);
    --wu-switch-font-size:    var(--wu-text-sm);
  }

  :host([size='sm']) {
    --wu-switch-width: 32px;
    --wu-switch-height: 18px;
    --wu-switch-thumb-size: 13px;
    --wu-switch-font-size: var(--wu-text-xs);
  }

  :host([size='lg']) {
    --wu-switch-width: 56px;
    --wu-switch-height: 30px;
    --wu-switch-thumb-size: 23px;
    --wu-switch-font-size: var(--wu-text-base);
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  label {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-switch-gap);
    cursor: pointer;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-switch-font-size);
    color: var(--wu-color-text);
    user-select: none;
    -webkit-user-select: none;
  }

  :host([disabled]) label { cursor: not-allowed; pointer-events: none; }

  input[type='checkbox'] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }

  .track {
    position: relative;
    flex-shrink: 0;
    width: var(--wu-switch-width);
    height: var(--wu-switch-height);
    background: var(--wu-switch-off-bg);
    border-radius: 9999px;
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([checked]) .track {
    background: var(--wu-switch-on-bg);
  }

  .thumb {
    position: absolute;
    top: calc((var(--wu-switch-height) - var(--wu-switch-thumb-size)) / 2);
    left: calc((var(--wu-switch-height) - var(--wu-switch-thumb-size)) / 2);
    width: var(--wu-switch-thumb-size);
    height: var(--wu-switch-thumb-size);
    background: var(--wu-switch-thumb-color);
    border-radius: 50%;
    box-shadow: var(--wu-shadow-sm);
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([checked]) .thumb {
    transform: translateX(calc(var(--wu-switch-width) - var(--wu-switch-thumb-size) - (var(--wu-switch-height) - var(--wu-switch-thumb-size))));
  }

  input:focus-visible ~ .track {
    box-shadow: var(--wu-focus-ring);
  }

  .label-text {
    line-height: var(--wu-leading-normal);
  }
`;
