import { css } from 'lit';

export const styles = css`
  :host {
    display: inline;
    --wu-streaming-cursor-color: var(--wu-color-primary);
  }

  .text {
    display: inline;
  }

  .cursor {
    display: inline-block;
    width: 2px;
    height: 1em;
    background: var(--wu-streaming-cursor-color);
    margin-left: 1px;
    vertical-align: text-bottom;
    animation: blink 1s step-end infinite;
  }

  :host([done]) .cursor {
    display: none;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
