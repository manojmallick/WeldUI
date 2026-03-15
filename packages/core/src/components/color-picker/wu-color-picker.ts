import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styles } from './wu-color-picker.styles.js';

/** Utility: hsl → hex */
function hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => { const k = (n + h / 30) % 12; const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1)); return Math.round(255 * c).toString(16).padStart(2, '0'); };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * A canvas-based colour picker with hue slider and hex input.
 * @element wu-color-picker
 * @event wu-change - Fires on colour change, detail: { value: string (hex) }
 */
@customElement('wu-color-picker')
export class WuColorPicker extends LitElement {
  static styles = styles;

  @property() label = '';
  @property() value = '#3b82f6';
  @property() error = '';
  @property({ type: Boolean, reflect: true }) disabled = false;

  @state() private _hue = 220;
  @state() private _sat = 75;
  @state() private _light = 55;
  @state() private _hexInput = '#3b82f6';
  @state() private _cursorX = 180;
  @state() private _cursorY = 40;

  @query('canvas') private _canvas!: HTMLCanvasElement;

  connectedCallback() {
    super.connectedCallback();
    this._hexInput = this.value;
  }

  firstUpdated() {
    this._drawCanvas();
  }

  private _drawCanvas() {
    const canvas = this._canvas;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    const hueColor = `hsl(${this._hue}, 100%, 50%)`;
    const whiteGrad = ctx.createLinearGradient(0, 0, W, 0);
    whiteGrad.addColorStop(0, '#fff');
    whiteGrad.addColorStop(1, hueColor);
    ctx.fillStyle = whiteGrad;
    ctx.fillRect(0, 0, W, H);
    const blackGrad = ctx.createLinearGradient(0, 0, 0, H);
    blackGrad.addColorStop(0, 'transparent');
    blackGrad.addColorStop(1, '#000');
    ctx.fillStyle = blackGrad;
    ctx.fillRect(0, 0, W, H);
  }

  private _onCanvasClick(e: MouseEvent) {
    const canvas = this._canvas;
    const rect = canvas.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * canvas.height);
    this._cursorX = (e.clientX - rect.left);
    this._cursorY = (e.clientY - rect.top);
    const ctx = canvas.getContext('2d')!;
    const px = ctx.getImageData(x, y, 1, 1).data;
    this._hexInput = `#${px[0].toString(16).padStart(2,'0')}${px[1].toString(16).padStart(2,'0')}${px[2].toString(16).padStart(2,'0')}`;
    this.value = this._hexInput;
    this._dispatchChange();
  }

  private _onHueChange(e: Event) {
    this._hue = Number((e.target as HTMLInputElement).value);
    this.value = hslToHex(this._hue, this._sat, this._light);
    this._hexInput = this.value;
    this.requestUpdate();
    this.updateComplete.then(() => this._drawCanvas());
    this._dispatchChange();
  }

  private _onHexInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    this._hexInput = val;
    if (/^#[0-9a-fA-F]{6}$/.test(val)) {
      this.value = val;
      this._dispatchChange();
    }
  }

  private _dispatchChange() {
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <div class="picker-wrap">
        <div class="canvas-area" @click=${this._onCanvasClick}>
          <canvas width="240" height="160"></canvas>
          <div class="cursor" style="left:${this._cursorX}px;top:${this._cursorY}px"></div>
        </div>
        <div class="hue-row">
          <input type="range" class="hue-slider" min="0" max="360" .value=${String(this._hue)} @input=${this._onHueChange} aria-label="Hue" />
          <div class="swatch" style="background:${this.value}"></div>
        </div>
        <div class="inputs">
          <input type="text" class="hex-input" .value=${this._hexInput} @input=${this._onHexInput} placeholder="#000000" aria-label="Hex colour value" />
        </div>
      </div>
      ${this.error ? html`<p class="error-msg" role="alert">${this.error}</p>` : ''}
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-color-picker': WuColorPicker; } }
