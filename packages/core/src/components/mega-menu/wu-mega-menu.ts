import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-mega-menu.styles.js';

/**
 * A multi-column flyout menu for navigation.
 * @element wu-mega-menu
 * @slot trigger - The element that opens the menu
 * @slot - Column content
 * @event wu-open - Fires when the menu opens
 * @event wu-close - Fires when the menu closes
 */
@customElement('wu-mega-menu')
export class WuMegaMenu extends LitElement {
  static styles = styles;

  @property({ type: Boolean, reflect: true }) open = false;

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKey);
  }

  private _onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') this._close(); };

  private _open() {
    this.open = true;
    this.dispatchEvent(new CustomEvent('wu-open', { bubbles: true, composed: true }));
  }

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('wu-close', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="trigger-slot" @click=${() => this.open ? this._close() : this._open()}>
        <slot name="trigger"></slot>
      </div>
      ${this.open ? html`<div class="backdrop" @click=${this._close}></div>` : ''}
      <div class="overlay" ?hidden=${!this.open} role="dialog" aria-label="Navigation menu">
        <slot></slot>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-mega-menu': WuMegaMenu; } }
