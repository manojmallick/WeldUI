import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface ScatterPoint { x: number; y: number; label?: string; }

/**
 * SVG scatter plot chart.
 * @element wu-scatter-plot
 * @event wu-point-click - Fires on dot click, detail: { x: number, y: number, label?: string }
 */
@customElement('wu-scatter-plot')
export class WuScatterPlot extends LitElement {
  static styles = css`
    :host { display: block; width: 100%; }
    svg { width: 100%; overflow: visible; }
    .dot { cursor: pointer; transition: r 0.1s; }
    .dot:hover { r: 6; }
    .axis { stroke: var(--wu-color-border, #e2e8f0); stroke-width: 1; }
    .axis-label { font-family: var(--wu-font-sans, system-ui); font-size: 10px; fill: var(--wu-color-text-secondary, #64748b); }
  `;

  @property({ type: Array }) points: ScatterPoint[] = [];
  @property({ type: Number }) height = 200;
  @property() color = 'var(--wu-color-primary, #2563eb)';

  private _click(p: ScatterPoint) {
    this.dispatchEvent(new CustomEvent('wu-point-click', { bubbles: true, composed: true, detail: p }));
  }

  render() {
    const points = this.points;
    if (!points.length) return html`<svg height=${this.height}></svg>`;
    const xs = points.map(p => p.x);
    const ys = points.map(p => p.y);
    const xMax = Math.max(...xs, 1), xMin = Math.min(...xs, 0);
    const yMax = Math.max(...ys, 1), yMin = Math.min(...ys, 0);
    const W = 100, H = this.height - 16;
    const toX = (x: number) => ((x - xMin) / (xMax - xMin || 1)) * W;
    const toY = (y: number) => H - ((y - yMin) / (yMax - yMin || 1)) * H;
    return html`
      <svg viewBox="0 0 100 ${this.height}" preserveAspectRatio="none" height=${this.height}>
        <line class="axis" x1="0" y1=${H} x2="100" y2=${H}></line>
        <line class="axis" x1="0" y1="0" x2="0" y2=${H}></line>
        ${points.map(p => svg`<circle class="dot" cx=${toX(p.x)} cy=${toY(p.y)} r="3.5" fill=${this.color} @click=${() => this._click(p)}><title>${p.label ?? `(${p.x}, ${p.y})`}</title></circle>`)}
      </svg>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-scatter-plot': WuScatterPlot; } }
