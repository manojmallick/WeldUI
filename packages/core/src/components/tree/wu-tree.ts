import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { treeStyles, treeItemStyles } from './wu-tree.styles.js';

/**
 * Tree container component.
 * @element wu-tree
 * @slot - wu-tree-item children
 */
@customElement('wu-tree')
export class WuTree extends LitElement {
  static styles = treeStyles;
  render() { return html`<div role="tree"><slot></slot></div>`; }
}

/**
 * A single node in a tree.
 * @element wu-tree-item
 * @slot - Child wu-tree-item elements
 * @event wu-select - Fires when selected, detail: { label: string }
 */
@customElement('wu-tree-item')
export class WuTreeItem extends LitElement {
  static styles = treeItemStyles;

  @property({ reflect: true }) label = '';
  @property({ type: Boolean, reflect: true }) expanded = false;
  @property({ type: Boolean, reflect: true }) selected = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  private _hasChildren = false;

  firstUpdated() {
    const slot = this.shadowRoot!.querySelector('slot') as HTMLSlotElement;
    this._hasChildren = slot.assignedElements().length > 0;
    this.requestUpdate();
  }

  private _toggle(e: Event) {
    e.stopPropagation();
    this.expanded = !this.expanded;
  }

  private _select() {
    if (this.disabled) return;
    this.selected = true;
    this.dispatchEvent(new CustomEvent('wu-select', { bubbles: true, composed: true, detail: { label: this.label } }));
  }

  render() {
    return html`
      <div class="row" role="treeitem" aria-expanded=${this._hasChildren ? this.expanded : 'false'} aria-selected=${this.selected} @click=${this._select}>
        ${this._hasChildren
          ? html`<span class="toggle" @click=${this._toggle} aria-hidden="true">▶</span>`
          : html`<span class="spacer"></span>`}
        <span class="label">${this.label}</span>
      </div>
      <div class="children" ?hidden=${!this.expanded} role="group">
        <slot @slotchange=${() => { this._hasChildren = (this.shadowRoot!.querySelector('slot') as HTMLSlotElement).assignedElements().length > 0; this.requestUpdate(); }}></slot>
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-tree': WuTree;
    'wu-tree-item': WuTreeItem;
  }
}
