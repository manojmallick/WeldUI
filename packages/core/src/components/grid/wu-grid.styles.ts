import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-grid-gap: var(--wu-space-4);
  }

  :host([gap='xs']) {
    --wu-grid-gap: var(--wu-space-1);
  }

  :host([gap='sm']) {
    --wu-grid-gap: var(--wu-space-2);
  }

  :host([gap='lg']) {
    --wu-grid-gap: var(--wu-space-6);
  }

  :host([gap='xl']) {
    --wu-grid-gap: var(--wu-space-8);
  }

  .grid {
    display: grid;
    gap: var(--wu-grid-gap);
    grid-template-columns: repeat(var(--wu-grid-columns, 3), minmax(0, 1fr));
  }

  :host([auto-fit]) .grid {
    grid-template-columns: repeat(auto-fit, minmax(var(--wu-grid-min-item-width, 16rem), 1fr));
  }
`;