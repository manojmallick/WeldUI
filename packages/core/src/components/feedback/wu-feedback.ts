import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-feedback.styles.js';

/**
 * A micro-interaction feedback widget supporting thumbs or star rating.
 *
 * @element wu-feedback
 * @event wu-feedback - Fired when user submits feedback, detail: { value: number }
 * @csspart base - The feedback container
 */
@customElement('wu-feedback')
export class WuFeedback extends LitElement {
  static styles = styles;

  /** Input style: thumbs up/down or 1–5 stars */
  @property({ reflect: true }) variant: 'thumbs' | 'stars' = 'thumbs';

  /** Prompt shown above the widget */
  @property() prompt = 'Was this helpful?';

  @state() private selected: number | null = null;
  @state() private submitted = false;

  private select(value: number) {
    this.selected = value;
    this.submitted = true;
    this.dispatchEvent(
      new CustomEvent('wu-feedback', { bubbles: true, composed: true, detail: { value } }),
    );
  }

  override render() {
    if (this.submitted) {
      return html`
        <div part="base" class="wrapper submitted" role="status">
          <span class="thanks">Thanks for your feedback!</span>
        </div>
      `;
    }
    return html`
      <div part="base" class="wrapper">
        ${this.prompt ? html`<span class="prompt">${this.prompt}</span>` : ''}
        <div class="controls" role="group" aria-label="Feedback">
          ${this.variant === 'thumbs' ? this._thumbs() : this._stars()}
        </div>
      </div>
    `;
  }

  private _thumbs() {
    return html`
      <button class="thumb" aria-label="Helpful" @click=${() => this.select(1)}>👍</button>
      <button class="thumb" aria-label="Not helpful" @click=${() => this.select(0)}>👎</button>
    `;
  }

  private _stars() {
    return html`
      ${[1, 2, 3, 4, 5].map(
        (n) => html`
          <button
            class="star ${(this.selected ?? 0) >= n ? 'filled' : ''}"
            aria-label="${n} star${n !== 1 ? 's' : ''}"
            @click=${() => this.select(n)}
          >★</button>
        `,
      )}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-feedback': WuFeedback;
  }
}
