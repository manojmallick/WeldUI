import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--wu-color-success);
    animation: pulse 2s ease-in-out infinite;
    flex-shrink: 0;
  }

  .text {
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-bold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--wu-color-success);
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.85); }
  }

  @media (prefers-reduced-motion: reduce) {
    .dot { animation: none; }
  }
`;
