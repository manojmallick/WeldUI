import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-address-display.styles.js';

/**
 * Shortened blockchain address display with copy
 *
 * @element wu-address-display
 * @slot - Default slot
 */
@customElement('wu-address-display')
export class WuAddressDisplay extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-address-display': WuAddressDisplay; } }
