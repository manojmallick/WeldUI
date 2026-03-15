import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-gallery.styles.js';

export interface GalleryImage { src: string; alt?: string; caption?: string; }

/**
 * Image gallery grid with optional lightbox integration.
 * @element wu-gallery
 * @event wu-image-click - Fires on thumbnail click, detail: { index: number }
 */
@customElement('wu-gallery')
export class WuGallery extends LitElement {
  static styles = styles;

  @property({ type: Array }) images: GalleryImage[] = [];
  @property({ type: Number }) cols = 3;

  private _click(i: number) {
    this.dispatchEvent(new CustomEvent('wu-image-click', { bubbles: true, composed: true, detail: { index: i } }));
  }

  render() {
    return html`
      <div class="grid" style=${styleMap({ '--wu-gallery-cols': String(this.cols) })}>
        ${this.images.map((img, i) => html`
          <div class="thumb" tabindex="0" role="button" aria-label=${img.alt ?? `Image ${i + 1}`} @click=${() => this._click(i)} @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter') this._click(i); }}>
            <img src=${img.src} alt=${img.alt ?? ''} loading="lazy">
          </div>`)}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-gallery': WuGallery; } }
