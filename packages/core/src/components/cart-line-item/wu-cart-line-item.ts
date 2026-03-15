import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-cart-line-item.styles.js';

/**
 * A single line item in a shopping cart.
 *
 * @element wu-cart-line-item
 * @event wu-remove - Fired when remove is clicked, detail: { id: string }
 * @event wu-quantity-change - Fired when quantity changes, detail: { id: string, quantity: number }
 */
@customElement('wu-cart-line-item')
export class WuCartLineItem extends LitElement {
  static styles = styles;

  @property() itemId = '';
  @property() name = '';
  @property() image = '';
  @property() price = '';
  @property() variant = '';
  @property({ type: Number }) quantity = 1;

  override render() {
    return html`
      <div class="line-item">
        <div class="image-wrap">
          ${this.image
            ? html`<img src="${this.image}" alt="${this.name}" class="img" loading="lazy" />`
            : html`<div class="img-placeholder"></div>`}
        </div>
        <div class="details">
          <span class="name">${this.name}</span>
          ${this.variant ? html`<span class="variant">${this.variant}</span>` : ''}
          <div class="bottom-row">
            <div class="qty-row">
              <button class="qty-btn" aria-label="Decrease quantity"
                @click=${() => {
                  if (this.quantity > 1) {
                    this.quantity--;
                    this._emitQty();
                  }
                }}>−</button>
              <span class="qty">${this.quantity}</span>
              <button class="qty-btn" aria-label="Increase quantity"
                @click=${() => { this.quantity++; this._emitQty(); }}>+</button>
            </div>
            <span class="price">${this.price}</span>
          </div>
        </div>
        <button class="remove-btn" aria-label="Remove ${this.name}"
          @click=${() => this.dispatchEvent(new CustomEvent('wu-remove', { bubbles: true, composed: true, detail: { id: this.itemId } }))}>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    `;
  }

  private _emitQty() {
    this.dispatchEvent(new CustomEvent('wu-quantity-change', { bubbles: true, composed: true, detail: { id: this.itemId, quantity: this.quantity } }));
  }
}

// required for repeat usage elsewhere — keep import clean
void repeat;

declare global {
  interface HTMLElementTagNameMap {
    'wu-cart-line-item': WuCartLineItem;
  }
}
