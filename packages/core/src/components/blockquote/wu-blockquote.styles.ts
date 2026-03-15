import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .blockquote-figure {
    margin: 0;
    padding: 0;
  }

  blockquote {
    margin: 0;
    padding: var(--wu-space-4) var(--wu-space-6);
    border-left: 4px solid var(--wu-color-primary);
    background: var(--wu-color-primary-subtle);
    border-radius: 0 var(--wu-radius-md) var(--wu-radius-md) 0;
    font-size: var(--wu-text-base);
    font-style: italic;
    line-height: var(--wu-leading-relaxed);
    color: var(--wu-color-text);
  }

  .attribution {
    margin-top: var(--wu-space-2);
    padding-left: var(--wu-space-6);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    font-style: normal;
    font-weight: var(--wu-font-medium);
  }
`;
