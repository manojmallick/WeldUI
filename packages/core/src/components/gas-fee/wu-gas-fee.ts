import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-gas-fee.styles.js';

/**
 * Current gas fee estimation display
 *
 * @element wu-gas-fee
 * @slot - Default slot
 */
@customElement('wu-gas-fee')
export class WuGasFee extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-gas-fee': WuGasFee; } }
