import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  ul, ol {
    margin: 0;
    padding: 0 0 0 var(--wu-space-6);
    color: var(--wu-color-text);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-relaxed);
  }

  :host([type='none']) ul,
  :host([type='none']) ol {
    list-style: none;
    padding-left: 0;
  }
`;
