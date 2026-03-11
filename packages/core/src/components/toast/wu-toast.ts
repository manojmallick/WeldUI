import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles, providerStyles } from './wu-toast.styles.js';

const ICONS: Record<string, string> = {
  info: 'ℹ', success: '✓', warning: '⚠', danger: '✕', default: '•',
};

/**
 * A single toast notification.
 *
 * @element wu-toast
 *
 * @slot - Toast message content
 * @slot action - Optional action button/link
 *
 * @event wu-close - Emitted when the toast is dismissed
 *
 * @cssprop --wu-toast-bg - Toast background colour
 * @cssprop --wu-toast-min-width - Minimum toast width
 */
@customElement('wu-toast')
export class WuToast extends LitElement {
  static styles = styles;

  /** Visual severity variant */
  @property({ reflect: true })
  variant: 'default' | 'info' | 'success' | 'warning' | 'danger' = 'default';

  /** Toast heading */
  @property()
  heading = '';

  /** Auto-dismiss delay in ms (0 = no auto-dismiss) */
  @property({ type: Number })
  duration = 5000;

  override connectedCallback(): void {
    super.connectedCallback();
    if (this.duration > 0) {
      setTimeout(() => this._dismiss('auto'), this.duration);
    }
  }

  private _dismiss(reason: 'auto' | 'button'): void {
    this.dispatchEvent(new CustomEvent('wu-close', { bubbles: true, composed: true, detail: { reason } }));
    this.remove();
  }

  render() {
    return html`
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <span class="icon" aria-hidden="true">${ICONS[this.variant]}</span>
        <div class="content">
          ${this.heading ? html`<div class="title">${this.heading}</div>` : ''}
          <slot></slot>
          <slot name="action"></slot>
        </div>
        <button class="close-btn" aria-label="Dismiss notification" @click=${() => this._dismiss('button')}>✕</button>
      </div>
    `;
  }
}

/**
 * A container that manages toast stack position and dismissal.
 *
 * @element wu-toast-provider
 *
 * @method toast(options) - Imperatively add a toast
 */
@customElement('wu-toast-provider')
export class WuToastProvider extends LitElement {
  static styles = providerStyles;

  /** Screen position for the toast stack */
  @property({ reflect: true })
  position:
    | 'top-right' | 'top-left' | 'top-center'
    | 'bottom-right' | 'bottom-left' | 'bottom-center' = 'top-right';

  /**
   * Imperatively add a toast to the stack.
   * @example provider.toast({ heading: 'Saved', variant: 'success', duration: 3000 })
   */
  toast(options: {
    message?: string;
    heading?: string;
    variant?: WuToast['variant'];
    duration?: number;
  }): WuToast {
    const t = Object.assign(document.createElement('wu-toast') as WuToast, {
      heading: options.heading ?? '',
      variant: options.variant ?? 'default',
      duration: options.duration ?? 5000,
    });
    if (options.message) t.textContent = options.message;
    this.shadowRoot!.querySelector('slot')!.parentElement!.appendChild(t);
    return t;
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-toast': WuToast;
    'wu-toast-provider': WuToastProvider;
  }
}
