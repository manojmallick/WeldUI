import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-virtual-list.styles.js';

/**
 * Virtual scrolling list — only renders visible items.
 * @element wu-virtual-list
 * @event wu-visible-change - Fires when visible range changes, detail: { start: number, end: number }
 */
@customElement('wu-virtual-list')
export class WuVirtualList extends LitElement {
  static styles = styles;

  @property({ type: Array }) items: unknown[] = [];
  @property({ type: Number, attribute: 'item-height' }) itemHeight = 48;
  @property({ type: Number, attribute: 'viewport-height' }) viewportHeight = 400;
  @property() renderItem: (item: unknown, index: number) => unknown = (item) => html`<div style="height:${this.itemHeight}px;display:flex;align-items:center;padding:0 16px;border-bottom:1px solid var(--wu-color-border)">${String(item)}</div>`;

  @state() private _scrollTop = 0;
  @query('.viewport') private _viewport!: HTMLElement;

  private _onScroll() {
    this._scrollTop = this._viewport.scrollTop;
    const start = Math.floor(this._scrollTop / this.itemHeight);
    const end = Math.min(this.items.length, start + Math.ceil(this.viewportHeight / this.itemHeight) + 2);
    this.dispatchEvent(new CustomEvent('wu-visible-change', { bubbles: true, composed: true, detail: { start, end } }));
  }

  render() {
    const total = this.items.length * this.itemHeight;
    const start = Math.max(0, Math.floor(this._scrollTop / this.itemHeight) - 2);
    const end = Math.min(this.items.length, start + Math.ceil(this.viewportHeight / this.itemHeight) + 4);
    const offsetY = start * this.itemHeight;
    return html`
      <div class="viewport" style=${styleMap({ height: `${this.viewportHeight}px` })} @scroll=${this._onScroll}>
        <div class="total" style=${styleMap({ height: `${total}px` })}>
          <div class="window" style=${styleMap({ transform: `translateY(${offsetY}px)` })}>
            ${this.items.slice(start, end).map((item, i) => this.renderItem(item, start + i))}
          </div>
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-virtual-list': WuVirtualList; } }
