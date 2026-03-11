import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --wu-card-bg:          var(--wu-color-surface-raised);
    --wu-card-border:      var(--wu-color-border);
    --wu-card-radius:      var(--wu-radius-lg);
    --wu-card-shadow:      var(--wu-shadow-sm);
    --wu-card-shadow-hover:var(--wu-shadow-md);
    --wu-card-padding:     var(--wu-space-6);
    --wu-card-gap:         var(--wu-space-4);
    --wu-card-transition:  box-shadow var(--wu-duration-normal) var(--wu-ease-default);
  }

  .card {
    display: flex;
    flex-direction: column;
    background: var(--wu-card-bg);
    border: 1px solid var(--wu-card-border);
    border-radius: var(--wu-card-radius);
    box-shadow: var(--wu-card-shadow);
    overflow: hidden;
    transition: var(--wu-card-transition);
  }

  :host([interactive]) .card {
    cursor: pointer;
  }

  :host([interactive]) .card:hover {
    box-shadow: var(--wu-card-shadow-hover);
  }

  :host([interactive]) .card:focus-visible {
    outline: none;
    box-shadow: var(--wu-card-shadow-hover), var(--wu-focus-ring);
  }

  .header {
    padding: var(--wu-card-padding);
    padding-bottom: var(--wu-space-4);
    border-bottom: 1px solid var(--wu-card-border);
  }

  .header:not(:has(slot[name="header"] > *)) {
    display: none;
  }

  ::slotted([slot="header"]:empty) {
    display: none;
  }

  .body {
    padding: var(--wu-card-padding);
    flex: 1;
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    line-height: var(--wu-leading-normal);
  }

  .footer {
    padding: var(--wu-card-padding);
    padding-top: var(--wu-space-4);
    border-top: 1px solid var(--wu-card-border);
  }

  .footer:not(:has(slot[name="footer"] > *)) {
    display: none;
  }

  /* When no header slot content — remove header border */
  .no-header .header {
    display: none;
  }

  /* When no footer slot content — remove footer border */
  .no-footer .footer {
    display: none;
  }
`;
