import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-combobox.styles.js';

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * An autocomplete / combobox input with dropdown suggestions.
 * Supports static options or async loading.
 *
 * @element wu-combobox
 *
 * @event wu-change - Emitted when a value is selected. Detail: { value: string, label: string }
 * @event wu-input - Emitted on every keystroke. Detail: { query: string }
 * @event wu-clear - Emitted when the value is cleared.
 *
 * @csspart base - The text input element
 * @csspart dropdown - The suggestions list
 *
 * @cssprop --wu-cmb-height - Input height
 *
 * @example
 * ```html
 * <wu-combobox
 *   label="Country"
 *   placeholder="Search countries…"
 *   .options=${countryList}
 * ></wu-combobox>
 * ```
 */
@customElement('wu-combobox')
export class WuCombobox extends LitElement {
  static styles = styles;

  /** Input label */
  @property()
  label = '';

  /** Placeholder text */
  @property()
  placeholder = 'Search…';

  /** Currently selected value */
  @property()
  value = '';

  /** Static options array */
  @property({ type: Array })
  options: ComboboxOption[] = [];

  /** Show loading spinner (for async options) */
  @property({ type: Boolean })
  loading = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Error message */
  @property()
  error = '';

  /** Minimum query length before filtering */
  @property({ type: Number, attribute: 'min-chars' })
  minChars = 0;

  @state() private _open = false;
  @state() private _query = '';
  @state() private _highlighted = -1;
  @state() private _inputValue = '';

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) {
      this._open = false;
    }
  };

  private get _filtered(): ComboboxOption[] {
    if (this._query.length < this.minChars) return [];
    const q = this._query.toLowerCase();
    return this.options.filter(
      (o) => !q || o.label.toLowerCase().includes(q) || o.value.toLowerCase().includes(q)
    );
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this._query = input.value;
    this._inputValue = input.value;
    this._open = true;
    this._highlighted = -1;
    this.dispatchEvent(
      new CustomEvent('wu-input', { bubbles: true, composed: true, detail: { query: this._query } })
    );
  }

  private _handleKeydown(e: KeyboardEvent) {
    const filtered = this._filtered;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this._highlighted = Math.min(this._highlighted + 1, filtered.length - 1);
      this._open = true;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this._highlighted = Math.max(this._highlighted - 1, -1);
    } else if (e.key === 'Enter' && this._highlighted >= 0) {
      e.preventDefault();
      this._select(filtered[this._highlighted]);
    } else if (e.key === 'Escape') {
      this._open = false;
    }
  }

  private _select(option: ComboboxOption) {
    if (option.disabled) return;
    this.value = option.value;
    this._inputValue = option.label;
    this._query = '';
    this._open = false;
    this._highlighted = -1;
    this.dispatchEvent(
      new CustomEvent('wu-change', {
        bubbles: true,
        composed: true,
        detail: { value: option.value, label: option.label },
      })
    );
  }

  override render() {
    const filtered = this._filtered;
    const listId = 'combobox-list';
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <div class="wrapper">
        <input
          part="base"
          type="text"
          role="combobox"
          autocomplete="off"
          aria-expanded=${this._open ? 'true' : 'false'}
          aria-haspopup="listbox"
          aria-controls=${listId}
          aria-activedescendant=${
            this._highlighted >= 0 ? `option-${filtered[this._highlighted]?.value}` : ''
          }
          placeholder=${this.placeholder}
          .value=${this._inputValue}
          ?disabled=${this.disabled}
          @input=${this._handleInput}
          @focus=${() => { if (this._inputValue.length >= this.minChars) this._open = true; }}
          @keydown=${this._handleKeydown}
        />
        ${this.loading
          ? html`<span class="loading-indicator" aria-hidden="true"></span>`
          : html`<span class="chevron" aria-hidden="true">▼</span>`}
        <ul
          id=${listId}
          part="dropdown"
          class="dropdown"
          role="listbox"
          ?hidden=${!this._open || filtered.length === 0}
        >
          ${filtered.length === 0 && this._query && !this.loading
            ? html`<li class="empty">No options found</li>`
            : filtered.map(
                (opt, i) => html`
                  <li
                    id="option-${opt.value}"
                    class="option ${i === this._highlighted ? 'highlighted' : ''}"
                    role="option"
                    aria-selected=${opt.value === this.value ? 'true' : 'false'}
                    aria-disabled=${opt.disabled ? 'true' : 'false'}
                    @click=${() => this._select(opt)}
                  >
                    ${opt.label}
                  </li>
                `
              )}
        </ul>
      </div>
      ${this.error ? html`<span class="error-msg" role="alert">${this.error}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-combobox': WuCombobox;
  }
}
