import { css } from 'lit';

export const styles = css`
  :host {
    display: block;

    --wu-toast-bg:         var(--wu-color-surface-overlay);
    --wu-toast-border:     var(--wu-color-border);
    --wu-toast-radius:     var(--wu-radius-lg);
    --wu-toast-shadow:     var(--wu-shadow-lg);
    --wu-toast-min-width:  280px;
    --wu-toast-max-width:  400px;
    --wu-toast-padding:    var(--wu-space-4);
  }

  .toast {
    display: flex;
    align-items: flex-start;
    gap: var(--wu-space-3);
    min-width: var(--wu-toast-min-width);
    max-width: var(--wu-toast-max-width);
    background: var(--wu-toast-bg);
    border: 1px solid var(--wu-toast-border);
    border-radius: var(--wu-toast-radius);
    box-shadow: var(--wu-toast-shadow);
    padding: var(--wu-toast-padding);
    font-family: var(--wu-font-sans);
    font-size: var(--wu-text-sm);
    color: var(--wu-color-text);
    animation: slide-in 0.2s var(--wu-ease-default);
  }

  @keyframes slide-in {
    from { opacity: 0; transform: translateX(100%); }
    to   { opacity: 1; transform: translateX(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .toast { animation: none; }
  }

  :host([variant="success"]) .toast { border-left: 4px solid var(--wu-color-success); }
  :host([variant="warning"]) .toast { border-left: 4px solid var(--wu-color-warning); }
  :host([variant="danger"])  .toast { border-left: 4px solid var(--wu-color-danger);  }
  :host([variant="info"])    .toast { border-left: 4px solid var(--wu-color-info);    }

  .icon {
    flex-shrink: 0;
    font-size: 1rem;
    line-height: 1.4;
  }

  :host([variant="success"]) .icon { color: var(--wu-color-success); }
  :host([variant="warning"]) .icon { color: var(--wu-color-warning); }
  :host([variant="danger"])  .icon { color: var(--wu-color-danger);  }
  :host([variant="info"])    .icon { color: var(--wu-color-info);    }

  .content { flex: 1; }

  .title {
    font-weight: var(--wu-font-semibold);
    line-height: var(--wu-leading-tight);
    margin-bottom: var(--wu-space-1);
  }

  .close-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    padding: 0;
    border: none;
    border-radius: var(--wu-radius-sm);
    background: transparent;
    color: var(--wu-color-text-secondary);
    cursor: pointer;
    font-size: 1rem;
    flex-shrink: 0;
    transition: background var(--wu-duration-fast) var(--wu-ease-default);
  }

  .close-btn:hover { background: var(--wu-color-surface); }
  .close-btn:focus-visible { outline: none; box-shadow: var(--wu-focus-ring); }
`;

export const providerStyles = css`
  :host {
    position: fixed;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    gap: var(--wu-space-3);
    padding: var(--wu-space-4);
    max-width: calc(400px + 2 * var(--wu-space-4));
  }

  :host([position="top-right"])    { top: 0; right: 0; align-items: flex-end; }
  :host([position="top-left"])     { top: 0; left: 0;  align-items: flex-start; }
  :host([position="top-center"])   { top: 0; left: 50%; transform: translateX(-50%); align-items: center; }
  :host([position="bottom-right"]) { bottom: 0; right: 0; align-items: flex-end; flex-direction: column-reverse; }
  :host([position="bottom-left"])  { bottom: 0; left: 0;  align-items: flex-start; flex-direction: column-reverse; }
  :host([position="bottom-center"]){ bottom: 0; left: 50%; transform: translateX(-50%); align-items: center; flex-direction: column-reverse; }
`;
