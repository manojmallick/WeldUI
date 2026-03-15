import { css } from 'lit';

export const styles = css`
  :host { display: inline-flex; font-family: var(--wu-font-sans); }

  .price {
    display: inline-flex;
    align-items: baseline;
    gap: var(--wu-space-2);
    flex-wrap: wrap;
  }

  .current {
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
  }

  :host([size='sm']) .current { font-size: var(--wu-text-sm); }
  :host([size='lg']) .current { font-size: var(--wu-text-2xl); }

  .original {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-decoration: line-through;
  }

  .badge {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-danger);
    background: var(--wu-color-danger-subtle);
    border-radius: var(--wu-radius-full);
    padding: 2px var(--wu-space-2);
    align-self: center;
  }
`;
