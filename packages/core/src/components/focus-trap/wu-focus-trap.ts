import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-focus-trap.styles.js';

/**
 * Trap focus within a container for modal patterns
 *
 * @element wu-focus-trap
 * @slot - Default slot
 */
@customElement('wu-focus-trap')
export class WuFocusTrap extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-focus-trap': WuFocusTrap; } }
