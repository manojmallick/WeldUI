import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-typing-indicator.styles.js';

/**
 * Animated "…" dots indicator for streaming or thinking state.
 *
 * @element wu-typing-indicator
 */
@customElement('wu-typing-indicator')
export class WuTypingIndicator extends LitElement {
  static styles = styles;

  /** Accessible label for screen readers */
  @property({ attribute: 'aria-label' })
  ariaLabel = 'Typing…';

  render() {
    return html`
      <span role="status" aria-label=${this.ariaLabel}>
        <span class="dot" aria-hidden="true"></span>
        <span class="dot" aria-hidden="true"></span>
        <span class="dot" aria-hidden="true"></span>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-typing-indicator': WuTypingIndicator;
  }
}
