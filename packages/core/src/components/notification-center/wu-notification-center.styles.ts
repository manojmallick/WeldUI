import { css } from 'lit';

export const styles = css`
  :host {
    display: block;
    position: relative;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
  }
  .trigger {
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    padding: var(--wu-space-2);
    border-radius: var(--wu-radius-full);
    color: var(--wu-color-text);
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }
  .trigger:hover { background: var(--wu-color-surface); }
  .badge {
    position: absolute;
    top: 2px;
    right: 2px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-danger);
    color: white;
    font-size: 10px;
    font-weight: var(--wu-font-bold);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .panel {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    width: 360px;
    max-height: 480px;
    overflow-y: auto;
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-xl);
    box-shadow: var(--wu-shadow-xl);
    z-index: 200;
  }
  .panel[hidden] { display: none; }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-space-3) var(--wu-space-4);
    border-bottom: 1px solid var(--wu-color-border);
  }
  .header-title { font-weight: var(--wu-font-semibold); color: var(--wu-color-text); }
  .mark-all-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: var(--wu-text-xs);
    color: var(--wu-color-primary);
    padding: 0;
  }
  .empty {
    padding: var(--wu-space-8) var(--wu-space-4);
    text-align: center;
    color: var(--wu-color-text-secondary);
  }
  .item {
    display: flex;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3) var(--wu-space-4);
    cursor: pointer;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
    border-bottom: 1px solid var(--wu-color-border);
  }
  .item:last-child { border-bottom: none; }
  .item:hover { background: var(--wu-color-surface); }
  .item.unread { background: var(--wu-color-primary-subtle); }
  .dot {
    width: 8px;
    height: 8px;
    border-radius: var(--wu-radius-full);
    background: var(--wu-color-primary);
    margin-top: 6px;
    flex-shrink: 0;
  }
  .item.read .dot { background: transparent; }
  .item-title { font-weight: var(--wu-font-medium); color: var(--wu-color-text); }
  .item-body { font-size: var(--wu-text-xs); color: var(--wu-color-text-secondary); margin-top: 2px; }
  .item-time { font-size: var(--wu-text-xs); color: var(--wu-color-text-disabled); margin-top: 4px; }
`;
