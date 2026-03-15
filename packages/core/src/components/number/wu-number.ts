import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-number.styles.js';

/**
 * Formats a number with locale-aware formatting (currency, percentage, decimal).
 * @element wu-number
 */
@customElement('wu-number')
export class WuNumber extends LitElement {
  static styles = styles;
  @property({ type: Number }) value = 0;
  @property() locale = navigator.language || 'en-US';
  @property({ reflect: true }) format: 'decimal' | 'currency' | 'percent' | 'compact' = 'decimal';
  @property() currency = 'USD';
  @property({ type: Number }) decimals = 2;

  private _format(): string {
    const opts: Intl.NumberFormatOptions = { maximumFractionDigits: this.decimals };
    if (this.format === 'currency') { opts.style = 'currency'; opts.currency = this.currency; }
    else if (this.format === 'percent') { opts.style = 'percent'; }
    else if (this.format === 'compact') { opts.notation = 'compact'; }
    try { return new Intl.NumberFormat(this.locale, opts).format(this.value); }
    catch { return String(this.value); }
  }

  render() {
    return html`<span class="num" aria-label="${this._format()}">${this._format()}</span>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-number': WuNumber; } }
