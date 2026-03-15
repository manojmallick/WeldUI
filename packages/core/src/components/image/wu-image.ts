import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-image.styles.js';

/**
 * An image component with fallback placeholder and lazy loading.
 * @element wu-image
 */
@customElement('wu-image')
export class WuImage extends LitElement {
  static styles = styles;
  @property() src = '';
  @property() alt = '';
  @property() width = '';
  @property() height = '';
  @property({ type: Boolean, reflect: true }) rounded = false;
  @property({ type: Boolean, reflect: true }) circle = false;
  @property({ type: Boolean }) lazy = true;
  @state() private _error = false;

  render() {
    const style = `${this.width ? `width:${this.width};` : ''}${this.height ? `height:${this.height};` : ''}`;
    return html`
      <div class="image-wrap" style=${style}>
        ${this._error || !this.src
          ? html`<div class="placeholder" role="img" aria-label=${this.alt || 'Image'}>${this.alt || '🖼'}</div>`
          : html`<img src=${this.src} alt=${this.alt} loading=${this.lazy ? 'lazy' : 'eager'} @error=${() => { this._error = true; }} />`
        }
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-image': WuImage; } }
