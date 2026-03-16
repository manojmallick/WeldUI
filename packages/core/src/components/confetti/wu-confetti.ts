import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-confetti.styles.js';

/**
 * Confetti celebration animation burst
 *
 * @element wu-confetti
 * @slot - Default slot
 */
@customElement('wu-confetti')
export class WuConfetti extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-confetti': WuConfetti; } }
