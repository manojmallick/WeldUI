import { css } from 'lit';

export const styles = css`
  :host {
    display: flex;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  :host([orientation="vertical"]) { flex-direction: column; }
  .pane { overflow: auto; }
  .pane-primary { flex: 0 0 auto; }
  .pane-secondary { flex: 1 1 0; min-width: 0; min-height: 0; }
  .divider {
    flex: 0 0 6px;
    background: var(--wu-color-border);
    cursor: col-resize;
    transition: background var(--wu-duration-fast);
    position: relative;
    z-index: 1;
  }
  :host([orientation="vertical"]) .divider { cursor: row-resize; }
  .divider:hover, .divider.active { background: var(--wu-color-primary); }
  .divider::after {
    content: '';
    position: absolute;
    inset: -4px;
  }
`;
