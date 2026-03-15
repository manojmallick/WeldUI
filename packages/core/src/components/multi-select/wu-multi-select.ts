import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-multi-select.styles.js';

export interface MultiSelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * A multi-selection dropdown with chip display, search, and select-all.
 *
 * @element wu-multi-select
 *
 * @event wu-change - Emitted when selection changes. Detail: { values: string[] }
 *
 * @csspart chips-input - The chips + search input container
 * @csspart dropdown - The options list
 *
 * @cssprop --wu-ms-height - Minimum input height
 *
 * @example
 * ```html
 * <wu-multi-select
 *   label="Technologies"
 *   .options=${techList}
 *   .values=${['ts', 'lit']}
 * ></wu-multi-select>
 * ```
 */
@customElement('wu-multi-select')
export class WuMultiSelect extends LitElement {
  static styles = styles;

  /** Input label */
  @property() label = '';
  /** Placeholder text when no chips selected */
  @property() placeholder = 'Select…';
  /** Currently selected values */
  @property({ type: Array }) values: string[] = [];
  /** Available options */
  @property({ type: Array }) options: MultiSelectOption[] = [];
  /** Show a "select all" option at top of list */
  @property({ type: Boolean, attribute: 'show-select-all' }) showSelectAll = false;
  /** Disabled state */
  @property({ type: Boolean, reflect: true }) disabled = false;
  /** Error message */
  @property() error = '';

  @state() private _open = false;
  @state() private _search = '';

  override connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
  }

  private _handleOutsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node)) this._open = false;
  };

  private get _filtered() {
    const q = this._search.toLowerCase();
    return this.options.filter((o) => !q || o.label.toLowerCase().includes(q));
  }

  private _toggle(value: string) {
    const next = this.values.includes(value)
      ? this.values.filter((v) => v !== value)
      : [...this.values, value];
    this.values = next;
    this._emit();
  }

  private _remove(value: string) {
    this.values = this.values.filter((v) => v !== value);
    this._emit();
  }

  private _selectAll() {
    const all = this.options.filter((o) => !o.disabled).map((o) => o.value);
    const allSelected = all.every((v) => this.values.includes(v));
    this.values = allSelected ? [] : all;
    this._emit();
  }

  private _emit() {
    this.dispatchEvent(
      new CustomEvent('wu-change', {
        bubbles: true,
        composed: true,
        detail: { values: [...this.values] },
      })
    );
  }

  private _handleSearchInput(e: Event) {
    this._search = (e.target as HTMLInputElement).value;
  }

  override updated() {
    const input = this.shadowRoot?.querySelector<HTMLInputElement>('.search-input');
    if (input) input.value = this._search;
  }

  override render() {
    const chips = this.values
      .map((v) => this.options.find((o) => o.value === v))
      .filter(Boolean) as MultiSelectOption[];
    const allSelected = this.options.every((o) => o.disabled || this.values.includes(o.value));

    return html`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="wrapper">
        <div
          class="chips-input"
          part="chips-input"
          @click=${() => { this._open = true; }}
        >
          ${chips.map(
            (chip) => html`
              <span class="chip">
                ${chip.label}
                <button
                  class="chip-remove"
                  aria-label="Remove ${chip.label}"
                  @click=${(e: Event) => { e.stopPropagation(); this._remove(chip.value); }}
                >✕</button>
              </span>
            `
          )}
          <input
            class="search-input"
            placeholder=${chips.length === 0 ? this.placeholder : ''}
            aria-label=${this.label || 'Select options'}
            @input=${this._handleSearchInput}
            @focus=${() => { this._open = true; }}
          />
        </div>
        <ul class="dropdown" part="dropdown" role="listbox" aria-multiselectable="true" ?hidden=${!this._open}>
          ${this.showSelectAll
            ? html`
              <li class="select-all" role="option" @click=${this._selectAll}>
                <input type="checkbox" .checked=${allSelected} readonly aria-hidden="true" />
                Select all
              </li>
            `
            : ''}
          ${this._filtered.map(
            (opt) => html`
              <li
                class="option"
                role="option"
                aria-selected=${this.values.includes(opt.value) ? 'true' : 'false'}
                @click=${() => this._toggle(opt.value)}
              >
                <input
                  type="checkbox"
                  .checked=${this.values.includes(opt.value)}
                  ?disabled=${opt.disabled}
                  aria-hidden="true"
                  readonly
                />
                ${opt.label}
              </li>
            `
          )}
        </ul>
      </div>
      <span class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-multi-select': WuMultiSelect;
  }
}
