import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-progress.styles.js';

/**
 * A progress bar for determinate or indeterminate loading states.
 *
 * @element wu-progress
 *
 * @cssprop --wu-progress-height - Bar height
 * @cssprop --wu-progress-track - Track background colour
 * @cssprop --wu-progress-fill - Fill/active colour
 */
@customElement('wu-progress')
export class WuProgress extends LitElement {
  static styles = styles;

  /** Current value (0–100) */
  @property({ type: Number })
  value = 0;

  /** Minimum value */
  @property({ type: Number })
  min = 0;

  /** Maximum value */
  @property({ type: Number })
  max = 100;

  /** Indeterminate state — animates continuously */
  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  /** Show percentage label */
  @property({ type: Boolean })
  showLabel = false;

  /** Visual size */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Optional label text */
  @property()
  label = '';

  private get _pct(): number {
    if (this.indeterminate) return 0;
    const clamped = Math.min(Math.max(this.value, this.min), this.max);
    return Math.round(((clamped - this.min) / (this.max - this.min)) * 100);
  }

  render() {
    return html`
      <div class="wrapper">
        ${(this.label || this.showLabel) ? html`
          <div class="labels">
            <span>${this.label}</span>
            ${this.showLabel && !this.indeterminate ? html`<span>${this._pct}%</span>` : ''}
          </div>
        ` : ''}
        <div
          class="track"
          role="progressbar"
          aria-valuemin=${this.min}
          aria-valuemax=${this.max}
          aria-valuenow=${this.indeterminate ? 'undefined' : this._pct}
          aria-label=${this.label || 'Progress'}
        >
          <div class="fill" style="width:${this._pct}%"></div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-progress': WuProgress;
  }
}
