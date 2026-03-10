import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-button.styles.js';

/**
 * A button component that supports multiple visual variants and sizes.
 *
 * @element wu-button
 *
 * @slot - Default slot for button label
 * @slot prefix - Icon or content before the label
 * @slot suffix - Icon or content after the label
 *
 * @event wu-click - Emitted when the button is clicked (not disabled or loading)
 *
 * @csspart base - The button's base wrapper element
 * @csspart label - The button's label span
 *
 * @cssprop --wu-btn-bg - Background colour
 * @cssprop --wu-btn-bg-hover - Background colour on hover
 * @cssprop --wu-btn-color - Text colour
 * @cssprop --wu-btn-border - Border colour
 * @cssprop --wu-btn-radius - Border radius
 * @cssprop --wu-btn-font-size - Font size
 * @cssprop --wu-btn-font-weight - Font weight
 * @cssprop --wu-btn-padding-x - Horizontal padding
 * @cssprop --wu-btn-padding-y - Vertical padding
 * @cssprop --wu-btn-height - Button height
 *
 * @example
 * ```html
 * <wu-button variant="primary">Save Changes</wu-button>
 * <wu-button variant="secondary" size="sm">Cancel</wu-button>
 * <wu-button variant="danger" loading>Deleting…</wu-button>
 * ```
 */
@customElement('wu-button')
export class WuButton extends LitElement {
  static styles = styles;

  /** Visual style variant */
  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success' = 'primary';

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Disabled state — prevents interaction */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Loading state — shows spinner and prevents interaction */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** Native button type attribute */
  @property()
  type: 'button' | 'submit' | 'reset' = 'button';

  /** Accessible label for icon-only buttons */
  @property({ attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  private _handleClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.dispatchEvent(
      new CustomEvent('wu-click', {
        bubbles: true,
        composed: true,
        detail: { originalEvent: event },
      })
    );
  }

  override render() {
    return html`
      <button
        part="base"
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        aria-disabled=${this.disabled || this.loading ? 'true' : 'false'}
        aria-busy=${this.loading ? 'true' : 'false'}
        aria-label=${ifDefined(this.ariaLabel ?? undefined)}
        @click=${this._handleClick}
      >
        ${this.loading ? html`<span class="spinner" aria-hidden="true"></span>` : ''}
        <slot name="prefix"></slot>
        <span part="label" class="label"><slot></slot></span>
        <slot name="suffix"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-button': WuButton;
  }
}
