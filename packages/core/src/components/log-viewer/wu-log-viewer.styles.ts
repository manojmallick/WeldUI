import { css } from 'lit';

export const styles = css`
  :host { display: block; }

  .container {
    overflow-y: auto;
    background: var(--wu-color-gray-950, #020617);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: var(--wu-space-2) 0;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    line-height: 1.7;
  }

  .empty {
    padding: var(--wu-space-3) var(--wu-space-4);
    color: var(--wu-color-text-disabled);
  }

  .line {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-2);
    padding: 1px var(--wu-space-4);
    min-height: 22px;
  }

  .line:hover { background: rgba(255,255,255,0.04); }

  .ts { color: #4b5563; flex-shrink: 0; }

  .badge {
    flex-shrink: 0;
    padding: 0 5px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 10px;
    line-height: 18px;
  }

  .level-info  .badge { background: #1e3a5f; color: #60a5fa; }
  .level-warn  .badge { background: #422006; color: #fbbf24; }
  .level-error .badge { background: #4c0519; color: #f87171; }
  .level-debug .badge { background: #1a1a2e; color: #a78bfa; }

  .level-info  .msg { color: #d1d5db; }
  .level-warn  .msg { color: #fcd34d; }
  .level-error .msg { color: #fca5a5; }
  .level-debug .msg { color: #9ca3af; }
`;
