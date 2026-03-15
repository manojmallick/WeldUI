import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-product-gallery.styles.js';

/**
 * Product image gallery with thumbnails and main image viewer.
 *
 * @element wu-product-gallery
 */
@customElement('wu-product-gallery')
export class WuProductGallery extends LitElement {
  static styles = styles;

  @property({ type: Array }) images: string[] = [];
  @property() alt = 'Product image';
  @state() private active = 0;

  override render() {
    const src = this.images[this.active];
    return html`
      <div class="gallery">
        <div class="main-image">
          ${src
            ? html`<img src="${src}" alt="${this.alt}" class="main-img" loading="lazy" />`
            : html`<div class="placeholder" aria-label="${this.alt}"></div>`}
        </div>
        ${this.images.length > 1
          ? html`
              <div class="thumbnails" role="list">
                ${this.images.map(
                  (img, i) => html`
                    <button
                      class="thumb ${i === this.active ? 'active' : ''}"
                      role="listitem"
                      aria-label="View image ${i + 1}"
                      aria-pressed=${i === this.active}
                      @click=${() => { this.active = i; }}
                    >
                      <img src="${img}" alt="" loading="lazy" />
                    </button>
                  `,
                )}
              </div>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-product-gallery': WuProductGallery;
  }
}
