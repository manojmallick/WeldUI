import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-funnel-chart.styles.js';

export interface FunnelStage {
  label: string;
  value: number;
  color?: string;
}

/**
 * Conversion funnel chart showing stages and drop-off.
 *
 * @element wu-funnel-chart
 */
@customElement('wu-funnel-chart')
export class WuFunnelChart extends LitElement {
  static styles = styles;

  @property()
  title = '';

  @property({ attribute: false })
  stages: FunnelStage[] = [];

  render() {
    const max = Math.max(...this.stages.map(s => s.value), 1);
    return html`
      <div class="chart" part="chart" role="figure" aria-label="${this.title || 'Funnel chart'}">
        ${this.title ? html`<div class="title">${this.title}</div>` : ''}
        ${this.stages.map(s => html`
          <div class="stage">
            <div class="stage-row">
              <span class="label">${s.label}</span>
              <div class="bar" style="width:${(s.value / max * 100).toFixed(1)}%;${s.color ? `background:${s.color}` : ''}" role="progressbar" aria-valuenow=${s.value} aria-valuemax=${max} aria-label="${s.label}: ${s.value}"></div>
              <span class="value">${s.value.toLocaleString()}</span>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-funnel-chart': WuFunnelChart;
  }
}
