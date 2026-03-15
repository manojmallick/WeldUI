import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .heading {
    font-family: var(--wu-font-sans);
    font-weight: var(--wu-font-semibold);
    line-height: var(--wu-leading-tight);
    color: var(--wu-color-text);
    margin: 0;
  }

  /* Auto sizes by semantic level */
  .size-level-1 { font-size: var(--wu-text-2xl); }
  .size-level-2 { font-size: var(--wu-text-xl); }
  .size-level-3 { font-size: var(--wu-text-lg); }
  .size-level-4 { font-size: var(--wu-text-base); }
  .size-level-5 { font-size: var(--wu-text-sm); }
  .size-level-6 { font-size: var(--wu-text-xs); }

  /* Explicit sizes */
  .size-xs  { font-size: var(--wu-text-xs); }
  .size-sm  { font-size: var(--wu-text-sm); }
  .size-md  { font-size: var(--wu-text-base); }
  .size-lg  { font-size: var(--wu-text-lg); }
  .size-xl  { font-size: var(--wu-text-xl); }
  .size-2xl { font-size: var(--wu-text-2xl); }

  .truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
