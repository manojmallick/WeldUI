import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-image-crop.styles.js';

/**
 * Image cropper with aspect ratio control
 *
 * @element wu-image-crop
 * @slot - Default slot
 */
@customElement('wu-image-crop')
export class WuImageCrop extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-image-crop': WuImageCrop; } }
