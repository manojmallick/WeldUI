import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-report.styles.js';

/**
 * Structured report document with cover page and sections
 *
 * @element wu-report
 * @slot - Default slot
 */
@customElement('wu-report')
export class WuReport extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-report': WuReport; } }
