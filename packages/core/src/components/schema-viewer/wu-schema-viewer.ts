import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-schema-viewer.styles.js';

/**
 * JSON Schema and TypeScript type tree viewer
 *
 * @element wu-schema-viewer
 * @slot - Default slot
 */
@customElement('wu-schema-viewer')
export class WuSchemaViewer extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-schema-viewer': WuSchemaViewer; } }
