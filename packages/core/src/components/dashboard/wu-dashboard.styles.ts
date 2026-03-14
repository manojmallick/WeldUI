import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    height: 100%;
  }

  .shell {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* ── Top bar area ─────────────────────── */
  .topbar {
    display: contents;
  }

  /* ── Body: sidebar + main ─────────────── */
  .body {
    display: flex;
    flex: 1;
    min-height: 0;
    overflow: hidden;
  }

  .sidearea {
    display: contents;
  }

  /* ── Main content ─────────────────────── */
  main {
    flex: 1;
    overflow-y: auto;
    background: var(--wu-color-background);
  }

  .main-inner {
    padding: var(--wu-space-6);
    max-width: 1280px;
  }

  :host([full-width]) .main-inner {
    max-width: none;
  }
`;
