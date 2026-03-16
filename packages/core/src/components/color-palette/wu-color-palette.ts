import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-color-palette.styles.js';

/**
 * Displays a row/grid of colour swatches
 *
 * @element wu-color-palette
 * @slot - Default slot
 */
@customElement('wu-color-palette')
export class WuColorPalette extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-color-palette': WuColorPalette; } }
