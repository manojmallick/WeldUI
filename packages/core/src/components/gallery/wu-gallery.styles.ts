import { css } from 'lit';

export const styles = css`
  :host { display: block; }
  .grid {
    display: grid;
    gap: var(--wu-space-2);
    grid-template-columns: repeat(var(--wu-gallery-cols, 3), 1fr);
  }
  .thumb {
    aspect-ratio: 1;
    overflow: hidden;
    border-radius: var(--wu-radius-md);
    cursor: pointer;
    position: relative;
  }
  .thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--wu-duration-normal) var(--wu-ease-default);
  }
  .thumb:hover img { transform: scale(1.05); }
  .thumb:focus-visible { outline: 2px solid var(--wu-color-border-focus); }
`;
