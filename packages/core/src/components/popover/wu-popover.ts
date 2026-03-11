import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-popover.styles.js';

/**
 * A floating popover panel with a trigger slot and content slot.
 *
 * @element wu-popover
 *
 * @slot trigger - The element that toggles the popover
 * @slot - Default slot for popover content
 *
 * @event wu-open - Emitted when the popover opens
 * @event wu-close - Emitted when the popover closes
 *
 * @cssprop --wu-popover-bg - Popover background colour
 * @cssprop --wu-popover-shadow - Popover shadow
 * @cssprop --wu-popover-width - Popover width
 */
@customElement('wu-popover')
export class WuPopover extends LitElement {
  static styles = styles;

  /** Whether the popover is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Placement relative to trigger */
  @property({ reflect: true })
  placement: 'top' | 'bottom' = 'bottom';

  @state() private _isOpen = false;

  override updated(changed: Map<string, unknown>): void {
    if (changed.has('open')) {
      this._isOpen = this.open;
    }
  }

  private _toggle(): void {
    this._isOpen = !this._isOpen;
    this.open = this._isOpen;
    this.dispatchEvent(new CustomEvent(this._isOpen ? 'wu-open' : 'wu-close', {
      bubbles: true, composed: true,
    }));
  }

  private _onDocClick = (e: MouseEvent): void => {
    if (!this.contains(e.target as Node)) {
      this._isOpen = false;
      this.open = false;
    }
  };

  override connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._onDocClick);
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._onDocClick);
  }

  render() {
    return html`
      <span class="trigger" @click=${(e: Event) => { e.stopPropagation(); this._toggle(); }}>
        <slot name="trigger"></slot>
      </span>
      <div
        class="popover ${this._isOpen ? 'open' : ''}"
        role="dialog"
        aria-modal="false"
        aria-hidden=${!this._isOpen}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-popover': WuPopover;
  }
}
