import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-product-card.styles.js';

/**
 * Product listing card with image, title, price, and add-to-cart action.
 *
 * @element wu-product-card
 * @event wu-add-to-cart - Fired when add-to-cart is clicked, detail: { id: string }
 */
@customElement('wu-product-card')
export class WuProductCard extends LitElement {
  static styles = styles;

  @property() productId = '';
  @property() name = '';
  @property() image = '';
  @property() price = '';
  @property({ attribute: 'original-price' }) originalPrice = '';
  @property() badge = '';
  @property({ type: Boolean, reflect: true, attribute: 'sold-out' }) soldOut = false;

  override render() {
    return html`
      <article class="card" aria-label="${this.name}">
        <div class="image-wrap">
          ${this.image
            ? html`<img src="${this.image}" alt="${this.name}" class="image" loading="lazy" />`
            : html`<div class="image-placeholder" aria-hidden="true"></div>`}
          ${this.badge ? html`<span class="badge">${this.badge}</span>` : ''}
          ${this.soldOut ? html`<span class="sold-out-overlay">Sold out</span>` : ''}
        </div>
        <div class="body">
          <h3 class="name">${this.name}</h3>
          <div class="prices">
            <span class="price">${this.price}</span>
            ${this.originalPrice ? html`<span class="original-price">${this.originalPrice}</span>` : ''}
          </div>
          <button
            class="add-btn"
            ?disabled=${this.soldOut}
            @click=${() =>
              this.dispatchEvent(
                new CustomEvent('wu-add-to-cart', {
                  bubbles: true,
                  composed: true,
                  detail: { id: this.productId },
                }),
              )}
          >
            ${this.soldOut ? 'Sold Out' : 'Add to cart'}
          </button>
        </div>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-product-card': WuProductCard;
  }
}
