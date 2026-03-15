import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-dropdown.styles.js';

export interface DropdownItem {
  label: string;
  value: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
  /** Emoji or single character icon */
  icon?: string;
  /** Optional group/section header above this item */
  group?: string;
  /** Show a checkmark to indicate selected state */
  checked?: boolean;
  /** Secondary description line */
  description?: string;
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
  /** Show a search input to filter items */
  @property({ type: Boolean }) searchable = false;

  @state() private _query = '';

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

  private _toggle() {
    this.open = !this.open;
    if (this.open && this.searchable) {
      this._query = '';
      requestAnimationFrame(() => (this.shadowRoot?.querySelector('.search-input') as HTMLInputElement | null)?.focus());
    }
  }

  private _select(item: DropdownItem) {
    if (item.disabled || item.separator) return;
    this.dispatchEvent(new CustomEvent('wu-select', { bubbles: true, composed: true, detail: { value: item.value } }));
    this.open = false;
  }

  render() {
    const filtered = this.searchable && this._query
      ? this.items.filter(i => !i.separator && i.label.toLowerCase().includes(this._query.toLowerCase()))
      : this.items;

    let lastGroup = '';
    const rows = filtered.map(item => {
      if (item.separator) return html`<div class="separator" role="separator"></div>`;

      const groupHdr = (item.group && item.group !== lastGroup)
        ? ((lastGroup = item.group), html`<div class="group-header">${item.group}</div>`)
        : (item.group ? (lastGroup = item.group, nothing) : nothing);

      return html`
        ${groupHdr}
        <button
          class="item ${item.danger ? 'danger' : ''} ${item.checked ? 'checked' : ''}"
          role="menuitem"
          ?disabled=${item.disabled}
          @click=${() => this._select(item)}
        >
          <span class="item-icon">${item.icon ?? ''}</span>
          <span class="item-body">
            <span class="item-label">${item.label}</span>
            ${item.description ? html`<span class="item-desc">${item.description}</span>` : nothing}
          </span>
          ${item.checked ? html`<span class="checkmark" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>
          </span>` : nothing}
        </button>`;
    });

    return html`
      <div class="trigger-slot" @click=${this._toggle} role="button" aria-haspopup="true" aria-expanded=${this.open}>
        <slot name="trigger"></slot>
      </div>
      <div class="dropdown-menu" ?hidden=${!this.open} role="menu">
        ${this.searchable ? html`
          <div class="search-wrapper">
            <svg class="search-icon" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="5.5" cy="5.5" r="4" stroke="currentColor" stroke-width="1.3"/>
              <path d="m8.5 8.5 3 3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
            </svg>
            <input
              class="search-input"
              type="text"
              placeholder="Search…"
              .value=${this._query}
              @input=${(e: Event) => { this._query = (e.target as HTMLInputElement).value; }}
              @click=${(e: Event) => e.stopPropagation()}
              @keydown=${(e: KeyboardEvent) => { if (e.key === 'Escape') { this.open = false; } }}
            />
          </div>` : nothing}
        ${this.items.length > 0 ? rows : html`<slot></slot>`}
        ${this.searchable && filtered.length === 0 ? html`
          <div class="empty">No results for "${this._query}"</div>` : nothing}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-dropdown': WuDropdown; } }
