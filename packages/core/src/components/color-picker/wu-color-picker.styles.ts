import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  label { display: block; font-family: var(--wu-font-sans); font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); margin-bottom: var(--wu-space-1); }
  .picker-wrap { display: inline-flex; flex-direction: column; gap: var(--wu-space-2); }
  .canvas-area { position: relative; width: 240px; height: 160px; border-radius: var(--wu-radius-md); overflow: hidden; cursor: crosshair; }
  canvas { display: block; width: 100%; height: 100%; }
  .cursor { position: absolute; width: 12px; height: 12px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.5); pointer-events: none; transform: translate(-50%, -50%); }
  .hue-row { display: flex; align-items: center; gap: var(--wu-space-2); }
  .hue-slider { flex: 1; -webkit-appearance: none; height: 12px; border-radius: var(--wu-radius-full); background: linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00); cursor: pointer; }
  .hue-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 16px; height: 16px; border-radius: 50%; border: 2px solid #fff; box-shadow: 0 0 0 1px rgba(0,0,0,.4); background: var(--wu-color-border); cursor: pointer; }
  .swatch { width: 32px; height: 32px; border-radius: var(--wu-radius-md); border: 1px solid var(--wu-color-border); }
  .inputs { display: flex; gap: var(--wu-space-2); }
  .hex-input { width: 90px; padding: var(--wu-space-1) var(--wu-space-2); border: 1px solid var(--wu-color-border); border-radius: var(--wu-radius-md); font-family: var(--wu-font-mono); font-size: var(--wu-text-xs); color: var(--wu-color-text); background: var(--wu-color-background); }
  .hex-input:focus { outline: none; border-color: var(--wu-color-border-focus); box-shadow: var(--wu-focus-ring); }
  .error-msg { font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-danger); margin-top: var(--wu-space-1); }
  :host([disabled]) { opacity: 0.5; pointer-events: none; }
`;
