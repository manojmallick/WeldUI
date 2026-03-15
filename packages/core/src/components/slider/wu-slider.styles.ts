import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    --wu-slider-track-height: 4px;
    --wu-slider-thumb-size: 18px;
    --wu-slider-thumb-color: var(--wu-color-primary);
    --wu-slider-track-color: var(--wu-color-border);
    --wu-slider-fill-color: var(--wu-color-primary);
  }

  :host([disabled]) {
    opacity: 0.5;
    pointer-events: none;
  }

  .label-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: var(--wu-space-2);
  }

  label {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
  }

  .value {
    font-family: var(--wu-font-mono);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .track-container {
    position: relative;
    display: flex;
    align-items: center;
    height: var(--wu-slider-thumb-size);
  }

  input[type='range'] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: var(--wu-slider-track-height);
    background: transparent;
    outline: none;
    cursor: pointer;
    position: relative;
    z-index: 1;
  }

  input[type='range']::-webkit-slider-runnable-track {
    height: var(--wu-slider-track-height);
    background: var(--wu-slider-track-color);
    border-radius: var(--wu-radius-full);
  }

  input[type='range']::-moz-range-track {
    height: var(--wu-slider-track-height);
    background: var(--wu-slider-track-color);
    border-radius: var(--wu-radius-full);
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: var(--wu-slider-thumb-size);
    height: var(--wu-slider-thumb-size);
    background: var(--wu-slider-thumb-color);
    border-radius: 50%;
    border: 2px solid var(--wu-color-background);
    box-shadow: var(--wu-shadow-sm);
    cursor: pointer;
    transition: transform var(--wu-duration-fast);
  }

  input[type='range']::-moz-range-thumb {
    width: var(--wu-slider-thumb-size);
    height: var(--wu-slider-thumb-size);
    background: var(--wu-slider-thumb-color);
    border-radius: 50%;
    border: 2px solid var(--wu-color-background);
    box-shadow: var(--wu-shadow-sm);
    cursor: pointer;
  }

  input[type='range']:hover::-webkit-slider-thumb {
    transform: scale(1.15);
  }

  input[type='range']:focus-visible::-webkit-slider-thumb {
    box-shadow: var(--wu-focus-ring);
  }

  .hint {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
    margin-top: var(--wu-space-1);
  }

  .tick-marks {
    display: flex;
    justify-content: space-between;
    padding: 0 calc(var(--wu-slider-thumb-size) / 2);
    margin-top: var(--wu-space-1);
  }

  .tick {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }
`;
