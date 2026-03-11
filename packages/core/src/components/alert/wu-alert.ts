import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-alert.styles.js';

const ICONS: Record<string, string> = {
  info: 'ℹ',
  success: '✓',
  warning: '⚠',
  danger: '✕',
  neutral: '•',
};

/**
 * An alert component for inline status messages.
 *
 * @element wu-alert
 *
 * @slot - Alert body/description text
 * @slot title - Bold title at the top of the alert
 * @slot icon - Custom icon (replaces default variant icon)
 *
 * @event wu-dismiss - Emitted when the dismiss button is clicked
 *
 * @csspart base - The alert container
 * @csspart icon - The icon area
 * @csspart content - The text content area
 *
 * @cssprop --wu-alert-bg - Alert background colour
 * @cssprop --wu-alert-border - Alert border / accent colour
 * @cssprop --wu-alert-color - Text and icon colour
 */
@customElement('wu-alert')
export class WuAlert extends LitElement {
  static styles = styles;

  /** Visual severity variant */
  @property({ reflect: true })
  variant: 'info' | 'success' | 'warning' | 'danger' | 'neutral' = 'info';

  /** Show a dismiss (×) button */
  @property({ type: Boolean })
  dismissible = false;

  private _handleDismiss(): void {
    this.dispatchEvent(new CustomEvent('wu-dismiss', { bubbles: true, composed: true }));
    this.remove();
  }

  render() {
    return html`
      <div part="base" class="alert" role="alert" aria-live="polite">
        <span part="icon" class="icon" aria-hidden="true">
          <slot name="icon">${ICONS[this.variant]}</slot>
        </span>
        <div part="content" class="content">
          <slot name="title"></slot>
          <slot></slot>
        </div>
        ${this.dismissible ? html`
          <button class="dismiss-btn" aria-label="Dismiss" @click=${this._handleDismiss}>✕</button>
        ` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-alert': WuAlert;
  }
}
