import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-color-swatch.styles.js';

/**
 * Displays a colour swatch with label and value
 *
 * @element wu-color-swatch
 * @slot - Default slot
 */
@customElement('wu-color-swatch')
export class WuColorSwatch extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-color-swatch': WuColorSwatch; } }
