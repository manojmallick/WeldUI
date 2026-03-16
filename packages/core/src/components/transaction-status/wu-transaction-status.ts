import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-transaction-status.styles.js';

/**
 * Blockchain transaction status tracker
 *
 * @element wu-transaction-status
 * @slot - Default slot
 */
@customElement('wu-transaction-status')
export class WuTransactionStatus extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-transaction-status': WuTransactionStatus; } }
