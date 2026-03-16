import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-keyboard-focus.styles.js';

/**
 * Visible focus ring only during keyboard navigation
 *
 * @element wu-keyboard-focus
 * @slot - Default slot
 */
@customElement('wu-keyboard-focus')
export class WuKeyboardFocus extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-keyboard-focus': WuKeyboardFocus; } }
