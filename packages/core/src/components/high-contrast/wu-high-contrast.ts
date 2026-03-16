import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-high-contrast.styles.js';

/**
 * High contrast mode wrapper and toggle
 *
 * @element wu-high-contrast
 * @slot - Default slot
 */
@customElement('wu-high-contrast')
export class WuHighContrast extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-high-contrast': WuHighContrast; } }
