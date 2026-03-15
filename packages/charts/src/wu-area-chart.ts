import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * SVG area chart (filled line chart).
 * @element wu-area-chart
 */
@customElement('wu-area-chart')
export class WuAreaChart extends LitElement {
  static styles = css`
    :host { display: block; width: 100%; }
    svg { width: 100%; overflow: visible; }
    .axis-label { font-family: var(--wu-font-sans, system-ui); font-size: 11px; fill: var(--wu-color-text-secondary, #64748b); }
  `;

  @property({ type: Array }) data: number[] = [];
  @property({ type: Array }) labels: string[] = [];
  @property({ type: Number }) height = 200;
  @property() color = 'var(--wu-color-primary, #2563eb)';

  render() {
    const data = this.data;
    if (data.length < 2) return html`<svg height=${this.height}></svg>`;
    const max = Math.max(...data, 1);
    const min = Math.min(...data, 0);
    const range = max - min || 1;
    const pad = 24;
    const chartH = this.height - pad;
    const W = 100;
    const step = W / (data.length - 1);
    const pts = data.map((v, i) => [i * step, chartH - ((v - min) / range) * chartH] as [number, number]);
    const line = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`).join(' ');
    const area = `${line} L${pts[pts.length - 1][0]},${chartH} L0,${chartH} Z`;
    return html`
      <svg viewBox="0 0 100 ${this.height}" preserveAspectRatio="none" height=${this.height}>
        <path d=${area} fill=${this.color} fill-opacity="0.15"></path>
        <path d=${line} stroke=${this.color} stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
        ${pts.map((p, i) => this.labels[i] ? svg`<text class="axis-label" x=${p[0]} y=${this.height - 2} text-anchor="middle">${this.labels[i]}</text>` : '')}
      </svg>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-area-chart': WuAreaChart; } }
