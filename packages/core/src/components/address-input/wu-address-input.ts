import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-address-input.styles.js';

/**
 * Address autocomplete input with geocoding
 *
 * @element wu-address-input
 * @slot - Default slot
 */
@customElement('wu-address-input')
export class WuAddressInput extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-address-input': WuAddressInput; } }
