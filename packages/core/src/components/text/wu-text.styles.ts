import { css } from 'lit';

export const styles = css`
  :host { display: inline; }

  .text {
    font-family: var(--wu-font-sans);
    color: var(--wu-color-text);
    font-size: inherit;
    line-height: inherit;
  }

  /* Variant colours */
  :host([variant='secondary']) .text { color: var(--wu-color-text-secondary); }
  :host([variant='muted'])     .text { color: var(--wu-color-text-disabled); }
  :host([variant='danger'])    .text { color: var(--wu-color-danger); }
  :host([variant='success'])   .text { color: var(--wu-color-success); }
  :host([variant='warning'])   .text { color: var(--wu-color-warning); }
  :host([variant='primary'])   .text { color: var(--wu-color-primary); }

  /* Sizes */
  :host([size='xs'])   .text { font-size: var(--wu-text-xs); }
  :host([size='sm'])   .text { font-size: var(--wu-text-sm); }
  :host([size='base']) .text { font-size: var(--wu-text-base); }
  :host([size='lg'])   .text { font-size: var(--wu-text-lg); }
  :host([size='xl'])   .text { font-size: var(--wu-text-xl); }

  /* Weights */
  :host([weight='medium'])   .text { font-weight: var(--wu-font-medium); }
  :host([weight='semibold']) .text { font-weight: var(--wu-font-semibold); }
  :host([weight='bold'])     .text { font-weight: var(--wu-font-bold); }

  /* Modifiers */
  :host([italic]) .text { font-style: italic; }
  :host([mono])   .text { font-family: var(--wu-font-mono); }
`;
