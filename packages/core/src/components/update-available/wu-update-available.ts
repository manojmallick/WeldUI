import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-update-available.styles.js';

/**
 * PWA service worker update notification banner
 *
 * @element wu-update-available
 * @slot - Default slot
 */
@customElement('wu-update-available')
export class WuUpdateAvailable extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-update-available': WuUpdateAvailable; } }
