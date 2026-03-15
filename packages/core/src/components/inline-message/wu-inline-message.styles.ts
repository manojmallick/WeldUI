import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-im-color: var(--wu-color-info);
  }

  :host([variant='success']) { --wu-im-color: var(--wu-color-success); }
  :host([variant='warning']) { --wu-im-color: var(--wu-color-warning); }
  :host([variant='error'])   { --wu-im-color: var(--wu-color-danger); }

  .message {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-1);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-im-color);
    line-height: var(--wu-leading-normal);
  }

  .icon {
    flex-shrink: 0;
    font-style: normal;
    font-size: var(--wu-text-xs);
    line-height: var(--wu-leading-normal);
  }

  .text {
    flex: 1;
  }
`;
