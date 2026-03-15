import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-dropdown.styles.js';

export interface DropdownItem {
  label: string;
  value: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
  icon?: string;
}

/**
 * A dropdown menu triggered by a slotted element.
 * @element wu-dropdown
 * @slot trigger - The element that triggers the dropdown
 * @slot - Custom menu content (use .item class for styling)
 * @event wu-select - Fires on item select, detail: { value: string }
 */
@customElement('wu-dropdown')
export class WuDropdown extends LitElement {
  static styles = styles;
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ reflect: true }) placement: 'left' | 'right' | 'top' = 'left';
  @property({ type: Array }) items: DropdownItem[] = [];

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._outsideClick);
    document.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._outsideClick);
    document.removeEventListener('keydown', this._onKey);
  }

  private _outsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node) && !this.shadowRoot!.contains(e.target as Node)) {
      this.open = false;
    }
  };

  private _onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') this.open = false; };

  private _toggle() { this.open = !this.open; }

  private _select(item: DropdownItem) {
    if (item.disabled || item.separator) return;
    this.dispatchEvent(new CustomEvent('wu-select', { bubbles: true, composed: true, detail: { value: item.value } }));
    this.open = false;
  }

  render() {
    return html`
      <div class="trigger-slot" @click=${this._toggle} role="button" aria-haspopup="true" aria-expanded=${this.open}>
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-menu" ?hidden=${!this.open} role="menu">
        ${this.items.length > 0 ? this.items.map(item => item.separator
          ? html`<div class="separator" role="separator"></div>`
          : html`<button class="item ${item.danger ? 'danger' : ''}" role="menuitem" ?disabled=${item.disabled} @click=${() => this._select(item)}>${item.icon ? html`<span>${item.icon}</span>` : ''}${item.label}</button>`
        ) : html`<slot></slot>`}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-dropdown': WuDropdown; } }
