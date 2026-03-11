import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-card.styles.js';

/**
 * A flexible card container with header, body, and footer slots.
 *
 * @element wu-card
 *
 * @slot - Default slot for card body content
 * @slot header - Card header content (hidden if empty)
 * @slot footer - Card footer content (hidden if empty)
 *
 * @event wu-click - Emitted when the card is clicked (interactive mode only)
 *
 * @csspart base - The card's root element
 * @csspart header - The header section
 * @csspart body - The body section
 * @csspart footer - The footer section
 *
 * @cssprop --wu-card-bg - Card background colour
 * @cssprop --wu-card-border - Card border colour
 * @cssprop --wu-card-radius - Card border radius
 * @cssprop --wu-card-shadow - Card box shadow (default)
 * @cssprop --wu-card-shadow-hover - Card box shadow on hover (interactive)
 * @cssprop --wu-card-padding - Card internal padding
 */
@customElement('wu-card')
export class WuCard extends LitElement {
  static styles = styles;

  /** Makes the card clickable with hover elevation */
  @property({ type: Boolean, reflect: true })
  interactive = false;

  @state() private _hasHeader = false;
  @state() private _hasFooter = false;

  private _handleClick(event: MouseEvent): void {
    if (!this.interactive) return;
    this.dispatchEvent(new CustomEvent('wu-click', {
      bubbles: true,
      composed: true,
      detail: { originalEvent: event },
    }));
  }

  private _onHeaderSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasHeader = slot.assignedNodes({ flatten: true }).length > 0;
  }

  private _onFooterSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
  }

  render() {
    return html`
      <div
        part="base"
        class="card ${this._hasHeader ? '' : 'no-header'} ${this._hasFooter ? '' : 'no-footer'}"
        tabindex=${this.interactive ? '0' : '-1'}
        role=${this.interactive ? 'button' : 'article'}
        @click=${this._handleClick}
        @keydown=${(e: KeyboardEvent) => {
          if (this.interactive && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            this._handleClick(e as unknown as MouseEvent);
          }
        }}
      >
        <div part="header" class="header">
          <slot name="header" @slotchange=${this._onHeaderSlotChange}></slot>
        </div>
        <div part="body" class="body">
          <slot></slot>
        </div>
        <div part="footer" class="footer">
          <slot name="footer" @slotchange=${this._onFooterSlotChange}></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-card': WuCard;
  }
}
