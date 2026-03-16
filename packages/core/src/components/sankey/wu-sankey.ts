import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-sankey.styles.js';

export interface SankeyNode { id: string; label: string; }
export interface SankeyLink { source: string; target: string; value: number; }

/**
 * Sankey/flow diagram for budget allocation and user journey visualization.
 *
 * @element wu-sankey
 */
@customElement('wu-sankey')
export class WuSankey extends LitElement {
  static styles = styles;

  @property()
  title = '';

  @property({ attribute: false })
  nodes: SankeyNode[] = [];

  @property({ attribute: false })
  links: SankeyLink[] = [];

  @property({ type: Number })
  width = 500;

  @property({ type: Number })
  height = 300;

  render() {
    return html`
      ${this.title ? html`<div class="title">${this.title}</div>` : ''}
      <div class="placeholder" style="width:${this.width}px;height:${this.height}px" role="figure" aria-label="${this.title || 'Sankey chart'}">
        Sankey chart — ${this.nodes.length} nodes, ${this.links.length} links
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-sankey': WuSankey; }
}
