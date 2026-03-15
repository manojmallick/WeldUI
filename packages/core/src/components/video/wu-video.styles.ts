import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    font-family: var(--wu-font-sans, system-ui);
  }
  .container {
    background: #000;
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    position: relative;
    aspect-ratio: 16/9;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--wu-space-3) var(--wu-space-4);
    background: linear-gradient(transparent, rgba(0,0,0,0.7));
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    transition: opacity var(--wu-duration-normal);
  }
  .container:not(:hover) .controls { opacity: 0; }
  .container:hover .controls, :host([paused]) .controls { opacity: 1; }
  .play-btn {
    background: rgba(255,255,255,0.9);
    border: none;
    width: 36px;
    height: 36px;
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
    transition: background var(--wu-duration-fast);
  }
  .play-btn:hover { background: white; }
  .progress {
    flex: 1;
    height: 4px;
    background: rgba(255,255,255,0.3);
    border-radius: var(--wu-radius-full);
    cursor: pointer;
    position: relative;
  }
  .progress-fill {
    height: 100%;
    background: var(--wu-color-primary, #2563eb);
    border-radius: var(--wu-radius-full);
    pointer-events: none;
  }
  .time {
    color: rgba(255,255,255,0.8);
    font-size: var(--wu-text-xs);
    white-space: nowrap;
  }
  .volume-btn {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: var(--wu-space-1);
  }
`;
