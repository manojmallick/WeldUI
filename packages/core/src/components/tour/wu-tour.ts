import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-tour.styles.js';

export type TourStep = { title: string; content: string; target?: string };

/**
 * A product onboarding tour that walks users through steps with a floating panel.
 *
 * @element wu-tour
 * @event wu-step-change - detail: { step: number }
 * @event wu-complete    - Fired when the last step is acknowledged
 * @event wu-skip        - Fired when the user dismisses the tour early
 */
@customElement('wu-tour')
export class WuTour extends LitElement {
  static styles = styles;

  @property({ type: Array }) steps: TourStep[] = [];
  @property({ type: Boolean, reflect: true }) active = false;

  @state() private current = 0;

  private goNext() {
    if (this.current < this.steps.length - 1) {
      this.current++;
      this.dispatchEvent(new CustomEvent('wu-step-change', { bubbles: true, composed: true, detail: { step: this.current } }));
    } else {
      this.active = false;
      this.dispatchEvent(new CustomEvent('wu-complete', { bubbles: true, composed: true }));
    }
  }

  private goPrev() {
    if (this.current > 0) {
      this.current--;
      this.dispatchEvent(new CustomEvent('wu-step-change', { bubbles: true, composed: true, detail: { step: this.current } }));
    }
  }

  private skip() {
    this.active = false;
    this.dispatchEvent(new CustomEvent('wu-skip', { bubbles: true, composed: true }));
  }

  override render() {
    if (!this.active || this.steps.length === 0) return html``;
    const step = this.steps[this.current];
    const isLast = this.current === this.steps.length - 1;
    return html`
      <div class="overlay" role="dialog" aria-modal="true" aria-label="${step.title}">
        <div class="panel">
          <div class="panel-header">
            <span class="counter">${this.current + 1} / ${this.steps.length}</span>
            <button class="skip-btn" type="button" @click=${this.skip} aria-label="Skip tour">✕</button>
          </div>
          <h3 class="title">${step.title}</h3>
          <p class="content">${step.content}</p>
          <div class="actions">
            ${this.current > 0 ? html`<button class="btn-secondary" type="button" @click=${this.goPrev}>Back</button>` : ''}
            <button class="btn-primary" type="button" @click=${this.goNext}>${isLast ? 'Finish' : 'Next'}</button>
          </div>
          <div class="dots" aria-hidden="true">
            ${this.steps.map((_, i) => html`<span class="dot ${i === this.current ? 'active' : ''}"></span>`)}
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-tour': WuTour;
  }
}
