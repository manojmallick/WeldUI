import { css } from 'lit';

export const tabsStyles = css`
  :host {
    display: block;

    --wu-tabs-border:        var(--wu-color-border);
    --wu-tab-color:          var(--wu-color-text-secondary);
    --wu-tab-color-active:   var(--wu-color-primary);
    --wu-tab-bg-hover:       var(--wu-color-surface);
    --wu-tab-indicator:      var(--wu-color-primary);
    --wu-tab-font-size:      var(--wu-text-sm);
    --wu-tab-font-weight:    var(--wu-font-medium);
    --wu-tab-padding-x:      var(--wu-space-4);
    --wu-tab-padding-y:      var(--wu-space-3);
    --wu-tab-radius:         var(--wu-radius-md);
  }

  .tablist {
    display: flex;
    border-bottom: 1px solid var(--wu-tabs-border);
    gap: var(--wu-space-1);
    overflow-x: auto;
    scrollbar-width: none;
  }

  .tablist::-webkit-scrollbar { display: none; }

  :host([orientation="vertical"]) {
    display: flex;
    gap: var(--wu-space-6);
    align-items: flex-start;
  }

  :host([orientation="vertical"]) .tablist {
    flex-direction: column;
    border-bottom: none;
    border-right: 1px solid var(--wu-tabs-border);
    min-width: 180px;
    padding-right: var(--wu-space-2);
  }

  :host([orientation="vertical"]) .panels {
    flex: 1;
  }
`;

export const tabStyles = css`
  :host {
    display: contents;
  }

  button {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-tab-padding-y) var(--wu-tab-padding-x);
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    border-radius: var(--wu-tab-radius) var(--wu-tab-radius) 0 0;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-tab-font-size);
    font-weight: var(--wu-tab-font-weight);
    color: var(--wu-tab-color);
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--wu-duration-fast) var(--wu-ease-default);
    margin-bottom: -1px;
  }

  button:hover:not([disabled]) {
    background: var(--wu-tab-bg-hover);
    color: var(--wu-color-text);
  }

  :host([active]) button {
    color: var(--wu-tab-color-active);
    border-bottom-color: var(--wu-tab-indicator);
  }

  :host([disabled]) button {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }
`;

export const panelStyles = css`
  :host {
    display: none;
  }

  :host([active]) {
    display: block;
  }
`;
