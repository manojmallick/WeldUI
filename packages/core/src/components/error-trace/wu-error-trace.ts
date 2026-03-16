import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-error-trace.styles.js';

/**
 * Error stack trace viewer with source mapping
 *
 * @element wu-error-trace
 * @slot - Default slot
 */
@customElement('wu-error-trace')
export class WuErrorTrace extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-error-trace': WuErrorTrace; } }
