import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-certificate.styles.js';

/**
 * Certificate of achievement or completion template
 *
 * @element wu-certificate
 * @slot - Default slot
 */
@customElement('wu-certificate')
export class WuCertificate extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-certificate': WuCertificate; } }
