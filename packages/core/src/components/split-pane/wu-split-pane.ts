import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-split-pane.styles.js';

/**
 * A resizable split-panel layout. Supports mouse drag, touch/pointer drag,
 * keyboard resize (arrow keys), snap-to-collapse, and an optional collapse button.
 *
 * @element wu-split-pane
 * @slot primary   - Primary (sized) panel
 * @slot secondary - Secondary (flex fills remaining space) panel
 * @event wu-resize   - Fires during drag. detail: { position: number }
 * @event wu-collapse - Fires when panel collapses. detail: { panel: 'primary' }
 * @event wu-expand   - Fires when collapsed panel re-expands. detail: { panel: 'primary' }
 */
@customElement('wu-split-pane')
export class WuSplitPane extends LitElement {
  static styles = styles;

  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';
  @property({ type: Number }) initialSize = 250;
  @property({ type: Number }) minSize = 60;
  @property({ type: Number }) maxSize = 800;
  /** Snap to min/max boundary when within this many px */
  @property({ type: Number }) snapThreshold = 20;
  /** Arrow-key step size in px (Shift multiplies by 5) */
  @property({ type: Number }) keyStep = 8;
  /** Show a collapse/expand toggle button on the divider */
  @property({ type: Boolean }) collapsible = false;

  @state() private _size = 0;
  @state() private _dragging = false;
  @state() private _collapsed = false;
  private _sizeBeforeCollapse = 0;

  connectedCallback() {
    super.connectedCallback();
    this._size = this.initialSize;
    this._sizeBeforeCollapse = this.initialSize;
  }

  // ── Pointer events (mouse, touch, pen) ────────────────────────────────
  private _onPointerDown(e: PointerEvent) {
    if ((e.target as HTMLElement).closest('.collapse-btn')) return;
    e.preventDefault();
    this._dragging = true;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  }

  private _onPointerMove(e: PointerEvent) {
    if (!this._dragging) return;
    const rect = this.getBoundingClientRect();
    const pos = this.orientation === 'horizontal' ? e.clientX - rect.left : e.clientY - rect.top;
    let next = Math.min(this.maxSize, Math.max(this.minSize, pos));
    if (Math.abs(next - this.minSize) < this.snapThreshold) next = this.minSize;
    if (Math.abs(next - this.maxSize) < this.snapThreshold) next = this.maxSize;
    const wasCollapsed = this._collapsed;
    this._collapsed = next <= this.minSize;
    this._size = next;
    if (!wasCollapsed && this._collapsed) {
      this.dispatchEvent(new CustomEvent('wu-collapse', { bubbles: true, composed: true, detail: { panel: 'primary' } }));
    }
    this.dispatchEvent(new CustomEvent('wu-resize', { bubbles: true, composed: true, detail: { position: this._size } }));
  }

  private _onPointerUp(e: PointerEvent) {
    if (!this._dragging) return;
    this._dragging = false;
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    if (!this._collapsed) this._sizeBeforeCollapse = this._size;
  }

  // ── Keyboard resize ──────────────────────────────────────────────────────
  private _onKeyDown(e: KeyboardEvent) {
    const incKeys = this.orientation === 'horizontal' ? ['ArrowRight', 'ArrowUp'] : ['ArrowDown', 'ArrowRight'];
    const decKeys = this.orientation === 'horizontal' ? ['ArrowLeft', 'ArrowDown'] : ['ArrowUp', 'ArrowLeft'];
    const step = e.shiftKey ? this.keyStep * 5 : this.keyStep;
    if (incKeys.includes(e.key)) {
      e.preventDefault(); this._setSize(this._size + step);
    } else if (decKeys.includes(e.key)) {
      e.preventDefault(); this._setSize(this._size - step);
    } else if (e.key === 'Home') {
      e.preventDefault(); this._setSize(this.minSize);
    } else if (e.key === 'End') {
      e.preventDefault(); this._setSize(this.maxSize);
    } else if ((e.key === 'Enter' || e.key === ' ') && this.collapsible) {
      e.preventDefault(); this._toggleCollapse();
    }
  }

  private _setSize(next: number) {
    this._size = Math.min(this.maxSize, Math.max(this.minSize, next));
    this._sizeBeforeCollapse = this._size;
    this._collapsed = this._size <= this.minSize;
    this.dispatchEvent(new CustomEvent('wu-resize', { bubbles: true, composed: true, detail: { position: this._size } }));
  }

  private _toggleCollapse() {
    if (this._collapsed) {
      this._size = this._sizeBeforeCollapse > this.minSize ? this._sizeBeforeCollapse : this.initialSize;
      this._collapsed = false;
      this.dispatchEvent(new CustomEvent('wu-expand', { bubbles: true, composed: true, detail: { panel: 'primary' } }));
    } else {
      this._sizeBeforeCollapse = this._size;
      this._size = this.minSize;
      this._collapsed = true;
      this.dispatchEvent(new CustomEvent('wu-collapse', { bubbles: true, composed: true, detail: { panel: 'primary' } }));
    }
  }

  render() {
    const isH = this.orientation === 'horizontal';
    const paneStyle = isH ? { width: `${this._size}px` } : { height: `${this._size}px` };
    return html`
      <div class="pane pane-primary" part="primary" style=${styleMap(paneStyle)}>
        <slot name="primary"></slot>
      </div>

      <div
        class="divider ${this._dragging ? 'active' : ''} ${this._collapsed ? 'is-collapsed' : ''}"
        part="divider"
        role="separator"
        tabindex="0"
        aria-orientation=${this.orientation}
        aria-label="Resize panel — use arrow keys"
        aria-valuenow=${this._size}
        aria-valuemin=${this.minSize}
        aria-valuemax=${this.maxSize}
        @pointerdown=${this._onPointerDown}
        @pointermove=${this._onPointerMove}
        @pointerup=${this._onPointerUp}
        @pointercancel=${this._onPointerUp}
        @keydown=${this._onKeyDown}
      >
        <span class="divider-handle" aria-hidden="true">
          ${isH
            ? html`<svg width="4" height="20" viewBox="0 0 4 20"><circle cx="2" cy="4" r="1.5" fill="currentColor"/><circle cx="2" cy="10" r="1.5" fill="currentColor"/><circle cx="2" cy="16" r="1.5" fill="currentColor"/></svg>`
            : html`<svg width="20" height="4" viewBox="0 0 20 4"><circle cx="4" cy="2" r="1.5" fill="currentColor"/><circle cx="10" cy="2" r="1.5" fill="currentColor"/><circle cx="16" cy="2" r="1.5" fill="currentColor"/></svg>`}
        </span>
        ${this.collapsible ? html`
          <button class="collapse-btn" type="button"
            aria-label=${this._collapsed ? 'Expand panel' : 'Collapse panel'}
            @click=${this._toggleCollapse}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              ${isH
                ? html`<path d="${this._collapsed ? 'M3 1l4 4-4 4' : 'M7 1L3 5l4 4'}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`
                : html`<path d="${this._collapsed ? 'M1 3l4 4 4-4' : 'M1 7l4-4 4 4'}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>`}
            </svg>
          </button>` : ''}
      </div>

      <div class="pane pane-secondary" part="secondary">
        <slot name="secondary"></slot>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-split-pane': WuSplitPane; } }
