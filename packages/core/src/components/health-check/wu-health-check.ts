import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-health-check.styles.js';

/**
 * Service health check status dashboard
 *
 * @element wu-health-check
 * @slot - Default slot
 */
@customElement('wu-health-check')
export class WuHealthCheck extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-health-check': WuHealthCheck; } }
