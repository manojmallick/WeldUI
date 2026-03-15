import { css } from 'lit';
export const dlStyles = css`
  :host { display: block; }
  dl { display: grid; grid-template-columns: auto 1fr; gap: var(--wu-space-1) var(--wu-space-4); margin: 0; }
  :host([layout="stacked"]) dl { grid-template-columns: 1fr; }
`;
export const dtStyles = css`
  :host { display: contents; }
  dt { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text-secondary); padding: var(--wu-space-1) 0; }
`;
export const ddStyles = css`
  :host { display: contents; }
  dd { font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); color: var(--wu-color-text); margin: 0; padding: var(--wu-space-1) 0; }
`;
