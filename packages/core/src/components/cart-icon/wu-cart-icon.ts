import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-cart-icon.styles.js';

/**
 * Shopping cart icon button with item count badge.
 *
 * @element wu-cart-icon
 * @event wu-click - Fired when the cart icon is clicked
 */
@customElement('wu-cart-icon')
export class WuCartIcon extends LitElement {
  static styles = styles;

  /** Number of items in cart */
  @property({ type: Number }) count = 0;

  /** Accessible label */
  @property() label = 'Shopping cart';

  override render() {
    return html`
      <button
        class="cart-btn"
        aria-label="${this.label}${this.count > 0 ? `, ${this.count} items` : ''}"
        @click=${() => this.dispatchEvent(new CustomEvent('wu-click', { bubbles: true, composed: true }))}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        ${this.count > 0
          ? html`<span class="badge" aria-hidden="true">${this.count > 99 ? '99+' : this.count}</span>`
          : ''}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-cart-icon': WuCartIcon;
  }
}
