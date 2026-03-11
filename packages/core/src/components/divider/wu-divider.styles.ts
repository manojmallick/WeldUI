import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --wu-divider-color:   var(--wu-color-border);
    --wu-divider-thickness: 1px;
    --wu-divider-spacing: var(--wu-space-4);
  }

  /* ── Horizontal (default) ── */
  :host {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    margin: var(--wu-divider-spacing) 0;
  }

  :host([vertical]) {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
    gap: var(--wu-space-3);
    margin: 0 var(--wu-divider-spacing);
  }

  .line {
    flex: 1;
    background: var(--wu-divider-color);
  }

  :host(:not([vertical])) .line {
    height: var(--wu-divider-thickness);
  }

  :host([vertical]) .line {
    width: var(--wu-divider-thickness);
    min-height: var(--wu-space-4);
  }

  .label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    white-space: nowrap;
    flex-shrink: 0;
  }
`;
