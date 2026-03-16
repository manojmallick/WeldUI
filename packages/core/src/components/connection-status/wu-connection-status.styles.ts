import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
  }

  .banner {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    padding: var(--wu-space-2) var(--wu-space-4);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    transition: background var(--wu-duration-normal) var(--wu-ease-default);
  }

  :host([status="online"]) .banner { background: var(--wu-color-success-subtle); color: var(--wu-color-success); }
  :host([status="offline"]) .banner { background: var(--wu-color-danger-subtle); color: var(--wu-color-danger); }
  :host([status="reconnecting"]) .banner { background: var(--wu-color-warning-subtle); color: var(--wu-color-warning); }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: currentColor;
    flex-shrink: 0;
  }

  :host([status="reconnecting"]) .dot {
    animation: blink 1s step-end infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
