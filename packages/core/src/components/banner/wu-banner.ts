import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-banner.styles.js';

/**
 * Full-width top-of-page announcement banner (promotions, cookie notices, system alerts).
 *
 * @element wu-banner
 * @slot - Banner message content
 * @slot actions - Action buttons/links
 * @event wu-dismiss - Fired when the banner is dismissed
 * @csspart base - The banner container
 * @csspart close - The dismiss button
 */
@customElement('wu-banner')
export class WuBanner extends LitElement {
  static styles = styles;

  /** Visual variant */
  @property({ reflect: true })
  variant: 'info' | 'success' | 'warning' | 'danger' = 'info';

  /** Show a dismiss button */
  @property({ type: Boolean, reflect: true }) dismissible = false;

  /** Stick to the top of the viewport */
  @property({ type: Boolean, reflect: true }) sticky = false;

  @state() private dismissed = false;

  private handleDismiss() {
    this.dismissed = true;
    this.dispatchEvent(new CustomEvent('wu-dismiss', { bubbles: true, composed: true }));
  }

  override render() {
    if (this.dismissed) return html``;
    return html`
      <div part="base" class="banner" role="status" aria-live="polite">
        <div class="content">
          <slot></slot>
        </div>
        <div class="actions">
          <slot name="actions"></slot>
        </div>
        ${this.dismissible
          ? html`
              <button
                part="close"
                class="close"
                aria-label="Dismiss"
                @click=${this.handleDismiss}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-banner': WuBanner;
  }
}
