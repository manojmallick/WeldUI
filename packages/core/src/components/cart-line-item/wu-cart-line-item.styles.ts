import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .line-item {
    display: flex;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4) 0;
    border-bottom: 1px solid var(--wu-color-border);
    align-items: flex-start;
  }

  .image-wrap { flex-shrink: 0; }

  .img, .img-placeholder {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: var(--wu-radius-md);
    display: block;
    background: var(--wu-color-border);
  }

  .details {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-1);
    min-width: 0;
  }

  .name {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-medium);
    color: var(--wu-color-text);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .variant {
    font-size: var(--wu-text-xs);
    color: var(--wu-color-text-secondary);
  }

  .bottom-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: var(--wu-space-2);
  }

  .qty-row {
    display: flex;
    align-items: center;
    gap: var(--wu-space-2);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-md);
    padding: 0 var(--wu-space-1);
    height: 28px;
  }

  .qty-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text);
    font-size: var(--wu-text-base);
    padding: 0 var(--wu-space-1);
    line-height: 1;
  }

  .qty { font-size: var(--wu-text-sm); font-weight: var(--wu-font-medium); color: var(--wu-color-text); }

  .price {
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
  }

  .remove-btn {
    flex-shrink: 0;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--wu-color-text-secondary);
    padding: var(--wu-space-1);
    border-radius: var(--wu-radius-sm);
    display: flex;
    align-items: center;
    transition: color var(--wu-duration-fast);
  }

  .remove-btn:hover { color: var(--wu-color-danger); }
  .remove-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;
