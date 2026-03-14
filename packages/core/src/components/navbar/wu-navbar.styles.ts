import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --wu-navbar-height:   60px;
    --wu-navbar-bg:      var(--wu-color-background);
    --wu-navbar-border:  var(--wu-color-border);
    --wu-navbar-padding: var(--wu-space-4);
    --wu-navbar-gap:     var(--wu-space-4);
    --wu-navbar-z:       100;
  }

  :host([sticky]) .bar {
    position: sticky;
    top: 0;
    z-index: var(--wu-navbar-z);
  }

  :host([fixed]) .bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--wu-navbar-z);
  }

  .bar {
    display: flex;
    align-items: center;
    height: var(--wu-navbar-height);
    padding: 0 var(--wu-navbar-padding);
    background: var(--wu-navbar-bg);
    border-bottom: 1px solid var(--wu-navbar-border);
    gap: var(--wu-navbar-gap);
  }

  /* ── Logo ────────────────────────────────── */
  .logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    text-decoration: none;
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
  }

  /* ── nav slot fills remaining space ─────── */
  .nav {
    display: flex;
    align-items: center;
    gap: var(--wu-space-1);
    flex: 1;
  }

  /* ── actions stay right ──────────────────── */
  .actions {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    flex-shrink: 0;
  }

  /* ── Mobile burger ───────────────────────── */
  .burger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    padding: 0;
    background: none;
    border: 1px solid var(--wu-navbar-border);
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    flex-shrink: 0;
  }

  .burger:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  /* ── Mobile drawer ───────────────────────── */
  .drawer {
    display: none;
    flex-direction: column;
    background: var(--wu-navbar-bg);
    border-bottom: 1px solid var(--wu-navbar-border);
    padding: var(--wu-space-3) var(--wu-navbar-padding);
    gap: var(--wu-space-1);
  }

  :host([_open]) .drawer { display: flex; }

  /* ── Responsive breakpoint ───────────────── */
  @media (max-width: 768px) {
    .nav { display: none; }
    .burger { display: inline-flex; }
  }
`;
