import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  .title { font-size: var(--wu-text-sm); font-weight: var(--wu-font-semibold); color: var(--wu-color-text); margin-bottom: var(--wu-space-3); }
  .candles { display: flex; align-items: flex-end; gap: 3px; overflow-x: auto; padding: var(--wu-space-2) 0; }
  .candle { display: flex; flex-direction: column; align-items: center; gap: 1px; }
  .wick { width: 2px; background: var(--wu-color-text-secondary); }
  .body { width: 10px; border-radius: 1px; min-height: 4px; }
  .body.up { background: var(--wu-color-success); }
  .body.down { background: var(--wu-color-danger); }
`;
