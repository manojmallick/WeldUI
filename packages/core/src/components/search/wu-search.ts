import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-search.styles.js';

/**
 * A search input with debounced events, a clear button, and loading state.
 *
 * @element wu-search
 *
 * @event wu-search - Fired (debounced) when the user types. detail: `{ value: string }`
 * @event wu-clear  - Fired when the clear button is clicked.
 * @event wu-change - Fired immediately on every input change. detail: `{ value: string }`
 *
 * @csspart wrapper - The outer border/background container
 * @csspart input   - The native `<input>` element
 *
 * @cssprop --wu-search-bg            - Background colour
 * @cssprop --wu-search-border        - Border colour
 * @cssprop --wu-search-border-focus  - Border colour when focused
 * @cssprop --wu-search-height        - Height of the search bar
 * @cssprop --wu-search-radius        - Border radius
 *
 * @example
 * ```html
 * <wu-search placeholder="Search users…" debounce="400"
 *   @wu-search="${e => fetchResults(e.detail.value)}">
 * </wu-search>
 * ```
 */
@customElement('wu-search')
export class WuSearch extends LitElement {
  static styles = styles;

  /** Current input value */
  @property()
  value = '';

  /** Input placeholder text */
  @property()
  placeholder = 'Search…';

  /** Show a loading spinner in the trailing position */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** Show a clear button when there is a value */
  @property({ type: Boolean })
  clearable = true;

  /** Debounce delay in ms for `wu-search` events */
  @property({ type: Number })
  debounce = 300;

  @state()
  private _value = '';

  private _debounceTimer: ReturnType<typeof setTimeout> | null = null;

  connectedCallback() {
    super.connectedCallback();
    this._value = this.value;
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value') && this.value !== this._value) {
      this._value = this.value;
    }
  }

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this._value = input.value;
    this.value = this._value;

    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true,
      composed: true,
      detail: { value: this._value },
    }));

    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => {
      this.dispatchEvent(new CustomEvent('wu-search', {
        bubbles: true,
        composed: true,
        detail: { value: this._value },
      }));
    }, this.debounce);
  }

  private _handleClear() {
    this._value = '';
    this.value = '';
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this.dispatchEvent(new CustomEvent('wu-clear', { bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('wu-search', {
      bubbles: true,
      composed: true,
      detail: { value: '' },
    }));
    this.shadowRoot?.querySelector('input')?.focus();
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape' && this._value) {
      e.preventDefault();
      this._handleClear();
    }
  }

  render() {
    const showClear = this.clearable && !this.loading && this._value.length > 0;

    return html`
      <div class="wrapper" part="wrapper">
        <span class="icon-search" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="m10 10 3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>

        <input
          part="input"
          type="search"
          .value=${this._value}
          placeholder=${this.placeholder}
          aria-label=${this.placeholder}
          @input=${this._handleInput}
          @keydown=${this._handleKeyDown}
        />

        <div class="actions">
          ${this.loading
            ? html`<span class="spinner" role="status" aria-label="Loading"></span>`
            : ''}
          ${showClear
            ? html`
                <button
                  class="clear"
                  type="button"
                  aria-label="Clear search"
                  @click=${this._handleClear}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>
              `
            : ''}
        </div>
      </div>
    `;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-search': WuSearch;
  }
}
