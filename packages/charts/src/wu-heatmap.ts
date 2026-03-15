import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

export interface HeatmapCell { x: number; y: number; value: number; }

/**
 * Heatmap grid chart.
 * @element wu-heatmap
 */
@customElement('wu-heatmap')
export class WuHeatmap extends LitElement {
  static styles = css`
    :host { display: block; font-family: var(--wu-font-sans, system-ui); font-size: 11px; }
    .grid { display: grid; gap: 2px; }
    .cell {
      border-radius: 2px;
      cursor: default;
      transition: opacity 0.1s;
    }
    .cell:hover { outline: 2px solid var(--wu-color-primary, #2563eb); outline-offset: 1px; }
    .x-labels { display: flex; gap: 2px; margin-top: 4px; }
    .x-label { flex: 1; text-align: center; color: var(--wu-color-text-secondary, #64748b); }
  `;

  @property({ type: Array }) cells: HeatmapCell[] = [];
  @property({ type: Number }) cols = 7;
  @property({ type: Number }) rows = 5;
  @property({ type: Number }) cellSize = 20;
  @property() color = '#2563eb';
  @property({ type: Array }) xLabels: string[] = [];

  render() {
    const max = this.cells.reduce((a, c) => Math.max(a, c.value), 1);
    const grid: (HeatmapCell | null)[][] = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
    for (const c of this.cells) {
      if (c.y < this.rows && c.x < this.cols) grid[c.y][c.x] = c;
    }
    return html`
      <div class="grid" style="grid-template-columns:repeat(${this.cols},${this.cellSize}px)">
        ${grid.flat().map(c => {
          const opacity = c ? (c.value / max) : 0;
          return html`<div class="cell" style=${styleMap({ width: `${this.cellSize}px`, height: `${this.cellSize}px`, background: this.color, opacity: String(opacity || 0.05) })} title=${c ? String(c.value) : ''}></div>`;
        })}
      </div>
      ${this.xLabels.length ? html`<div class="x-labels">${this.xLabels.map(l => html`<span class="x-label">${l}</span>`)}</div>` : ''}`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-heatmap': WuHeatmap; } }
