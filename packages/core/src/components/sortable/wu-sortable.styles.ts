import { css } from 'lit';

export const styles = css`
  :host { display: block; }
  .list { list-style: none; padding: 0; margin: 0; }
  .item {
    display: flex;
    align-items: center;
    gap: var(--wu-space-3);
    padding: var(--wu-space-3);
    background: var(--wu-color-surface-raised);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    margin-bottom: var(--wu-space-2);
    cursor: grab;
    user-select: none;
    transition: box-shadow var(--wu-duration-fast), transform var(--wu-duration-fast);
  }
  .item:active { cursor: grabbing; }
  .item.dragging { opacity: 0.5; box-shadow: var(--wu-shadow-xl); transform: scale(1.02); }
  .item.drag-over { border-color: var(--wu-color-primary); background: var(--wu-color-primary-subtle); }
  .handle { color: var(--wu-color-text-disabled); cursor: grab; }
  .content { flex: 1; font-family: var(--wu-font-sans, system-ui); font-size: var(--wu-text-sm); color: var(--wu-color-text); }
`;
