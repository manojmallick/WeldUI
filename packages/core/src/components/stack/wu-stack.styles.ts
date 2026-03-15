import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-stack-gap: var(--wu-space-4);
    --wu-stack-direction: column;
  }

  :host([gap='xs']) {
    --wu-stack-gap: var(--wu-space-1);
  }

  :host([gap='sm']) {
    --wu-stack-gap: var(--wu-space-2);
  }

  :host([gap='lg']) {
    --wu-stack-gap: var(--wu-space-6);
  }

  :host([gap='xl']) {
    --wu-stack-gap: var(--wu-space-8);
  }

  :host([direction='horizontal']) {
    --wu-stack-direction: row;
  }

  .stack {
    display: flex;
    flex-direction: var(--wu-stack-direction);
    gap: var(--wu-stack-gap);
    align-items: var(--wu-stack-align, stretch);
    justify-content: var(--wu-stack-justify, flex-start);
  }
`;