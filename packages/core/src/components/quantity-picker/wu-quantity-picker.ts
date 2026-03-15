import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-quantity-picker.styles.js';

/**
 * Quantity stepper input with increment/decrement buttons.
 *
 * @element wu-quantity-picker
 * @event wu-change - Fired when value changes, detail: { value: number }
 */
@customElement('wu-quantity-picker')
export class WuQuantityPicker extends LitElement {
  static styles = styles;

  @property({ type: Number }) value = 1;
  @property({ type: Number }) min = 1;
  @property({ type: Number }) max = 99;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private emit() {
    this.dispatchEvent(
      new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }),
    );
  }

  private decrement() {
    if (this.value > this.min) {
      this.value--;
      this.emit();
    }
  }

  private increment() {
    if (this.value < this.max) {
      this.value++;
      this.emit();
    }
  }

  override render() {
    return html`
      <div class="picker" role="group" aria-label="Quantity">
        <button
          class="btn"
          aria-label="Decrease quantity"
          ?disabled=${this.disabled || this.value <= this.min}
          @click=${this.decrement}
        >−</button>
        <input
          class="value"
          type="number"
          .valueAsNumber=${this.value}
          min=${this.min}
          max=${this.max}
          ?disabled=${this.disabled}
          aria-label="Quantity"
          @change=${(e: Event) => {
            const v = parseInt((e.target as HTMLInputElement).value, 10);
            if (!isNaN(v) && v >= this.min && v <= this.max) { this.value = v; this.emit(); }
          }}
        />
        <button
          class="btn"
          aria-label="Increase quantity"
          ?disabled=${this.disabled || this.value >= this.max}
          @click=${this.increment}
        >+</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-quantity-picker': WuQuantityPicker;
  }
}
