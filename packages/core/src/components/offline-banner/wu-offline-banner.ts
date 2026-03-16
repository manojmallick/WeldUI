import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-offline-banner.styles.js';

/**
 * Banner displayed when user goes offline
 *
 * @element wu-offline-banner
 * @slot - Default slot
 */
@customElement('wu-offline-banner')
export class WuOfflineBanner extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-offline-banner': WuOfflineBanner; } }
