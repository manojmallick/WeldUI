import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-wishlist-button.styles.js';

/**
 * A heart-shaped toggle button for adding/removing items from a wishlist.
 *
 * @element wu-wishlist-button
 * @event wu-toggle - detail: { active: boolean }
 */
@customElement('wu-wishlist-button')
export class WuWishlistButton extends LitElement {
  static styles = styles;

  @property({ type: Boolean, reflect: true }) active = false;
  @property({ type: Number }) count = 0;

  private handleClick() {
    this.active = !this.active;
    this.dispatchEvent(
      new CustomEvent('wu-toggle', {
        bubbles: true,
        composed: true,
        detail: { active: this.active },
      }),
    );
  }

  override render() {
    return html`
      <button
        class="btn"
        type="button"
        aria-label=${this.active ? 'Remove from wishlist' : 'Add to wishlist'}
        aria-pressed=${String(this.active)}
        @click=${this.handleClick}
      >
        <svg class="heart" viewBox="0 0 24 24" fill="${this.active ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        ${this.count > 0 ? html`<span class="count">${this.count}</span>` : ''}
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-wishlist-button': WuWishlistButton;
  }
}
