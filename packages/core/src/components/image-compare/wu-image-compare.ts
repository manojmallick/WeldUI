import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-image-compare.styles.js';

/**
 * Before/after image slider comparison
 *
 * @element wu-image-compare
 * @slot - Default slot
 */
@customElement('wu-image-compare')
export class WuImageCompare extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-image-compare': WuImageCompare; } }
