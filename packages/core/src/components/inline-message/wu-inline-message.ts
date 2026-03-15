import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-inline-message.styles.js';

/**
 * Field-level inline feedback message for form controls.
 *
 * @element wu-inline-message
 * @slot - Message text
 * @csspart base - The message container
 */
@customElement('wu-inline-message')
export class WuInlineMessage extends LitElement {
  static styles = styles;

  /** Message type */
  @property({ reflect: true })
  variant: 'info' | 'success' | 'warning' | 'error' = 'info';

  override render() {
    return html`
      <div part="base" class="message" role=${this.variant === 'error' ? 'alert' : 'status'}>
        <span class="icon" aria-hidden="true">${this._icon}</span>
        <span class="text"><slot></slot></span>
      </div>
    `;
  }

  private get _icon() {
    switch (this.variant) {
      case 'success': return '✓';
      case 'warning': return '⚠';
      case 'error':   return '✕';
      default:        return 'ℹ';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-inline-message': WuInlineMessage;
  }
}
