import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-price.styles.js';

/**
 * Formats a monetary value with currency symbol/code, optional original price and badge.
 *
 * @element wu-price
 */
@customElement('wu-price')
export class WuPrice extends LitElement {
  static styles = styles;

  @property({ type: Number }) amount = 0;
  @property({ type: Number, attribute: 'original-amount' }) originalAmount: number | null = null;
  @property() currency = 'USD';
  @property() locale = 'en-US';
  @property() badge = '';
  @property({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  private format(n: number) {
    return new Intl.NumberFormat(this.locale, { style: 'currency', currency: this.currency }).format(n);
  }

  override render() {
    const hasDiscount = this.originalAmount !== null && this.originalAmount > this.amount;
    return html`
      <span class="price" aria-label="${this.format(this.amount)}${hasDiscount ? `, was ${this.format(this.originalAmount!)}` : ''}">
        ${this.badge ? html`<span class="badge">${this.badge}</span>` : ''}
        <span class="current">${this.format(this.amount)}</span>
        ${hasDiscount ? html`<span class="original" aria-hidden="true">${this.format(this.originalAmount!)}</span>` : ''}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-price': WuPrice;
  }
}
