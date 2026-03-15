import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Compact inline sparkline chart.
 * @element wu-sparkline
 */
@customElement('wu-sparkline')
export class WuSparkline extends LitElement {
  static styles = css`
    :host { display: inline-block; }
    svg { display: block; }
  `;

  @property({ type: Array }) data: number[] = [];
  @property({ type: Number }) width = 80;
  @property({ type: Number }) height = 24;
  @property() color = 'var(--wu-color-primary, #2563eb)';
  @property({ type: Boolean }) filled = false;

  render() {
    const data = this.data;
    if (data.length < 2) return html`<svg width=${this.width} height=${this.height}></svg>`;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const range = max - min || 1;
    const W = this.width;
    const H = this.height;
    const step = W / (data.length - 1);
    const pts = data.map((v, i) => [i * step, H - ((v - min) / range) * H] as [number, number]);
    const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
    return html`
      <svg width=${W} height=${H} viewBox="0 0 ${W} ${H}">
        ${this.filled ? svg`<path d="${d} L${W},${H} L0,${H} Z" fill=${this.color} fill-opacity="0.15"></path>` : ''}
        <path d=${d} stroke=${this.color} stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-sparkline': WuSparkline; } }
