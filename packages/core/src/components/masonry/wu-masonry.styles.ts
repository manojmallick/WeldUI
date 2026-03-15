import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-masonry-gap: var(--wu-space-4);
  }

  :host([gap='xs']) { --wu-masonry-gap: var(--wu-space-1); }
  :host([gap='sm']) { --wu-masonry-gap: var(--wu-space-2); }
  :host([gap='lg']) { --wu-masonry-gap: var(--wu-space-6); }
  :host([gap='xl']) { --wu-masonry-gap: var(--wu-space-8); }

  .masonry {
    columns: var(--wu-masonry-columns, 3);
    column-gap: var(--wu-masonry-gap);
  }

  ::slotted(*) {
    break-inside: avoid;
    margin-bottom: var(--wu-masonry-gap);
    display: block;
  }
`;
