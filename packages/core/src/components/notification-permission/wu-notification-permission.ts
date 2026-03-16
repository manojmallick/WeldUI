import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-notification-permission.styles.js';

/**
 * Request browser notification permission UI
 *
 * @element wu-notification-permission
 * @slot - Default slot
 */
@customElement('wu-notification-permission')
export class WuNotificationPermission extends LitElement {
  static styles = styles;

  @property() label = '';
  @property() value = '';

  render() {
    return html`
      <div class="container">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div class="content">
          ${this.value || html`<slot></slot>`}
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-notification-permission': WuNotificationPermission; } }
