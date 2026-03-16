import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-network-graph.styles.js';

export interface GraphNode { id: string; label: string; group?: string; }
export interface GraphEdge { source: string; target: string; label?: string; }

/**
 * Force-directed network / graph visualization (placeholder — integrate D3/vis.js).
 * @element wu-network-graph
 * @event wu-node-select - Emitted when a node is selected; detail: { node: GraphNode }
 */
@customElement('wu-network-graph')
export class WuNetworkGraph extends LitElement {
  static styles = styles;
  @property() title = '';
  @property({ attribute: false }) nodes: GraphNode[] = [];
  @property({ attribute: false }) edges: GraphEdge[] = [];
  @property() layout = 'force';

  private selectNode(node: GraphNode) {
    this.dispatchEvent(new CustomEvent('wu-node-select', { bubbles: true, composed: true, detail: { node } }));
  }

  render() {
    return html`
      ${this.title ? html`<div class="title">${this.title}</div>` : ''}
      <div class="placeholder" role="figure" aria-label="${this.title || 'Network graph'}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/>
          <line x1="8" y1="12" x2="16" y2="7"/><line x1="8" y1="12" x2="16" y2="17"/>
        </svg>
        <div class="stats">${this.nodes.length} nodes · ${this.edges.length} edges · ${this.layout} layout</div>
        ${this.nodes.length ? html`
          <div class="nodes-list">
            ${this.nodes.map(n => html`
              <span class="node-chip" @click=${() => this.selectNode(n)}
                    role="button" tabindex="0"
                    @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this.selectNode(n)}>
                ${n.label}
              </span>`)}
          </div>` : ''}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-network-graph': WuNetworkGraph; } }
