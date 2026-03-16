import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-radar-chart.styles.js';

export interface RadarAxis { label: string; value: number; max?: number; }

/**
 * Spider/web radar chart for multi-dimensional data comparison.
 * @element wu-radar-chart
 */
@customElement('wu-radar-chart')
export class WuRadarChart extends LitElement {
  static styles = styles;
  @property() title = '';
  @property({ attribute: false }) axes: RadarAxis[] = [];
  @property({ type: Number }) size = 300;

  render() {
    return html`
      ${this.title ? html`<div class="title">${this.title}</div>` : ''}
      <div class="placeholder" style="width:${this.size}px;height:${this.size}px" role="figure" aria-label="${this.title || 'Radar chart'}">
        Radar chart — ${this.axes.length} axes
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-radar-chart': WuRadarChart; } }
