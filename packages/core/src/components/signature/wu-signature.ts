import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styles } from './wu-signature.styles.js';

/**
 * A canvas-based signature capture pad.
 *
 * @element wu-signature
 *
 * @event wu-change - Emitted when drawing ends. detail: { dataUrl: string }
 * @event wu-clear  - Emitted when canvas is cleared.
 *
 * @cssprop --wu-sig-border - Border colour
 * @cssprop --wu-sig-bg - Background colour
 * @cssprop --wu-sig-line-color - Pen line colour
 */
@customElement('wu-signature')
export class WuSignature extends LitElement {
  static styles = styles;

  /** Canvas height in pixels */
  @property({ type: Number }) height = 160;

  /** Line width in pixels */
  @property({ type: Number, attribute: 'line-width' }) lineWidth = 2;

  /** Whether the signature pad is empty */
  @state() empty = true;

  @query('canvas') private canvas!: HTMLCanvasElement;

  private drawing = false;
  private ctx: CanvasRenderingContext2D | null = null;

  override firstUpdated() {
    this.canvas.width = this.canvas.offsetWidth * devicePixelRatio;
    this.canvas.height = this.height * devicePixelRatio;
    this.ctx = this.canvas.getContext('2d');
    if (this.ctx) {
      this.ctx.scale(devicePixelRatio, devicePixelRatio);
      this.ctx.lineCap = 'round';
      this.ctx.lineJoin = 'round';
    }
  }

  private getPos(e: PointerEvent): { x: number; y: number } {
    const rect = this.canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  }

  private onPointerDown(e: PointerEvent) {
    this.drawing = true;
    this.canvas.setPointerCapture(e.pointerId);
    const { x, y } = this.getPos(e);
    this.ctx?.beginPath();
    this.ctx?.moveTo(x, y);
  }

  private onPointerMove(e: PointerEvent) {
    if (!this.drawing) return;
    const { x, y } = this.getPos(e);
    if (this.ctx) {
      this.ctx.strokeStyle = getComputedStyle(this).getPropertyValue('--wu-sig-line-color').trim() || '#000';
      this.ctx.lineWidth = this.lineWidth;
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }

  private onPointerUp() {
    if (!this.drawing) return;
    this.drawing = false;
    this.empty = false;
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true, composed: true,
      detail: { dataUrl: this.toDataURL() }
    }));
  }

  /** Returns the PNG data URL of the current signature. */
  toDataURL(): string {
    return this.canvas?.toDataURL('image/png') ?? '';
  }

  /** Clears the signature pad. */
  clear() {
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.offsetWidth, this.height);
    }
    this.empty = true;
    this.dispatchEvent(new CustomEvent('wu-clear', { bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div class="wrapper">
        <canvas
          style="height:${this.height}px"
          @pointerdown=${this.onPointerDown}
          @pointermove=${this.onPointerMove}
          @pointerup=${this.onPointerUp}
          @pointercancel=${this.onPointerUp}
          role="img"
          aria-label="Signature pad"
        ></canvas>
        ${this.empty ? html`<span class="placeholder">Sign here</span>` : ''}
      </div>
      <div class="actions">
        <button class="clear-btn" type="button" @click=${this.clear}>Clear</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-signature': WuSignature; }
}
