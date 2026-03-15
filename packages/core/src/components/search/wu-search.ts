import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-search.styles.js';

/**
 * Rich search input with debounced events, a clear button, loading state,
 * and an optional suggestion dropdown with type icons, image thumbnails,
 * category groups, highlighted matches, and keyboard navigation.
 *
 * @element wu-search
 *
 * @event wu-search  - Fired (debounced) when the user types. detail: `{ value: string }`
 * @event wu-clear   - Fired when the clear button is clicked.
 * @event wu-change  - Fired immediately on every input change. detail: `{ value: string }`
 * @event wu-select  - Fired when a suggestion is chosen. detail: `{ item: SuggestionItem }`
 *
 * @csspart wrapper  - The outer border/background container
 * @csspart input    - The native `<input>` element
 * @csspart panel    - The suggestion dropdown panel
 *
 * @cssprop --wu-search-bg            - Background colour
 * @cssprop --wu-search-border        - Border colour
 * @cssprop --wu-search-border-focus  - Border colour when focused
 * @cssprop --wu-search-height        - Height of the search bar
 * @cssprop --wu-search-radius        - Border radius
 *
 * @example
 * ```html
 * <wu-search placeholder="Search files…"
 *   .suggestions=${items}
 *   @wu-select="${e => open(e.detail.item)}">
 * </wu-search>
 * ```
 */

export interface SuggestionItem {
  /** Unique identifier */
  id: string;
  /** Display label — also becomes the input value after selection */
  label: string;
  /** Second-line description or file path */
  description?: string;
  /** Group header label — items with the same category render under one header */
  category?: string;
  /** Built-in icon type — renders a matching SVG icon */
  type?: 'document' | 'spreadsheet' | 'pdf' | 'image' | 'video' | 'user' | 'recent' | 'action' | 'link';
  /** Image URL for thumbnails or user avatars — takes priority over type icon */
  imageUrl?: string;
  /** Short badge label shown on the trailing side */
  badge?: string;
  /** Metadata text shown on the trailing side (e.g. "2 days ago") */
  meta?: string;
  /** Prevent selection */
  disabled?: boolean;
}

@customElement('wu-search')
export class WuSearch extends LitElement {
  static styles = styles;

  /** Current input value */
  @property() value = '';
  /** Input placeholder text */
  @property() placeholder = 'Search…';
  /** Show a loading spinner in the trailing position */
  @property({ type: Boolean, reflect: true }) loading = false;
  /** Show a clear button when there is a value */
  @property({ type: Boolean }) clearable = true;
  /** Debounce delay in ms for `wu-search` events */
  @property({ type: Number }) debounce = 300;
  /** Suggestion items to display in the dropdown */
  @property({ type: Array }) suggestions: SuggestionItem[] = [];
  /** Maximum number of suggestions to show */
  @property({ type: Number }) maxSuggestions = 8;
  /** Group suggestions under category headers */
  @property({ type: Boolean }) showCategories = true;
  /** Remember and show recent selections at the top */
  @property({ type: Boolean }) keepRecentSearches = false;

  @state() private _value = '';
  @state() private _open = false;
  @state() private _activeIndex = -1;
  @state() private _recentSearches: string[] = [];

  private _debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private _uid = `wu-search-lb-${Math.random().toString(36).slice(2)}`;

  connectedCallback() {
    super.connectedCallback();
    this._value = this.value;
    if (this.keepRecentSearches) {
      try {
        const stored = sessionStorage.getItem('wu-search-recent');
        if (stored) this._recentSearches = JSON.parse(stored).slice(0, 5);
      } catch { /* ignore */ }
    }
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value') && this.value !== this._value) {
      this._value = this.value;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
  }

  // ── Computed ──────────────────────────────────────────────────────────────

  private get _visible(): SuggestionItem[] {
    return this.suggestions.filter(s => !s.disabled).slice(0, this.maxSuggestions);
  }

  private get _showPanel(): boolean {
    if (!this._open) return false;
    if (this._visible.length > 0) return true;
    if (this.keepRecentSearches && !this._value && this._recentSearches.length > 0) return true;
    return false;
  }

  // ── Event handlers ────────────────────────────────────────────────────────

  private _handleInput(e: Event) {
    const input = e.target as HTMLInputElement;
    this._value = input.value;
    this.value = this._value;
    this._open = true;
    this._activeIndex = -1;

    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true, composed: true, detail: { value: this._value },
    }));

    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this._debounceTimer = setTimeout(() => {
      this.dispatchEvent(new CustomEvent('wu-search', {
        bubbles: true, composed: true, detail: { value: this._value },
      }));
    }, this.debounce);
  }

  private _handleFocus() {
    this._open = true;
  }

  private _handleBlur() {
    setTimeout(() => { this._open = false; }, 160);
  }

  private _handleClear() {
    this._value = '';
    this.value = '';
    this._activeIndex = -1;
    if (this._debounceTimer) clearTimeout(this._debounceTimer);
    this.dispatchEvent(new CustomEvent('wu-clear', { bubbles: true, composed: true }));
    this.dispatchEvent(new CustomEvent('wu-search', {
      bubbles: true, composed: true, detail: { value: '' },
    }));
    this.shadowRoot?.querySelector('input')?.focus();
  }

  private _handleKeyDown(e: KeyboardEvent) {
    const items = this._visible;

    if (e.key === 'Escape') {
      e.preventDefault();
      if (this._open && this._showPanel) { this._open = false; }
      else if (this._value) { this._handleClear(); }
      return;
    }

    if (!this._showPanel) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this._activeIndex = Math.min(this._activeIndex + 1, items.length - 1);
      this._scrollActiveIntoView();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this._activeIndex = Math.max(this._activeIndex - 1, -1);
      this._scrollActiveIntoView();
    } else if (e.key === 'Enter' && this._activeIndex >= 0) {
      e.preventDefault();
      this._selectItem(items[this._activeIndex]);
    } else if (e.key === 'Tab') {
      this._open = false;
    }
  }

  private _scrollActiveIntoView() {
    requestAnimationFrame(() => {
      const panel = this.shadowRoot?.querySelector('.panel');
      const active = panel?.querySelector('[aria-selected="true"]') as HTMLElement | null;
      active?.scrollIntoView({ block: 'nearest' });
    });
  }

  private _selectItem(item: SuggestionItem) {
    this._value = item.label;
    this.value = item.label;
    this._open = false;
    this._activeIndex = -1;

    if (this.keepRecentSearches) {
      this._recentSearches = [item.label, ...this._recentSearches.filter(r => r !== item.label)].slice(0, 5);
      try { sessionStorage.setItem('wu-search-recent', JSON.stringify(this._recentSearches)); } catch { /* ignore */ }
    }

    this.dispatchEvent(new CustomEvent('wu-select', {
      bubbles: true, composed: true, detail: { item },
    }));
  }

  private _selectRecent(term: string) {
    this._value = term;
    this.value = term;
    this._open = false;
    this.dispatchEvent(new CustomEvent('wu-search', {
      bubbles: true, composed: true, detail: { value: term },
    }));
  }

  // ── Render helpers ────────────────────────────────────────────────────────

  private _highlight(text: string) {
    if (!this._value) return html`${text}`;
    const q = this._value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const match = new RegExp(`(${q})`, 'i').exec(text);
    if (!match) return html`${text}`;
    const pre = text.slice(0, match.index);
    const hit = match[1];
    const post = text.slice(match.index + hit.length);
    return html`${pre}<mark class="hl">${hit}</mark>${post}`;
  }

  private _typeIcon(type?: string) {
    switch (type) {
      case 'document': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-document">
          <rect x="3" y="2" width="11" height="16" rx="1.5" fill="var(--wu-search-icon-doc)" opacity=".15"/>
          <rect x="3" y="2" width="11" height="16" rx="1.5" stroke="var(--wu-search-icon-doc)" stroke-width="1.4"/>
          <path d="M6 7h6M6 10h6M6 13h4" stroke="var(--wu-search-icon-doc)" stroke-width="1.2" stroke-linecap="round"/>
          <path d="M11 2v4h3" fill="var(--wu-search-icon-doc)" opacity=".25"/>
          <path d="M11 2l3 4" stroke="var(--wu-search-icon-doc)" stroke-width="1.2"/>
        </svg>`;
      case 'spreadsheet': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-spreadsheet">
          <rect x="3" y="2" width="14" height="16" rx="1.5" fill="var(--wu-search-icon-sheet)" opacity=".12"/>
          <rect x="3" y="2" width="14" height="16" rx="1.5" stroke="var(--wu-search-icon-sheet)" stroke-width="1.4"/>
          <path d="M3 7h14M10 7v11M3 12h14" stroke="var(--wu-search-icon-sheet)" stroke-width="1.2"/>
        </svg>`;
      case 'pdf': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-pdf">
          <rect x="3" y="2" width="11" height="16" rx="1.5" fill="var(--wu-search-icon-pdf)" opacity=".15"/>
          <rect x="3" y="2" width="11" height="16" rx="1.5" stroke="var(--wu-search-icon-pdf)" stroke-width="1.4"/>
          <text x="4.5" y="12.5" font-size="5" fill="var(--wu-search-icon-pdf)" font-weight="700" font-family="sans-serif">PDF</text>
        </svg>`;
      case 'image': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-image">
          <rect x="2" y="4" width="16" height="12" rx="1.5" fill="var(--wu-search-icon-image)" opacity=".12"/>
          <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="var(--wu-search-icon-image)" stroke-width="1.4"/>
          <circle cx="7" cy="8.5" r="1.5" fill="var(--wu-search-icon-image)"/>
          <path d="M2 13l4-4 3 3 3-3 4 4" stroke="var(--wu-search-icon-image)" stroke-width="1.2" stroke-linejoin="round"/>
        </svg>`;
      case 'video': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-video">
          <rect x="2" y="4" width="12" height="12" rx="1.5" fill="var(--wu-search-icon-video)" opacity=".12"/>
          <rect x="2" y="4" width="12" height="12" rx="1.5" stroke="var(--wu-search-icon-video)" stroke-width="1.4"/>
          <path d="M14 8l4-2v8l-4-2V8Z" stroke="var(--wu-search-icon-video)" stroke-width="1.4" stroke-linejoin="round"/>
          <path d="M7 8.5l3.5 1.75L7 12V8.5Z" fill="var(--wu-search-icon-video)"/>
        </svg>`;
      case 'user': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-user">
          <circle cx="10" cy="7" r="3.5" fill="var(--wu-search-icon-user)" opacity=".2"/>
          <circle cx="10" cy="7" r="3.5" stroke="var(--wu-search-icon-user)" stroke-width="1.4"/>
          <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="var(--wu-search-icon-user)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;
      case 'recent': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-recent">
          <circle cx="10" cy="10" r="7" stroke="var(--wu-search-icon-color)" stroke-width="1.4"/>
          <path d="M10 6v4l2.5 2.5" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;
      case 'action': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-action">
          <path d="M11 3L4 11h6l-1 6 7-8h-6l1-6Z" fill="var(--wu-search-icon-action)" opacity=".2"/>
          <path d="M11 3L4 11h6l-1 6 7-8h-6l1-6Z" stroke="var(--wu-search-icon-action)" stroke-width="1.4" stroke-linejoin="round"/>
        </svg>`;
      case 'link': return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-link">
          <path d="M8 12a4 4 0 0 0 5.66 0l2-2A4 4 0 0 0 10 4.34L9 5.35" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
          <path d="M12 8a4 4 0 0 0-5.66 0l-2 2A4 4 0 0 0 10 15.66L11 14.65" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;
      default: return html`
        <svg viewBox="0 0 20 20" fill="none" class="si si-default">
          <circle cx="8.5" cy="8.5" r="5" stroke="var(--wu-search-icon-color)" stroke-width="1.4"/>
          <path d="m12 12 4 4" stroke="var(--wu-search-icon-color)" stroke-width="1.4" stroke-linecap="round"/>
        </svg>`;
    }
  }

  private _renderItemIcon(item: SuggestionItem) {
    if (item.imageUrl) {
      return html`<span class="si-img"><img src=${item.imageUrl} alt="" loading="lazy"/></span>`;
    }
    return html`<span class="si-wrap si-wrap--${item.type ?? 'default'}">${this._typeIcon(item.type)}</span>`;
  }

  private _renderCategory(label: string) {
    return html`<div class="category-header" role="presentation">${label}</div>`;
  }

  private _renderSuggestionList() {
    const items = this._visible;
    if (items.length === 0) return nothing;

    const rows: ReturnType<typeof html>[] = [];
    let lastCat = '';

    items.forEach((item, i) => {
      if (this.showCategories && item.category && item.category !== lastCat) {
        rows.push(this._renderCategory(item.category));
        lastCat = item.category;
      }

      const isActive = this._activeIndex === i;

      rows.push(html`
        <div
          class="item ${isActive ? 'item--active' : ''} ${item.disabled ? 'item--disabled' : ''}"
          role="option"
          aria-selected=${isActive}
          @mousedown=${(e: MouseEvent) => { e.preventDefault(); if (!item.disabled) this._selectItem(item); }}
          @mouseover=${() => { this._activeIndex = i; }}
        >
          ${this._renderItemIcon(item)}
          <span class="item-content">
            <span class="item-label">${this._highlight(item.label)}</span>
            ${item.description ? html`<span class="item-desc">${item.description}</span>` : nothing}
          </span>
          <span class="item-meta">
            ${item.badge ? html`<span class="item-badge">${item.badge}</span>` : nothing}
            ${item.meta ? html`<span class="item-time">${item.meta}</span>` : nothing}
          </span>
        </div>
      `);
    });

    return rows;
  }

  private _renderRecentSearches() {
    if (!this.keepRecentSearches || this._value || this._recentSearches.length === 0) return nothing;
    return html`
      <div class="category-header">Recent</div>
      ${this._recentSearches.map(term => html`
        <div class="item" role="option" aria-selected="false"
          @mousedown=${(e: MouseEvent) => { e.preventDefault(); this._selectRecent(term); }}>
          <span class="si-wrap si-wrap--recent">${this._typeIcon('recent')}</span>
          <span class="item-content">
            <span class="item-label">${term}</span>
          </span>
          <span class="item-meta">
            <button class="remove-recent" aria-label="Remove"
              @mousedown=${(e: MouseEvent) => {
                e.stopPropagation();
                e.preventDefault();
                this._recentSearches = this._recentSearches.filter(r => r !== term);
                try { sessionStorage.setItem('wu-search-recent', JSON.stringify(this._recentSearches)); } catch { /* ignore */ }
              }}>
              <svg width="10" height="10" viewBox="0 0 10 10"><path d="M1 1l8 8M9 1l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
            </button>
          </span>
        </div>
      `)}
    `;
  }

  private _renderEmptyState() {
    if (!this._value || this._visible.length > 0) return nothing;
    return html`
      <div class="empty-state">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
          <circle cx="14" cy="14" r="9" stroke="var(--wu-color-text-disabled)" stroke-width="1.5"/>
          <path d="m21 21 6 6" stroke="var(--wu-color-text-disabled)" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M11 14h6M14 11v6" stroke="var(--wu-color-text-disabled)" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
        <p>No results for <strong>"${this._value}"</strong></p>
      </div>
    `;
  }

  private _renderSearchAction() {
    if (!this._value) return nothing;
    return html`
      <div class="panel-footer">
        <span class="footer-hint">
          <kbd>↵</kbd> select &nbsp;·&nbsp; <kbd>↑↓</kbd> navigate &nbsp;·&nbsp; <kbd>Esc</kbd> close
        </span>
      </div>
    `;
  }

  render() {
    const showClear = this.clearable && !this.loading && this._value.length > 0;
    const activeId = this._activeIndex >= 0 ? `${this._uid}-item-${this._activeIndex}` : undefined;

    return html`
      <div class="wrapper ${this._showPanel ? 'wrapper--open' : ''}" part="wrapper">
        <span class="icon-search" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.5"/>
            <path d="m10 10 3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </span>

        <input
          part="input"
          type="text"
          autocomplete="off"
          spellcheck="false"
          .value=${this._value}
          placeholder=${this.placeholder}
          aria-label=${this.placeholder}
          role=${this.suggestions.length ? 'combobox' : 'searchbox'}
          aria-expanded=${this._showPanel ? 'true' : 'false'}
          aria-controls=${this._uid}
          aria-activedescendant=${activeId ?? ''}
          @input=${this._handleInput}
          @focus=${this._handleFocus}
          @blur=${this._handleBlur}
          @keydown=${this._handleKeyDown}
        />

        <div class="actions">
          ${this.loading
            ? html`<span class="spinner" role="status" aria-label="Loading"></span>`
            : nothing}
          ${showClear
            ? html`
                <button class="clear" type="button" aria-label="Clear search" @click=${this._handleClear}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </button>`
            : nothing}
        </div>
      </div>

      ${this._showPanel ? html`
        <div class="panel" part="panel" id=${this._uid} role="listbox">
          ${this._renderRecentSearches()}
          ${this._renderSuggestionList()}
          ${this._renderEmptyState()}
          ${this._renderSearchAction()}
        </div>` : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-search': WuSearch;
  }
}
