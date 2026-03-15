import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-meter.styles.js';

/**
 * A measurement bar (like the native `<meter>` element) with a label and value display.
 *
 * @element wu-meter
 *
 * @cssprop --wu-meter-fill-bg  - Fill colour (overridden by variant)
 * @cssprop --wu-meter-track-bg - Track background colour
 * @cssprop --wu-meter-height   - Bar height
 *
 * @example
 * ```html
 * <wu-meter label="Disk usage" value="72" max="100" unit="%"></wu-meter>
 * ```
 */
@customElement('wu-meter')
export class WuMeter extends LitElement {
  static styles = styles;

  /** Current value */
  @property({ type: Number })
  value = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Label text */
  @property()
  label?: string;

  /** Unit suffix (e.g. '%', 'GB') */
  @property()
  unit = '';

  /** Visual variant */
  @property({ reflect: true })
  variant: 'default' | 'success' | 'warning' | 'danger' = 'default';

  private get _pct() {
    const range = this.max - this.min;
    if (range <= 0) return 0;
    return Math.min(100, Math.max(0, ((this.value - this.min) / range) * 100));
  }

  override render() {
    const pct = this._pct;
    return html`
      <div class="wrapper">
        ${this.label || this.unit ? html`
          <div class="labels">
            <span>${this.label ?? ''}</span>
            <span>${this.value}${this.unit} / ${this.max}${this.unit}</span>
          </div>
        ` : ''}
        <div
          class="track"
          role="meter"
          aria-valuenow=${this.value}
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-label=${this.label ?? 'meter'}
        >
          <div class="fill" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-meter': WuMeter;
  }
}
