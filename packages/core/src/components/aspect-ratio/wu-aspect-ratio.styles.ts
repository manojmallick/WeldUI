import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .aspect-ratio {
    aspect-ratio: var(--wu-aspect-ratio-ratio, 16 / 9);
    width: 100%;
    overflow: hidden;
    position: relative;
  }

  ::slotted(img),
  ::slotted(video),
  ::slotted(iframe) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border: none;
  }
`;
