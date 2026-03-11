import { css } from 'lit';

export const styles = css`
  :host {
    display: contents;

    --wu-modal-bg:          var(--wu-color-surface-overlay);
    --wu-modal-border:      var(--wu-color-border);
    --wu-modal-radius:      var(--wu-radius-xl);
    --wu-modal-shadow:      var(--wu-shadow-xl);
    --wu-modal-padding:     var(--wu-space-6);
    --wu-modal-width:       560px;
    --wu-modal-backdrop:    rgba(0, 0, 0, 0.5);
  }

  dialog {
    padding: 0;
    border: none;
    border-radius: var(--wu-modal-radius);
    background: var(--wu-modal-bg);
    box-shadow: var(--wu-modal-shadow);
    width: min(var(--wu-modal-width), calc(100vw - 2rem));
    max-height: calc(100dvh - 2rem);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  dialog::backdrop {
    background: var(--wu-modal-backdrop);
    backdrop-filter: blur(2px);
    animation: fade-in var(--wu-duration-normal) var(--wu-ease-default);
  }

  dialog[open] {
    animation: slide-up var(--wu-duration-normal) var(--wu-ease-default);
  }

  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes slide-up {
    from { opacity: 0; transform: translateY(8px) scale(0.98); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--wu-modal-padding);
    padding-bottom: var(--wu-space-4);
    border-bottom: 1px solid var(--wu-modal-border);
    gap: var(--wu-space-4);
  }

  .modal-title {
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-lg);
    font-weight: var(--wu-font-semibold);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-tight);
    flex: 1;
    margin: 0;
  }

  .close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: var(--wu-radius-md);
    background: transparent;
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    font-size: 1.25rem;
    transition: background var(--wu-duration-fast) var(--wu-ease-default),
                color var(--wu-duration-fast) var(--wu-ease-default);
    flex-shrink: 0;
  }

  .close-btn:hover {
    background: var(--wu-color-surface);
    color: var(--wu-color-text);
  }

  .close-btn:focus-visible {
    outline: none;
    box-shadow: var(--wu-focus-ring);
  }

  .modal-body {
    padding: var(--wu-modal-padding);
    overflow-y: auto;
    flex: 1;
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-base);
    color: var(--wu-color-text);
    line-height: var(--wu-leading-normal);
  }

  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4) var(--wu-modal-padding);
    border-top: 1px solid var(--wu-modal-border);
  }

  .modal-footer:not(:has(slot[name="footer"] > *)) {
    display: none;
  }

  .no-footer .modal-footer {
    display: none;
  }
`;
