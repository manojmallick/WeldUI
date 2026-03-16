import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-ai-suggestion.styles.js';

/**
 * Ghost/preview text inline AI suggestion (Copilot-style).
 *
 * @element wu-ai-suggestion
 * @event wu-accept - Emitted when the user accepts the suggestion (Tab key or click)
 * @event wu-dismiss - Emitted when the user dismisses the suggestion (Escape key)
 */
@customElement('wu-ai-suggestion')
export class WuAiSuggestion extends LitElement {
  static styles = styles;

  /** The suggested text to show as a ghost */
  @property()
  suggestion = '';

  /** Show the keyboard hint */
  @property({ type: Boolean, attribute: 'show-hint' })
  showHint = true;

  @property({ type: Boolean, reflect: true })
  visible = true;

  private onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Tab') {
      e.preventDefault();
      this.accept();
    } else if (e.key === 'Escape') {
      this.dismiss();
    }
  }

  accept() {
    this.dispatchEvent(new CustomEvent('wu-accept', {
      bubbles: true,
      composed: true,
      detail: { value: this.suggestion },
    }));
    this.visible = false;
  }

  dismiss() {
    this.dispatchEvent(new CustomEvent('wu-dismiss', { bubbles: true, composed: true }));
    this.visible = false;
  }

  render() {
    if (!this.visible || !this.suggestion) return html``;
    return html`
      <span
        class="suggestion"
        part="suggestion"
        tabindex="0"
        aria-label="AI suggestion: ${this.suggestion}. Press Tab to accept."
        @keydown=${this.onKeyDown}
        @click=${this.accept}
      >${this.suggestion}</span>
      ${this.showHint ? html`<span class="accept-hint" aria-hidden="true">Tab</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-ai-suggestion': WuAiSuggestion;
  }
}
