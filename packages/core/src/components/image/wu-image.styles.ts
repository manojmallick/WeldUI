import { css } from 'lit';
export const styles = css`
  :host { display: inline-block; }
  .image-wrap { position: relative; overflow: hidden; }
  img { width: 100%; height: 100%; object-fit: var(--wu-image-fit, cover); display: block; }
  .placeholder { width: 100%; height: 100%; background: var(--wu-color-surface); display: flex; align-items: center; justify-content: center; color: var(--wu-color-text-disabled); font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); }
  :host([rounded]) .image-wrap { border-radius: var(--wu-radius-lg); }
  :host([circle]) .image-wrap { border-radius: 50%; }
`;
