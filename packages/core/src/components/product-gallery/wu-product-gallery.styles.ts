import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .gallery { display: flex; flex-direction: column; gap: var(--wu-space-3); }

  .main-image {
    aspect-ratio: 1 / 1;
    background: var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
  }

  .main-img, .placeholder {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .thumbnails {
    display: flex;
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .thumb {
    width: 60px;
    height: 60px;
    border-radius: var(--wu-radius-md);
    overflow: hidden;
    border: 2px solid transparent;
    padding: 0;
    cursor: pointer;
    background: none;
    transition: border-color var(--wu-duration-fast);
  }

  .thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .thumb.active { border-color: var(--wu-color-primary); }
  .thumb:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;
