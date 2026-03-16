import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    min-width: 120px;
  }

  .label {
    display: flex;
    justify-content: space-between;
  }

  .count { font-variant-numeric: tabular-nums; }

  .bar-track {
    height: 4px;
    background: var(--wu-color-border);
    border-radius: var(--wu-radius-full);
    overflow: hidden;
  }

  .bar-fill {
    height: 100%;
    background: var(--wu-color-primary);
    border-radius: var(--wu-radius-full);
    transition: width var(--wu-duration-normal) var(--wu-ease-default),
                background var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([over-limit]) .bar-fill { background: var(--wu-color-danger); }
  :host([near-limit]) .bar-fill { background: var(--wu-color-warning); }
`;
