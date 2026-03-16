import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-sr-only.styles.js';

/**
 * Visually hidden content visible only to screen readers
 *
 * @element wu-sr-only
 * @slot - Default slot
 */
@customElement('wu-sr-only')
export class WuSrOnly extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-sr-only': WuSrOnly; } }
