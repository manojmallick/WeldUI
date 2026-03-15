import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Circular gauge / speedometer chart.
 * @element wu-gauge
 */
@customElement('wu-gauge')
export class WuGauge extends LitElement {
  static styles = css`
    :host { display: inline-block; }
    svg { display: block; }
    .track { fill: none; stroke: var(--wu-color-border, #e2e8f0); }
    .fill { fill: none; transition: stroke-dashoffset 0.4s ease; stroke-linecap: round; }
    .value-text { font-family: var(--wu-font-sans, system-ui); font-weight: 700; fill: var(--wu-color-text, #0f172a); }
    .label-text { font-family: var(--wu-font-sans, system-ui); font-size: 10px; fill: var(--wu-color-text-secondary, #64748b); }
  `;

  @property({ type: Number }) value = 0;
  @property({ type: Number }) min = 0;
  @property({ type: Number }) max = 100;
  @property({ type: Number }) size = 120;
  @property() color = 'var(--wu-color-primary, #2563eb)';
  @property() label = '';

  render() {
    const pct = Math.min(1, Math.max(0, (this.value - this.min) / (this.max - this.min)));
    const r = (this.size / 2) - 12;
    const cx = this.size / 2;
    const cy = this.size / 2;
    const arcStart = -210 * (Math.PI / 180);
    const arcEnd = 30 * (Math.PI / 180);
    const fullArc = arcEnd - arcStart;
    const circ = r * Math.abs(fullArc);
    const dash = circ;
    const offset = circ * (1 - pct);
    const x1 = cx + r * Math.cos(arcStart);
    const y1 = cy + r * Math.sin(arcStart);
    const x2 = cx + r * Math.cos(arcEnd);
    const y2 = cy + r * Math.sin(arcEnd);
    const cx2 = cx + r * Math.cos(arcStart + fullArc * pct);
    const cy2 = cy + r * Math.sin(arcStart + fullArc * pct);
    const large = fullArc > Math.PI ? 1 : 0;
    const trackD = `M${x1},${y1} A${r},${r} 0 1,1 ${x2},${y2}`;
    const fillD = `M${x1},${y1} A${r},${r} 0 ${pct > 0.5 ? 1 : 0},1 ${cx2},${cy2}`;
    return html`
      <svg width=${this.size} height=${this.size} viewBox="0 0 ${this.size} ${this.size}">
        <path class="track" d=${trackD} stroke-width="8"></path>
        ${pct > 0 ? svg`<path class="fill" d=${fillD} stroke=${this.color} stroke-width="8"></path>` : ''}
        <text class="value-text" x=${cx} y=${cy + 6} text-anchor="middle" font-size=${this.size * 0.18}>${Math.round(this.value)}</text>
        ${this.label ? svg`<text class="label-text" x=${cx} y=${cy + 20} text-anchor="middle">${this.label}</text>` : ''}
      </svg>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-gauge': WuGauge; } }
