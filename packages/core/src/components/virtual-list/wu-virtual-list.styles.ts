import { css } from 'lit';

export const styles = css`
  :host { display: block; overflow: hidden; position: relative; }
  .viewport {
    height: var(--wu-virtual-list-height, 400px);
    overflow-y: auto;
    position: relative;
  }
  .total { position: relative; }
  .window {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
  }
`;
