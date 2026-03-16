import { css } from 'lit';

export const styles = css`
  :host {
    display: inline-flex;
    align-items: center;
    gap: var(--wu-space-1);
    padding: var(--wu-space-2) var(--wu-space-3);
    background: var(--wu-color-surface);
    border-radius: var(--wu-radius-lg);
    border-bottom-left-radius: var(--wu-radius-sm);
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--wu-color-text-secondary);
    animation: bounce 1.4s ease-in-out infinite;
  }

  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
    40% { transform: scale(1); opacity: 1; }
  }
`;
