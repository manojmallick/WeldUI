import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-invoice.styles.js';

/**
 * Invoice document layout for printing and PDF export
 *
 * @element wu-invoice
 * @slot - Default slot
 */
@customElement('wu-invoice')
export class WuInvoice extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-invoice': WuInvoice; } }
