import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-slider.styles.js';

/**
 * A range slider for selecting numeric values.
 *
 * @element wu-slider
 *
 * @event wu-change - Emitted on value change. Detail: { value: number }
 * @event wu-input - Emitted on every input (during drag). Detail: { value: number }
 *
 * @csspart base - The input range element
 *
 * @cssprop --wu-slider-track-height - Height of the track
 * @cssprop --wu-slider-thumb-size - Size of the thumb
 * @cssprop --wu-slider-thumb-color - Colour of the thumb
 * @cssprop --wu-slider-track-color - Colour of the unfilled track
 * @cssprop --wu-slider-fill-color - Colour of the filled track
 *
 * @example
 * ```html
 * <wu-slider label="Volume" min="0" max="100" value="50" step="1"></wu-slider>
 * ```
 */
@customElement('wu-slider')
export class WuSlider extends LitElement {
  static styles = styles;

  /** Slider label */
  @property()
  label = '';

  /** Current value */
  @property({ type: Number })
  value = 0;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Step increment */
  @property({ type: Number })
  step = 1;

  /** Show current value next to label */
  @property({ type: Boolean, attribute: 'show-value' })
  showValue = false;

  /** Hint text below the slider */
  @property()
  hint = '';

  /** Show tick marks at min/max (and intermediate marks if ticks provided) */
  @property({ type: Array })
  ticks: number[] = [];

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  @state()
  private _currentValue: number = this.value;

  override updated(changed: Map<string, unknown>) {
    if (changed.has('value')) {
      this._currentValue = this.value;
    }
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this._currentValue = Number(input.value);
    this.dispatchEvent(
      new CustomEvent('wu-input', {
        bubbles: true,
        composed: true,
        detail: { value: this._currentValue },
      })
    );
  }

  private _handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.value = Number(input.value);
    this._currentValue = this.value;
    this.dispatchEvent(
      new CustomEvent('wu-change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  override render() {
    const pct = ((this._currentValue - this.min) / (this.max - this.min)) * 100;
    return html`
      ${this.label
        ? html`
          <div class="label-row">
            <label>${this.label}</label>
            ${this.showValue ? html`<span class="value">${this._currentValue}</span>` : ''}
          </div>
        `
        : ''}
      <div class="track-container">
        <input
          part="base"
          type="range"
          min=${this.min}
          max=${this.max}
          step=${this.step}
          .value=${String(this._currentValue)}
          ?disabled=${this.disabled}
          aria-label=${ifDefined(this.label || undefined)}
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this._currentValue}
          style="--_pct:${pct}%"
          @input=${this._handleInput}
          @change=${this._handleChange}
        />
      </div>
      ${this.ticks.length
        ? html`
          <div class="tick-marks" aria-hidden="true">
            ${this.ticks.map((t) => html`<span class="tick">${t}</span>`)}
          </div>
        `
        : ''}
      ${this.hint ? html`<span class="hint">${this.hint}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-slider': WuSlider;
  }
}
