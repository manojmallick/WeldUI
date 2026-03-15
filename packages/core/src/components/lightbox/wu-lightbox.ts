import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-lightbox.styles.js';

export interface LightboxImage { src: string; alt?: string; caption?: string; }

/**
 * Fullscreen image lightbox with navigation.
 * @element wu-lightbox
 * @event wu-close - Fires when the lightbox closes
 */
@customElement('wu-lightbox')
export class WuLightbox extends LitElement {
  static styles = styles;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Array }) images: LightboxImage[] = [];
  @property({ type: Number }) index = 0;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKey);
  }

  private _onKey = (e: KeyboardEvent) => {
    if (!this.open) return;
    if (e.key === 'Escape') this.close();
    if (e.key === 'ArrowRight') this._next();
    if (e.key === 'ArrowLeft') this._prev();
  };

  close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('wu-close', { bubbles: true, composed: true }));
  }

  private _prev() { if (this.index > 0) this.index--; }
  private _next() { if (this.index < this.images.length - 1) this.index++; }

  render() {
    const img = this.images[this.index];
    return html`
      <div class="backdrop" ?hidden=${!this.open} @click=${(e: Event) => { if (e.target === e.currentTarget) this.close(); }} role="dialog" aria-modal="true" aria-label="Image preview">
        <div class="box">
          <button class="close" aria-label="Close lightbox" @click=${this.close}>✕</button>
          ${img ? html`<img src=${img.src} alt=${img.alt ?? ''}>` : ''}
          ${img?.caption ? html`<div class="caption">${img.caption}</div>` : ''}
          <div class="nav">
            <button class="nav-btn" ?disabled=${this.index === 0} aria-label="Previous image" @click=${this._prev}>‹</button>
            <span class="counter">${this.index + 1} / ${this.images.length}</span>
            <button class="nav-btn" ?disabled=${this.index === this.images.length - 1} aria-label="Next image" @click=${this._next}>›</button>
          </div>
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-lightbox': WuLightbox; } }
