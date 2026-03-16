import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-lottie.styles.js';

/**
 * Lottie animation player placeholder
 *
 * @element wu-lottie
 * @slot - Default slot
 */
@customElement('wu-lottie')
export class WuLottie extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-lottie': WuLottie; } }
