import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-install-prompt.styles.js';

/**
 * PWA install prompt banner and button
 *
 * @element wu-install-prompt
 * @slot - Default slot
 */
@customElement('wu-install-prompt')
export class WuInstallPrompt extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-install-prompt': WuInstallPrompt; } }
