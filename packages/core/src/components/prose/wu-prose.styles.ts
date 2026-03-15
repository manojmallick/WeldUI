import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-prose-max-width: 65ch;
    --wu-prose-font-size: var(--wu-text-base);
    --wu-prose-line-height: var(--wu-leading-relaxed);
  }

  :host([size='sm']) { --wu-prose-font-size: var(--wu-text-sm); }
  :host([size='lg']) { --wu-prose-font-size: var(--wu-text-lg); }

  .prose {
    max-width: var(--wu-prose-max-width);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-prose-font-size);
    line-height: var(--wu-prose-line-height);
    color: var(--wu-color-text);
  }

  .prose ::slotted(p) {
    margin: 0 0 var(--wu-space-4);
  }

  .prose ::slotted(h2),
  .prose ::slotted(h3),
  .prose ::slotted(h4) {
    font-weight: var(--wu-font-semibold);
    margin: var(--wu-space-6) 0 var(--wu-space-2);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-tight);
  }

  .prose ::slotted(ul),
  .prose ::slotted(ol) {
    margin: 0 0 var(--wu-space-4);
    padding-left: var(--wu-space-6);
  }

  .prose ::slotted(blockquote) {
    border-left: 4px solid var(--wu-color-primary);
    margin: var(--wu-space-4) 0;
    padding: var(--wu-space-2) var(--wu-space-4);
    color: var(--wu-color-text-secondary);
    font-style: italic;
  }

  .prose ::slotted(code) {
    font-family: var(--wu-font-mono);
    font-size: 0.9em;
    background: var(--wu-color-surface);
    padding: 0.1em 0.3em;
    border-radius: var(--wu-radius-sm);
    border: 1px solid var(--wu-color-border);
  }

  .prose ::slotted(pre) {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    overflow-x: auto;
    margin: 0 0 var(--wu-space-4);
  }

  .prose ::slotted(a) {
    color: var(--wu-color-primary);
    text-decoration: underline;
  }

  .prose ::slotted(hr) {
    border: none;
    border-top: 1px solid var(--wu-color-border);
    margin: var(--wu-space-6) 0;
  }
`;
