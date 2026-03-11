import { LitElement, html, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styles } from './wu-command.styles.js';

export interface WuCommandItem {
  id: string;
  label: string;
  group?: string;
  shortcut?: string;
  icon?: string;
  keywords?: string[];
}

/**
 * A command palette component with fuzzy search, grouped results, and keyboard navigation.
 *
 * @element wu-command
 *
 * @event wu-select - Emitted when a command is selected. Detail: `{ item: WuCommandItem }`
 * @event wu-close - Emitted when the palette is closed.
 *
 * @csspart backdrop - The modal backdrop
 * @csspart panel - The command panel
 *
 * @cssprop --wu-cmd-bg - Panel background color
 * @cssprop --wu-cmd-shadow - Panel shadow
 * @cssprop --wu-cmd-max-height - Max height of the results list
 */
@customElement('wu-command')
export class WuCommand extends LitElement {
  static styles = styles;

  /** Whether the palette is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Command items to display */
  @property({ type: Array })
  items: WuCommandItem[] = [];

  /** Placeholder text for the search input */
  @property()
  placeholder = 'Search commands…';

  /** Empty state message */
  @property({ attribute: 'empty-message' })
  emptyMessage = 'No results found.';

  @state() private _query = '';
  @state() private _selectedIndex = 0;

  @query('.search-input')
  private _input!: HTMLInputElement;

  private get _filtered(): WuCommandItem[] {
    if (!this._query.trim()) return this.items;
    const q = this._query.toLowerCase();
    return this.items.filter((item) => {
      return (
        item.label.toLowerCase().includes(q) ||
        item.group?.toLowerCase().includes(q) ||
        item.keywords?.some((k) => k.toLowerCase().includes(q))
      );
    });
  }

  private get _grouped(): Map<string, WuCommandItem[]> {
    const map = new Map<string, WuCommandItem[]>();
    for (const item of this._filtered) {
      const g = item.group ?? '';
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(item);
    }
    return map;
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('open') && this.open) {
      this._query = '';
      this._selectedIndex = 0;
      requestAnimationFrame(() => this._input?.focus());
    }
  }

  private _onKeydown(e: KeyboardEvent) {
    const flat = this._filtered;
    if (e.key === 'Escape') {
      this.open = false;
      this.dispatchEvent(new CustomEvent('wu-close', { bubbles: true, composed: true }));
      return;
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this._selectedIndex = Math.min(this._selectedIndex + 1, flat.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this._selectedIndex = Math.max(this._selectedIndex - 1, 0);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const item = flat[this._selectedIndex];
      if (item) this._select(item);
    }
  }

  private _select(item: WuCommandItem) {
    this.dispatchEvent(new CustomEvent('wu-select', {
      bubbles: true,
      composed: true,
      detail: { item },
    }));
    this.open = false;
  }

  private _onBackdropClick(e: MouseEvent) {
    if ((e.target as HTMLElement).classList.contains('backdrop')) {
      this.open = false;
      this.dispatchEvent(new CustomEvent('wu-close', { bubbles: true, composed: true }));
    }
  }

  private _flatIndex(item: WuCommandItem): number {
    return this._filtered.indexOf(item);
  }

  render() {
    const grouped = this._grouped;
    const flat = this._filtered;
    // Flatten all items into a single array for rendering (avoids nested map issues)
    const rows: Array<{ type: 'group'; label: string } | { type: 'item'; item: WuCommandItem; idx: number }> = [];
    for (const [group, groupItems] of grouped.entries()) {
      if (group) rows.push({ type: 'group', label: group });
      for (const item of groupItems) {
        rows.push({ type: 'item', item, idx: this._flatIndex(item) });
      }
    }

    return html`
      <div
        class="backdrop"
        part="backdrop"
        role="dialog"
        aria-label="Command palette"
        aria-modal="true"
        @click=${this._onBackdropClick}
        @keydown=${this._onKeydown}
      >
        <div class="panel" part="panel">
          <div class="search-row">
            <span class="search-icon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <circle cx="6.5" cy="6.5" r="4.5"/>
                <path d="M10 10l3 3"/>
              </svg>
            </span>
            <input
              class="search-input"
              type="text"
              role="combobox"
              aria-expanded="true"
              aria-autocomplete="list"
              aria-label="${this.placeholder}"
              placeholder=${this.placeholder}
              .value=${this._query}
              @input=${(e: Event) => {
                this._query = (e.target as HTMLInputElement).value;
                this._selectedIndex = 0;
              }}
            />
          </div>

          <div
            class="list"
            role="listbox"
            aria-label="Commands"
          >
            ${flat.length === 0 ? html`<div class="empty">${this.emptyMessage}</div>` : nothing}
            ${rows.map(row => row.type === 'group'
              ? html`<div class="group-label">${row.label}</div>`
              : html`
                  <div
                    class="item"
                    role="option"
                    aria-selected=${this._selectedIndex === row.idx}
                    @click=${() => this._select(row.item)}
                    @mouseenter=${() => { this._selectedIndex = row.idx; }}
                  >
                    ${row.item.icon ? html`<span class="item-icon" aria-hidden="true">${row.item.icon}</span>` : nothing}
                    <span class="item-label">${row.item.label}</span>
                    ${row.item.shortcut ? html`<kbd class="item-shortcut">${row.item.shortcut}</kbd>` : nothing}
                  </div>
                `
            )}
          </div>

          <div class="footer">
            <span class="kbd-hint">
              <kbd>↑↓</kbd> Navigate
            </span>
            <span class="kbd-hint">
              <kbd>↵</kbd> Select
            </span>
            <span class="kbd-hint">
              <kbd>Esc</kbd> Close
            </span>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-command': WuCommand;
  }
}
