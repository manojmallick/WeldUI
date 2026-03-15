import { css } from 'lit';
export const styles = css`
  :host { display: block; }
  .wrapper { position: relative; background: var(--wu-color-gray-950, #020617); border-radius: var(--wu-radius-lg); overflow: hidden; }
  .header { display: flex; align-items: center; justify-content: space-between; padding: var(--wu-space-2) var(--wu-space-4); background: var(--wu-color-gray-900, #0f172a); border-bottom: 1px solid var(--wu-color-gray-800, #1e293b); }
  .lang { font-family: var(--wu-font-mono); font-size: var(--wu-text-xs); color: var(--wu-color-gray-400, #94a3b8); }
  .copy-btn { background: none; border: 1px solid var(--wu-color-gray-700, #334155); border-radius: var(--wu-radius-sm); padding: 4px 10px; cursor: pointer; font-family: var(--wu-font-sans); font-size: var(--wu-text-xs); color: var(--wu-color-gray-400, #94a3b8); transition: all var(--wu-duration-fast); }
  .copy-btn:hover { border-color: var(--wu-color-gray-500, #64748b); color: #fff; }
  .copy-btn.copied { color: var(--wu-color-success, #22c55e); border-color: var(--wu-color-success, #22c55e); }
  pre { margin: 0; padding: var(--wu-space-4); overflow-x: auto; }
  code { font-family: var(--wu-font-mono); font-size: var(--wu-text-sm); color: var(--wu-color-gray-100, #f1f5f9); line-height: var(--wu-leading-relaxed); }
`;
