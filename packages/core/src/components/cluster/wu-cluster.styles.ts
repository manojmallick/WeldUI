import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-cluster-gap: var(--wu-space-3);
  }

  :host([gap='xs']) {
    --wu-cluster-gap: var(--wu-space-1);
  }

  :host([gap='sm']) {
    --wu-cluster-gap: var(--wu-space-2);
  }

  :host([gap='md']) {
    --wu-cluster-gap: var(--wu-space-4);
  }

  :host([gap='lg']) {
    --wu-cluster-gap: var(--wu-space-6);
  }

  :host([gap='xl']) {
    --wu-cluster-gap: var(--wu-space-8);
  }

  .cluster {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wu-cluster-gap);
    align-items: var(--wu-cluster-align, center);
    justify-content: var(--wu-cluster-justify, flex-start);
  }
`;