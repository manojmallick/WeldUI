import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-announce.styles.js';

/**
 * Screen reader live region announcer
 *
 * @element wu-announce
 * @slot - Default slot
 */
@customElement('wu-announce')
export class WuAnnounce extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-announce': WuAnnounce; } }
