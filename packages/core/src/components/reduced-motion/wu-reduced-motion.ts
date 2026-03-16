import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-reduced-motion.styles.js';

/**
 * Disable animations when prefers-reduced-motion is set
 *
 * @element wu-reduced-motion
 * @slot - Default slot
 */
@customElement('wu-reduced-motion')
export class WuReducedMotion extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-reduced-motion': WuReducedMotion; } }
