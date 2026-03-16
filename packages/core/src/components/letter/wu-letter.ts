import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-letter.styles.js';

/**
 * Formal letter template with header body signature
 *
 * @element wu-letter
 * @slot - Default slot
 */
@customElement('wu-letter')
export class WuLetter extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-letter': WuLetter; } }
