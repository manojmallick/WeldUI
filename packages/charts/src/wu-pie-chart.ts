import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface PieSlice { label: string; value: number; color?: string; }

const DEFAULT_COLORS = ['#2563eb','#16a34a','#d97706','#dc2626','#7c3aed','#0891b2'];

/**
 * SVG pie / donut chart.
 * @element wu-pie-chart
 * @event wu-slice-click - Fires on slice click, detail: { index: number, label: string, value: number }
 */
@customElement('wu-pie-chart')
export class WuPieChart extends LitElement {
  static styles = css`
    :host { display: block; }
    svg { display: block; margin: 0 auto; }
    .slice { cursor: pointer; transition: opacity 0.15s; }
    .slice:hover { opacity: 0.85; }
    .legend { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 8px; font-family: var(--wu-font-sans, system-ui); font-size: 12px; }
    .dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
    .legend-item { display: flex; align-items: center; gap: 4px; }
  `;

  @property({ type: Array }) slices: PieSlice[] = [];
  @property({ type: Number }) size = 160;
  @property({ type: Number }) donut = 0;
  @property({ type: Boolean }) legend = false;

  private _click(i: number) {
    const s = this.slices[i];
    this.dispatchEvent(new CustomEvent('wu-slice-click', { bubbles: true, composed: true, detail: { index: i, label: s.label, value: s.value } }));
  }

  render() {
    const slices = this.slices;
    if (!slices.length) return html``;
    const total = slices.reduce((a, s) => a + s.value, 0);
    const r = this.size / 2;
    const cx = r;
    const cy = r;
    const inner = this.donut;
    let angle = -Math.PI / 2;
    const paths = slices.map((s, i) => {
      const sweep = (s.value / total) * Math.PI * 2;
      const x1 = cx + r * Math.cos(angle);
      const y1 = cy + r * Math.sin(angle);
      angle += sweep;
      const x2 = cx + r * Math.cos(angle);
      const y2 = cy + r * Math.sin(angle);
      const large = sweep > Math.PI ? 1 : 0;
      const fill = s.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length];
      if (inner > 0) {
        const ix1 = cx + inner * Math.cos(angle - sweep);
        const iy1 = cy + inner * Math.sin(angle - sweep);
        const ix2 = cx + inner * Math.cos(angle);
        const iy2 = cy + inner * Math.sin(angle);
        return svg`<path class="slice" d="M${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} L${ix2},${iy2} A${inner},${inner} 0 ${large},0 ${ix1},${iy1} Z" fill=${fill} @click=${() => this._click(i)}></path>`;
      }
      return svg`<path class="slice" d="M${cx},${cy} L${x1},${y1} A${r},${r} 0 ${large},1 ${x2},${y2} Z" fill=${fill} @click=${() => this._click(i)}></path>`;
    });
    return html`
      <svg width=${this.size} height=${this.size} viewBox="0 0 ${this.size} ${this.size}">${paths}</svg>
      ${this.legend ? html`<div class="legend">${slices.map((s, i) => html`<div class="legend-item"><div class="dot" style="background:${s.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length]}"></div>${s.label}</div>`)}</div>` : ''}`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-pie-chart': WuPieChart; } }
