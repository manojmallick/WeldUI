import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-rating.styles.js';

/**
 * A star rating input/display component.
 * @element wu-rating
 * @event wu-change - Fires on rating change, detail: { value: number }
 */
@customElement('wu-rating')
export class WuRating extends LitElement {
  static styles = styles;
  @property({ type: Number }) value = 0;
  @property({ type: Number }) max = 5;
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) showLabel = false;
  @state() private _hovered = 0;

  private _setHover(n: number) { if (!this.readonly) this._hovered = n; }
  private _clearHover() { this._hovered = 0; }
  private _select(n: number) {
    if (this.readonly || this.disabled) return;
    this.value = n;
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: n } }));
  }

  render() {
    return html`
      <div class="rating" role="radiogroup" aria-label="Rating">
        ${Array.from({ length: this.max }, (_, i) => i + 1).map(n => html`
          <button
            class="star ${n <= (this._hovered || this.value) ? 'filled' : ''} ${this._hovered && n <= this._hovered ? 'hovered' : ''}"
            @click=${() => this._select(n)}
            @mouseenter=${() => this._setHover(n)}
            @mouseleave=${this._clearHover}
            aria-label="Rate ${n} out of ${this.max}"
            aria-pressed=${n === this.value}
          >★</button>
        `)}
        ${this.showLabel ? html`<span class="label">${this.value}/${this.max}</span>` : ''}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-rating': WuRating; } }
