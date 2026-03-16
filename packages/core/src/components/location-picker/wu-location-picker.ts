import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-location-picker.styles.js';

/**
 * Click-to-pick location on a map
 *
 * @element wu-location-picker
 * @slot - Default slot
 */
@customElement('wu-location-picker')
export class WuLocationPicker extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-location-picker': WuLocationPicker; } }
