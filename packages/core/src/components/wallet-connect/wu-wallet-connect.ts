import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-wallet-connect.styles.js';

/**
 * Web3 wallet connection button and status
 *
 * @element wu-wallet-connect
 * @slot - Default slot
 */
@customElement('wu-wallet-connect')
export class WuWalletConnect extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-wallet-connect': WuWalletConnect; } }
