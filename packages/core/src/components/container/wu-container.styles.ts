import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-container-max-width: 64rem;
    --wu-container-padding-inline: var(--wu-space-4);
  }

  :host([size='sm']) {
    --wu-container-max-width: 40rem;
  }

  :host([size='md']) {
    --wu-container-max-width: 48rem;
  }

  :host([size='xl']) {
    --wu-container-max-width: 80rem;
  }

  :host([size='full']) {
    --wu-container-max-width: 100%;
  }

  :host([flush]) {
    --wu-container-padding-inline: 0px;
  }

  .base {
    box-sizing: border-box;
    width: min(100%, var(--wu-container-max-width));
    margin-inline: auto;
    padding-inline: var(--wu-container-padding-inline);
  }
`;