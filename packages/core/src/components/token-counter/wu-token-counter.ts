import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-token-counter.styles.js';

/**
 * Real-time token count display with a limit progress bar.
 *
 * @element wu-token-counter
 */
@customElement('wu-token-counter')
export class WuTokenCounter extends LitElement {
  static styles = styles;

  /** Current token count */
  @property({ type: Number })
  count = 0;

  /** Maximum token limit */
  @property({ type: Number })
  limit = 4096;

  /** Fraction at which to show "near-limit" warning (0–1) */
  @property({ type: Number, attribute: 'warn-at' })
  warnAt = 0.8;

  get pct() {
    return Math.min(1, this.count / this.limit);
  }

  get overLimit() {
    return this.count > this.limit;
  }

  get nearLimit() {
    return !this.overLimit && this.pct >= this.warnAt;
  }

  updated() {
    this.toggleAttribute('over-limit', this.overLimit);
    this.toggleAttribute('near-limit', this.nearLimit);
  }

  render() {
    return html`
      <div class="label">
        <span>Tokens</span>
        <span class="count" aria-live="polite">${this.count.toLocaleString()} / ${this.limit.toLocaleString()}</span>
      </div>
      <div class="bar-track" role="progressbar" aria-valuenow=${this.count} aria-valuemax=${this.limit} aria-valuemin="0">
        <div class="bar-fill" style="width:${(this.pct * 100).toFixed(1)}%"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-token-counter': WuTokenCounter;
  }
}
