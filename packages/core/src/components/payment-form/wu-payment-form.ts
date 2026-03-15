import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-payment-form.styles.js';

/**
 * Simplified payment form with card number, expiry, CVC and name.
 * Does not process payments — integrate with a payments SDK.
 *
 * @element wu-payment-form
 * @event wu-submit - detail: { last4: string, expiry: string, name: string }
 */
@customElement('wu-payment-form')
export class WuPaymentForm extends LitElement {
  static styles = styles;

  @property() heading = 'Payment details';
  @property({ type: Boolean, reflect: true }) loading = false;
  @property() error = '';

  @state() private cardNumber = '';
  @state() private expiry = '';
  @state() private cvc = '';
  @state() private name = '';

  private formatCard(v: string) {
    return v.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  }

  private formatExpiry(v: string) {
    const digits = v.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 2) return `${digits.slice(0,2)} / ${digits.slice(2)}`;
    return digits;
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    const digits = this.cardNumber.replace(/\s/g, '');
    if (digits.length < 16 || this.expiry.length < 7 || this.cvc.length < 3 || !this.name) return;
    this.dispatchEvent(
      new CustomEvent('wu-submit', {
        bubbles: true,
        composed: true,
        detail: { last4: digits.slice(-4), expiry: this.expiry, name: this.name },
      }),
    );
  }

  override render() {
    return html`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error ? html`<p class="error-msg" role="alert">${this.error}</p>` : ''}
        <div class="field">
          <label for="card-name">Cardholder name</label>
          <input id="card-name" type="text" autocomplete="cc-name" placeholder="Jane Smith"
            .value=${this.name}
            @input=${(e: Event) => { this.name = (e.target as HTMLInputElement).value; }} />
        </div>
        <div class="field">
          <label for="card-number">Card number</label>
          <input id="card-number" type="text" inputmode="numeric" autocomplete="cc-number" placeholder="1234 5678 9012 3456"
            .value=${this.cardNumber}
            @input=${(e: Event) => { this.cardNumber = this.formatCard((e.target as HTMLInputElement).value); }} />
        </div>
        <div class="field-row">
          <div class="field">
            <label for="expiry">Expiry</label>
            <input id="expiry" type="text" inputmode="numeric" autocomplete="cc-exp" placeholder="MM / YY"
              .value=${this.expiry}
              @input=${(e: Event) => { this.expiry = this.formatExpiry((e.target as HTMLInputElement).value); }} />
          </div>
          <div class="field">
            <label for="cvc">CVC</label>
            <input id="cvc" type="text" inputmode="numeric" autocomplete="cc-csc" placeholder="123" maxlength="4"
              .value=${this.cvc}
              @input=${(e: Event) => { this.cvc = (e.target as HTMLInputElement).value.replace(/\D/g, '').slice(0,4); }} />
          </div>
        </div>
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading ? html`<span class="spinner"></span>` : ''}
          Pay now
        </button>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-payment-form': WuPaymentForm;
  }
}
