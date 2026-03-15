import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styles } from './wu-carousel.styles.js';

/**
 * A carousel/slider component.
 * @element wu-carousel
 * @slot - Slide content (any elements)
 * @event wu-slide-change - Fires on slide change, detail: { index: number }
 */
@customElement('wu-carousel')
export class WuCarousel extends LitElement {
  static styles = styles;
  @property({ type: Number }) index = 0;
  @property({ type: Boolean, attribute: 'no-controls', reflect: true }) noControls = false;
  @property({ type: Boolean, attribute: 'no-dots', reflect: true }) noDots = false;
  @property({ type: Boolean }) autoplay = false;
  @property({ type: Number, attribute: 'autoplay-interval' }) autoplayInterval = 3000;

  @state() private _count = 0;
  @query('.track') private _track!: HTMLElement;
  private _autoTimer = 0;

  firstUpdated() { this._updateCount(); }

  private _updateCount() {
    this._count = this.querySelectorAll('*').length || 0;
    if (this.autoplay && this._count > 0) {
      this._autoTimer = window.setInterval(() => this._next(), this.autoplayInterval);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._autoTimer);
  }

  private _goto(i: number) {
    const clamp = Math.max(0, Math.min(i, this._count - 1));
    this.index = clamp;
    if (this._track) this._track.style.transform = `translateX(-${clamp * 100}%)`;
    this.dispatchEvent(new CustomEvent('wu-slide-change', { bubbles: true, composed: true, detail: { index: clamp } }));
  }

  private _prev() { this._goto(this.index - 1); }
  private _next() { this._goto(this.index === this._count - 1 ? 0 : this.index + 1); }

  private _onSlotChange(e: Event) {
    const nodes = (e.target as HTMLSlotElement).assignedNodes({ flatten: true }).filter(n => n.nodeType === 1);
    this._count = nodes.length;
  }

  render() {
    return html`
      <div class="carousel" role="region" aria-label="Carousel" aria-roledescription="carousel">
        <div class="track">
          <slot @slotchange=${this._onSlotChange}></slot>
        </div>
        <button class="nav prev" @click=${this._prev} aria-label="Previous slide">‹</button>
        <button class="nav next" @click=${this._next} aria-label="Next slide">›</button>
      </div>
      <div class="dots" role="tablist" aria-label="Slides">
        ${Array.from({ length: this._count }, (_, i) => html`
          <button class="dot ${i === this.index ? 'active' : ''}" @click=${() => this._goto(i)} role="tab" aria-selected=${i === this.index} aria-label="Slide ${i + 1}"></button>
        `)}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-carousel': WuCarousel; } }
