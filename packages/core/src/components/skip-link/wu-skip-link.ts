import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-skip-link.styles.js';

/**
 * Accessible skip navigation link for keyboard users
 *
 * @element wu-skip-link
 * @slot - Default slot
 */
@customElement('wu-skip-link')
export class WuSkipLink extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-skip-link': WuSkipLink; } }
