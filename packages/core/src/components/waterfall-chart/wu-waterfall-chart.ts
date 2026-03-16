import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-waterfall-chart.styles.js';

export interface WaterfallItem {
  label: string;
  value: number;
  total?: boolean;
}

/**
 * Waterfall / bridge chart showing cumulative value changes.
 * @element wu-waterfall-chart
 */
@customElement('wu-waterfall-chart')
export class WuWaterfallChart extends LitElement {
  static styles = styles;
  @property() title = '';
  @property({ attribute: false }) items: WaterfallItem[] = [];
  @property({ type: Number }) height = 120;

  render() {
    const max = Math.max(...this.items.map(i => Math.abs(i.value)), 1);

    return html`
      ${this.title ? html`<div class="title">${this.title}</div>` : ''}
      <div class="bars" role="figure" aria-label="${this.title || 'Waterfall chart'}"
           style="height:${this.height}px">
        ${this.items.map(item => {
          const h = Math.round((Math.abs(item.value) / max) * (this.height - 20));
          const cls = item.total ? 'total' : item.value >= 0 ? 'positive' : 'negative';
          return html`
            <div class="bar-wrap">
              <div class="bar-value">${item.value > 0 ? '+' : ''}${item.value}</div>
              <div class="bar ${cls}" style="height:${h}px"></div>
              <div class="bar-label">${item.label}</div>
            </div>`;
        })}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-waterfall-chart': WuWaterfallChart; } }
