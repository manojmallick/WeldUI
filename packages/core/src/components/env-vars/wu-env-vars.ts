import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-env-vars.styles.js';

/**
 * Environment variable manager UI
 *
 * @element wu-env-vars
 * @slot - Default slot
 */
@customElement('wu-env-vars')
export class WuEnvVars extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-env-vars': WuEnvVars; } }
