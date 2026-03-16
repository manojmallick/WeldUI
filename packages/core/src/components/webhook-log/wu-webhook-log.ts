import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-webhook-log.styles.js';

/**
 * Real-time webhook request event log viewer
 *
 * @element wu-webhook-log
 * @slot - Default slot
 */
@customElement('wu-webhook-log')
export class WuWebhookLog extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-webhook-log': WuWebhookLog; } }
