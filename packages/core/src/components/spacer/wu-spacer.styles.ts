import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    flex: 1 1 auto;
  }

  :host([size='xs']) { flex: 0 0 var(--wu-space-1); width: var(--wu-space-1); height: var(--wu-space-1); }
  :host([size='sm']) { flex: 0 0 var(--wu-space-2); width: var(--wu-space-2); height: var(--wu-space-2); }
  :host([size='md']) { flex: 0 0 var(--wu-space-4); width: var(--wu-space-4); height: var(--wu-space-4); }
  :host([size='lg']) { flex: 0 0 var(--wu-space-6); width: var(--wu-space-6); height: var(--wu-space-6); }
  :host([size='xl']) { flex: 0 0 var(--wu-space-8); width: var(--wu-space-8); height: var(--wu-space-8); }
  :host([size='auto']) { flex: 1 1 auto; }

  span {
    display: block;
    width: 100%;
    height: 100%;
  }
`;
