import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-pdf-viewer.styles.js';

/**
 * PDF document viewer placeholder
 *
 * @element wu-pdf-viewer
 * @slot - Default slot
 */
@customElement('wu-pdf-viewer')
export class WuPdfViewer extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-pdf-viewer': WuPdfViewer; } }
