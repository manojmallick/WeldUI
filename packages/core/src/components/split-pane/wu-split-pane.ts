import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-split-pane.styles.js';

/**
 * A resizable split panel layout.
 * @element wu-split-pane
 * @slot primary - Primary (fixed) panel
 * @slot secondary - Secondary (flex) panel
 * @event wu-resize - Fires during drag, detail: { position: number }
 */
@customElement('wu-split-pane')
export class WuSplitPane extends LitElement {
  static styles = styles;

  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: Number }) initialSize = 250;
  @property({ type: Number }) minSize = 80;
  @property({ type: Number }) maxSize = 800;

  @state() private _size = 0;
  @state() private _dragging = false;

  connectedCallback() {
    super.connectedCallback();
    this._size = this.initialSize;
  }

  private _onMouseDown(e: MouseEvent) {
    e.preventDefault();
    this._dragging = true;
    const start = this.orientation === 'horizontal' ? e.clientX : e.clientY;
    const startSize = this._size;
    const onMove = (me: MouseEvent) => {
      const delta = (this.orientation === 'horizontal' ? me.clientX : me.clientY) - start;
      this._size = Math.min(this.maxSize, Math.max(this.minSize, startSize + delta));
      this.dispatchEvent(new CustomEvent('wu-resize', { bubbles: true, composed: true, detail: { position: this._size } }));
    };
    const onUp = () => {
      this._dragging = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  }

  render() {
    const isH = this.orientation === 'horizontal';
    const paneStyle = isH ? { width: `${this._size}px` } : { height: `${this._size}px` };
    return html`
      <div class="pane pane-primary" style=${styleMap(paneStyle)}>
        <slot name="primary"></slot>
      </div>
      <div class="divider ${this._dragging ? 'active' : ''}" role="separator" aria-orientation=${this.orientation} @mousedown=${this._onMouseDown}></div>
      <div class="pane pane-secondary">
        <slot name="secondary"></slot>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-split-pane': WuSplitPane; } }
