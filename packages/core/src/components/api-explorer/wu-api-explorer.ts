import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-api-explorer.styles.js';

/**
 * Interactive REST API explorer Swagger-like UI
 *
 * @element wu-api-explorer
 * @slot - Default slot
 */
@customElement('wu-api-explorer')
export class WuApiExplorer extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-api-explorer': WuApiExplorer; } }
