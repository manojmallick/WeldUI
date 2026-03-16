import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-tree-map.styles.js';

export interface TreeMapNode { label: string; value: number; color?: string; children?: TreeMapNode[]; }

/**
 * Hierarchical nested rectangles (treemap) chart.
 * @element wu-tree-map
 */
@customElement('wu-tree-map')
export class WuTreeMap extends LitElement {
  static styles = styles;
  @property() title = '';
  @property({ attribute: false }) data: TreeMapNode[] = [];
  @property({ type: Number }) width = 500;
  @property({ type: Number }) height = 300;

  render() {
    return html`
      ${this.title ? html`<div class="title">${this.title}</div>` : ''}
      <div class="placeholder" style="width:${this.width}px;height:${this.height}px" role="figure" aria-label="${this.title || 'Tree map'}">
        Tree map — ${this.data.length} root nodes
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-tree-map': WuTreeMap; } }
