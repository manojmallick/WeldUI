import { LitElement, html, css, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * SVG bar chart component.
 * @element wu-bar-chart
 * @event wu-bar-click - Fires on bar click, detail: { index: number, value: number, label: string }
 */
@customElement('wu-bar-chart')
export class WuBarChart extends LitElement {
  static styles = css`
    :host { display: block; width: 100%; }
    svg { width: 100%; overflow: visible; }
    .bar { cursor: pointer; transition: opacity 0.15s; }
    .bar:hover { opacity: 0.8; }
    .axis-label { font-family: var(--wu-font-sans, system-ui); font-size: 11px; fill: var(--wu-color-text-secondary, #64748b); }
    .value-label { font-family: var(--wu-font-sans, system-ui); font-size: 11px; fill: var(--wu-color-text, #0f172a); }
  `;

  @property({ type: Array }) data: number[] = [];
  @property({ type: Array }) labels: string[] = [];
  @property({ type: Number }) height = 200;
  @property() color = 'var(--wu-color-primary, #2563eb)';
  @property({ type: Boolean, attribute: 'show-values' }) showValues = false;

  private _click(i: number) {
    this.dispatchEvent(new CustomEvent('wu-bar-click', { bubbles: true, composed: true, detail: { index: i, value: this.data[i], label: this.labels[i] ?? String(i) } }));
  }

  render() {
    const data = this.data;
    if (!data.length) return html`<svg height=${this.height}></svg>`;
    const max = Math.max(...data, 1);
    const w = 100 / data.length;
    const pad = 24;
    const chartH = this.height - pad;
    return html`
      <svg viewBox="0 0 100 ${this.height}" preserveAspectRatio="none" height=${this.height}>
        ${data.map((v, i) => {
          const bh = (v / max) * chartH;
          const x = i * w + w * 0.1;
          const bw = w * 0.8;
          const y = chartH - bh;
          return svg`
            <rect class="bar" x=${x} y=${y} width=${bw} height=${bh} fill=${this.color} rx="2" @click=${() => this._click(i)}></rect>
            ${this.labels[i] ? svg`<text class="axis-label" x=${x + bw / 2} y=${this.height - 2} text-anchor="middle">${this.labels[i]}</text>` : ''}
            ${this.showValues ? svg`<text class="value-label" x=${x + bw / 2} y=${y - 3} text-anchor="middle">${v}</text>` : ''}
          `;
        })}
      </svg>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-bar-chart': WuBarChart; } }
