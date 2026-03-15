import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .prose {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    line-height: var(--wu-leading-relaxed);
    color: var(--wu-color-text);
    max-width: 65ch;
  }

  :host([compact]) .prose {
    font-size: var(--wu-text-sm);
    line-height: var(--wu-leading-normal);
    max-width: none;
  }

  .prose :is(h1,h2,h3,h4,h5,h6) {
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    margin-top: var(--wu-space-5);
    margin-bottom: var(--wu-space-2);
    line-height: var(--wu-leading-tight);
  }

  .prose p { margin: 0 0 var(--wu-space-3); }

  .prose a { color: var(--wu-color-primary); text-decoration: underline; }
  .prose a:hover { color: var(--wu-color-primary-hover); }

  .prose strong { font-weight: var(--wu-font-semibold); }
  .prose em { font-style: italic; }

  .prose ul, .prose ol { padding-left: var(--wu-space-5); margin: 0 0 var(--wu-space-3); }
  .prose li { margin-bottom: var(--wu-space-1); }

  .prose blockquote {
    border-left: 3px solid var(--wu-color-border-strong);
    padding-left: var(--wu-space-4);
    margin: var(--wu-space-4) 0;
    color: var(--wu-color-text-secondary);
  }

  .prose code {
    font-family: var(--wu-font-mono);
    font-size: 0.85em;
    background: var(--wu-color-surface);
    padding: 2px 5px;
    border-radius: var(--wu-radius-sm);
  }

  .prose pre {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-4);
    overflow-x: auto;
    margin: var(--wu-space-4) 0;
  }

  .prose pre code { background: none; padding: 0; }

  .prose hr {
    border: none;
    border-top: 1px solid var(--wu-color-border);
    margin: var(--wu-space-6) 0;
  }
`;
