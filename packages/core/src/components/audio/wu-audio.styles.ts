import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-audio-bg: var(--wu-color-surface);
    --wu-audio-border: var(--wu-color-border);
    --wu-audio-radius: var(--wu-radius-lg);
    --wu-audio-accent: var(--wu-color-primary);
  }

  .player {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    background: var(--wu-audio-bg);
    border: 1px solid var(--wu-audio-border);
    border-radius: var(--wu-audio-radius);
  }

  .ctrl-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--wu-audio-accent);
    color: var(--wu-color-primary-fg);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: opacity var(--wu-duration-fast) var(--wu-ease-default);
  }

  .ctrl-btn:hover { opacity: 0.85; }
  .ctrl-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }

  .progress-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
  }

  progress {
    width: 100%;
    height: 4px;
    appearance: none;
    border-radius: 9999px;
    overflow: hidden;
    cursor: pointer;
    background: var(--wu-color-border);
  }

  progress::-webkit-progress-bar { background: var(--wu-color-border); }
  progress::-webkit-progress-value { background: var(--wu-audio-accent); }
  progress::-moz-progress-bar { background: var(--wu-audio-accent); }

  .times {
    display: flex;
    justify-content: space-between;
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .mute-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    line-height: 1;
  }

  .mute-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;
