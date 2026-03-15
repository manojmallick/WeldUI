import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-support-bubble.styles.js';

/**
 * Floating help / chat launcher button fixed to the viewport corner.
 *
 * @element wu-support-bubble
 * @event wu-open - Fired when the bubble is clicked
 * @csspart bubble - The floating button element
 */
@customElement('wu-support-bubble')
export class WuSupportBubble extends LitElement {
  static styles = styles;

  /** Screen position */
  @property({ reflect: true }) position: 'bottom-right' | 'bottom-left' = 'bottom-right';

  /** Accessible label and tooltip */
  @property() label = 'Help';

  @state() private open = false;

  private handleClick() {
    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent('wu-open', {
        bubbles: true,
        composed: true,
        detail: { open: this.open },
      }),
    );
  }

  override render() {
    return html`
      <button
        part="bubble"
        class="bubble"
        aria-label=${this.label}
        aria-expanded=${this.open}
        title=${this.label}
        @click=${this.handleClick}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
        <span class="label">${this.label}</span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-support-bubble': WuSupportBubble;
  }
}
