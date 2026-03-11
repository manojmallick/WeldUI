import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --wu-breadcrumb-color:          var(--wu-color-text-secondary);
    --wu-breadcrumb-color-active:   var(--wu-color-text);
    --wu-breadcrumb-color-hover:    var(--wu-color-primary);
    --wu-breadcrumb-separator:      var(--wu-color-text-disabled);
    --wu-breadcrumb-font-size:      var(--wu-text-sm);
  }

  nav {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-breadcrumb-font-size);
  }

  ol {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wu-space-1);
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  li + li::before {
    content: var(--wu-breadcrumb-separator-char, '/');
    color: var(--wu-breadcrumb-separator);
    flex-shrink: 0;
  }

  ::slotted(a) {
    color: var(--wu-breadcrumb-color);
    text-decoration: none;
    transition: color var(--wu-duration-fast) var(--wu-ease-default);
  }

  ::slotted(a:hover) {
    color: var(--wu-breadcrumb-color-hover);
    text-decoration: underline;
  }

  ::slotted([aria-current="page"]),
  ::slotted(span) {
    color: var(--wu-breadcrumb-color-active);
    font-weight: var(--wu-font-medium);
  }
`;
