import { css } from 'lit';

export const styles = css`
  :host { display: block; font-family: var(--wu-font-sans); }

  .card {
    background: var(--wu-color-surface);
    border: 1px solid var(--wu-color-border);
    border-radius: var(--wu-radius-lg);
    overflow: hidden;
    transition: box-shadow var(--wu-duration-normal) var(--wu-ease-default);
    display: flex;
    flex-direction: column;
  }

  .card:hover { box-shadow: var(--wu-shadow-md); }

  .image-wrap {
    position: relative;
    aspect-ratio: 4 / 3;
    background: var(--wu-color-border);
    overflow: hidden;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .image-placeholder {
    width: 100%;
    height: 100%;
    background: var(--wu-color-border);
  }

  .badge {
    position: absolute;
    top: var(--wu-space-2);
    left: var(--wu-space-2);
    background: var(--wu-color-danger);
    color: white;
    font-size: var(--wu-text-xs);
    font-weight: var(--wu-font-semibold);
    padding: 2px var(--wu-space-2);
    border-radius: var(--wu-radius-full);
  }

  .sold-out-overlay {
    position: absolute;
    inset: 0;
    background: color-mix(in srgb, var(--wu-color-background) 70%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text-secondary);
  }

  .body {
    padding: var(--wu-space-4);
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    flex: 1;
  }

  .name {
    margin: 0;
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-tight);
  }

  .prices {
    display: flex;
    align-items: baseline;
    gap: var(--wu-space-2);
  }

  .price {
    font-size: var(--wu-text-base);
    font-weight: var(--wu-font-bold);
    color: var(--wu-color-text);
  }

  .original-price {
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text-secondary);
    text-decoration: line-through;
  }

  .add-btn {
    margin-top: auto;
    width: 100%;
    height: 36px;
    background: var(--wu-color-primary);
    color: var(--wu-color-primary-fg);
    border: none;
    border-radius: var(--wu-radius-md);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    font-weight: var(--wu-font-semibold);
    cursor: pointer;
    transition: background var(--wu-duration-normal);
  }

  .add-btn:hover:not(:disabled) { background: var(--wu-color-primary-hover); }
  .add-btn:disabled { opacity: 0.5; cursor: not-allowed; }
  .add-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;
