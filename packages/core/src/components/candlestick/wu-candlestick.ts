import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-candlestick.styles.js';

export interface CandleData {
  date: string;
  open: number;
  high: number;
  low: number;
  close: number;
}

/**
 * OHLC candlestick financial chart.
 * @element wu-candlestick
 */
@customElement('wu-candlestick')
export class WuCandlestick extends LitElement {
  static styles = styles;
  @property() title = '';
  @property({ attribute: false }) candles: CandleData[] = [];
  @property({ type: Number }) height = 120;

  render() {
    const allVals = this.candles.flatMap(c => [c.high, c.low]);
    const max = Math.max(...allVals, 1);
    const min = Math.min(...allVals, 0);
    const range = max - min || 1;

    const toH = (a: number, b: number) => (Math.abs(a - b) / range * this.height).toFixed(1);

    return html`
      ${this.title ? html`<div class="title">${this.title}</div>` : ''}
      <div class="candles" role="figure" aria-label="${this.title || 'Candlestick chart'}">
        ${this.candles.map(c => {
          const up = c.close >= c.open;
          return html`
            <div class="candle" title="${c.date}: O=${c.open} H=${c.high} L=${c.low} C=${c.close}">
              <div class="wick" style="height:${toH(c.high, Math.max(c.open, c.close))}px"></div>
              <div class="body ${up ? 'up' : 'down'}" style="height:${toH(c.open, c.close)}px"></div>
              <div class="wick" style="height:${toH(Math.min(c.open, c.close), c.low)}px"></div>
            </div>`;
        })}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-candlestick': WuCandlestick; } }
