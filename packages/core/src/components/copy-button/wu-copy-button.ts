import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-copy-button.styles.js';

/**
 * A button that copies the given text to the clipboard.
 *
 * @element wu-copy-button
 *
 * @event wu-copy - Emitted after a successful copy. Detail: `{ value: string }`
 * @event wu-error - Emitted when the clipboard API fails.
 *
 * @cssprop --wu-copy-button-* - Inherits from button styles
 *
 * @example
 * ```html
 * <wu-copy-button value="npm install @weldui/core">Copy install command</wu-copy-button>
 * ```
 */
@customElement('wu-copy-button')
export class WuCopyButton extends LitElement {
  static styles = styles;

  /** The string to copy to the clipboard */
  @property()
  value = '';

  /** Duration in ms to show the "Copied!" feedback label */
  @property({ type: Number, attribute: 'feedback-duration' })
  feedbackDuration = 1500;

  /** Label shown while idle */
  @property()
  label = 'Copy';

  /** Label shown immediately after a successful copy */
  @property({ attribute: 'success-label' })
  successLabel = 'Copied!';

  @state()
  private _copied = false;

  private async _handleClick() {
    if (!this.value) return;
    try {
      await navigator.clipboard.writeText(this.value);
      this._copied = true;
      this.dispatchEvent(new CustomEvent('wu-copy', {
        bubbles: true, composed: true, detail: { value: this.value }
      }));
      setTimeout(() => { this._copied = false; }, this.feedbackDuration);
    } catch {
      this.dispatchEvent(new CustomEvent('wu-error', { bubbles: true, composed: true }));
    }
  }

  override render() {
    return html`
      <button
        part="base"
        class=${this._copied ? 'copied' : ''}
        @click=${this._handleClick}
        aria-label=${this._copied ? this.successLabel : this.label}
      >
        <slot>${this._copied ? this.successLabel : this.label}</slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-copy-button': WuCopyButton;
  }
}
