import { css } from 'lit';

export const treeStyles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
  }
`;

export const treeItemStyles = css`
  :host {
    display: block;
  }
  .row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-1) var(--wu-space-2);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    user-select: none;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }
  .row:hover { background: var(--wu-color-surface); }
  :host([selected]) .row { background: var(--wu-color-primary-subtle); color: var(--wu-color-primary); }
  .toggle {
    display: inline-flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-xs);
    flex-shrink: 0;
    transition: transform var(--wu-duration-fast) var(--wu-ease-default);
  }
  :host([expanded]) .toggle { transform: rotate(90deg); }
  .spacer { width: 16px; flex-shrink: 0; }
  .label { flex: 1; }
  .children {
    padding-left: var(--wu-space-4);
    overflow: hidden;
  }
  .children[hidden] { display: none; }
`;
