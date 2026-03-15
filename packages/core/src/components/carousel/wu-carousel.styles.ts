import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  .carousel { position: relative; overflow: hidden; }
  .track { display: flex; transition: transform var(--wu-duration-slow) var(--wu-ease-default); will-change: transform; }
  ::slotted(*) { flex-shrink: 0; width: 100%; }
  .nav { position: absolute; top: 50%; transform: translateY(-50%); background: var(--wu-color-background); border: 1px solid var(--wu-color-border); border-radius: 50%; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; cursor: pointer; z-index: 10; opacity: 0.9; }
  .nav:hover { opacity: 1; background: var(--wu-color-surface-raised); }
  .prev { left: var(--wu-space-2); }
  .next { right: var(--wu-space-2); }
  .dots { display: flex; justify-content: center; gap: var(--wu-space-2); padding-top: var(--wu-space-2); }
  .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--wu-color-border-strong); border: none; cursor: pointer; padding: 0; transition: background var(--wu-duration-fast); }
  .dot.active { background: var(--wu-color-primary); }
  :host([no-controls]) .nav { display: none; }
  :host([no-dots]) .dots { display: none; }
`;
