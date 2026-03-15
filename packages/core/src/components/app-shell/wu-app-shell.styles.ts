import { css } from 'lit';

export const styles = css`
  :host { display: block; height: 100%; }

  .shell {
    display: grid;
    grid-template-columns: 240px 1fr;
    grid-template-rows: 1fr;
    height: 100%;
    min-height: 100dvh;
    background: var(--wu-color-background);
  }

  .shell.collapsed { grid-template-columns: 60px 1fr; }
  .shell.no-sidebar { grid-template-columns: 1fr; }

  .sidebar {
    background: var(--wu-color-surface);
    border-right: 1px solid var(--wu-color-border);
    overflow-y: auto;
    overflow-x: hidden;
  }

  .body {
    display: grid;
    grid-template-rows: auto 1fr;
    overflow: hidden;
  }

  .header {
    background: var(--wu-color-surface-raised);
    border-bottom: 1px solid var(--wu-color-border);
    position: sticky;
    top: 0;
    z-index: 10;
  }

  .main {
    overflow-y: auto;
    padding: var(--wu-space-6);
  }
`;
