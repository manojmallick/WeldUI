import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    overflow: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--wu-color-border-strong) transparent;
  }
  :host::-webkit-scrollbar { width: 6px; height: 6px; }
  :host::-webkit-scrollbar-track { background: transparent; }
  :host::-webkit-scrollbar-thumb {
    background: var(--wu-color-border-strong);
    border-radius: var(--wu-radius-full);
  }
  :host::-webkit-scrollbar-thumb:hover { background: var(--wu-color-text-disabled); }
  :host([orientation="vertical"]) { overflow-x: hidden; overflow-y: auto; }
  :host([orientation="horizontal"]) { overflow-x: auto; overflow-y: hidden; }
`;
