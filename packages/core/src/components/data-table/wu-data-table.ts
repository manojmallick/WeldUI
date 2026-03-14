import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-data-table.styles.js';
import '../search/wu-search.js';

/** Column definition for `<wu-data-table>` */
export interface WuDataTableColumn {
  /** Unique key matching a property on each row object */
  key: string;
  /** Column header label */
  label: string;
  /** Whether the column is sortable. Default `false` */
  sortable?: boolean;
  /** Optional fixed column width (e.g., `'120px'`) */
  width?: string;
}

type SortDirection = 'asc' | 'desc' | null;

/**
 * A data table with server-side pagination, sortable columns, row selection,
 * and an optional integrated search bar.
 *
 * All data operations (pagination, sorting, searching) are delegated to the
 * parent via events — the component never mutates the `rows` array itself.
 *
 * @element wu-data-table
 *
 * @event wu-page-change      - Page changed. detail: `{ page: number; pageSize: number }`
 * @event wu-sort-change      - Sort changed. detail: `{ key: string; direction: 'asc' | 'desc' | null }`
 * @event wu-search-change    - Search changed. detail: `{ value: string }`
 * @event wu-selection-change - Selection changed. detail: `{ selected: Record<string, unknown>[] }`
 *
 * @csspart container  - The table border/container wrapper
 * @csspart table      - The `<table>` element
 * @csspart toolbar    - The toolbar containing search
 * @csspart footer     - The pagination footer
 *
 * @cssprop --wu-dt-border      - Table and cell border colour
 * @cssprop --wu-dt-row-hover   - Row hover background
 * @cssprop --wu-dt-header-bg   - Header row background
 * @cssprop --wu-dt-selected-bg - Selected row background
 *
 * @example
 * ```html
 * <wu-data-table
 *   .columns="${columns}"
 *   .rows="${rows}"
 *   total="150"
 *   page="1"
 *   page-size="10"
 *   searchable
 *   selectable
 * ></wu-data-table>
 * ```
 */
@customElement('wu-data-table')
export class WuDataTable extends LitElement {
  static styles = styles;

  /** Column definitions */
  @property({ type: Array })
  columns: WuDataTableColumn[] = [];

  /** Row data — plain objects whose keys match `column.key` values */
  @property({ type: Array })
  rows: Record<string, unknown>[] = [];

  /** Total row count across all pages (for pagination display) */
  @property({ type: Number })
  total = 0;

  /** Current page (1-based) */
  @property({ type: Number })
  page = 1;

  /** Rows per page */
  @property({ type: Number, attribute: 'page-size' })
  pageSize = 10;

  /** Show loading overlay */
  @property({ type: Boolean, reflect: true })
  loading = false;

  /** Enable row checkbox selection */
  @property({ type: Boolean })
  selectable = false;

  /** Show a search bar above the table */
  @property({ type: Boolean })
  searchable = false;

  /** Message shown when there are no rows */
  @property({ attribute: 'empty-message' })
  emptyMessage = 'No data to display.';

  @state()
  private _selected: Set<Record<string, unknown>> = new Set();

  @state()
  private _sortKey: string | null = null;

  @state()
  private _sortDir: SortDirection = null;

  private _emitPageChange(page: number) {
    this.dispatchEvent(new CustomEvent('wu-page-change', {
      bubbles: true, composed: true,
      detail: { page, pageSize: this.pageSize },
    }));
  }

  private _emitSortChange(key: string, direction: SortDirection) {
    this.dispatchEvent(new CustomEvent('wu-sort-change', {
      bubbles: true, composed: true,
      detail: { key, direction },
    }));
  }

  private _emitSelectionChange() {
    this.dispatchEvent(new CustomEvent('wu-selection-change', {
      bubbles: true, composed: true,
      detail: { selected: [...this._selected] },
    }));
  }

  private _handleSort(col: WuDataTableColumn) {
    if (!col.sortable) return;
    if (this._sortKey === col.key) {
      const next: SortDirection = this._sortDir === 'asc' ? 'desc' : this._sortDir === 'desc' ? null : 'asc';
      this._sortDir = next;
      if (next === null) this._sortKey = null;
    } else {
      this._sortKey = col.key;
      this._sortDir = 'asc';
    }
    this._emitSortChange(this._sortKey ?? col.key, this._sortDir);
  }

  private _handleSelectRow(row: Record<string, unknown>) {
    if (this._selected.has(row)) {
      this._selected.delete(row);
    } else {
      this._selected.add(row);
    }
    this._selected = new Set(this._selected);
    this._emitSelectionChange();
  }

  private _handleSelectAll(e: Event) {
    const checked = (e.target as HTMLInputElement).checked;
    this._selected = checked ? new Set(this.rows) : new Set();
    this._emitSelectionChange();
  }

  private _handleSearch(e: CustomEvent) {
    this.dispatchEvent(new CustomEvent('wu-search-change', {
      bubbles: true, composed: true,
      detail: { value: e.detail.value },
    }));
  }

  private _sortIcon(col: WuDataTableColumn) {
    if (!col.sortable) return nothing;
    const isActive = this._sortKey === col.key;
    const dir = isActive ? this._sortDir : null;
    const d = dir === 'asc'
      ? 'M6 9l4-4 4 4'
      : dir === 'desc'
        ? 'M6 7l4 4 4-4'
        : 'M6 8.5l3.5-3 3.5 3M6 11.5l3.5 3 3.5-3';
    return html`
      <span class="sort-icon" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="${d}" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    `;
  }

  private _buildPages(totalPages: number): (number | '…')[] {
    const pages: (number | '…')[] = [];
    const delta = 2;
    const range: number[] = [];
    for (let i = Math.max(2, this.page - delta); i <= Math.min(totalPages - 1, this.page + delta); i++) {
      range.push(i);
    }
    if (this.page - delta > 2) range.unshift(-1);
    if (this.page + delta < totalPages - 1) range.push(-2);

    pages.push(1);
    range.forEach(p => pages.push(p < 0 ? '…' : p));
    if (totalPages > 1) pages.push(totalPages);
    return pages;
  }


  render() {
    const allSelected = this.rows.length > 0 && this._selected.size === this.rows.length;
    const someSelected = this._selected.size > 0 && !allSelected;
    const totalPages = Math.max(1, Math.ceil(this.total / this.pageSize));
    const noPages = totalPages <= 1 && this.total <= this.pageSize;
    const start = Math.min((this.page - 1) * this.pageSize + 1, Math.max(this.total, 0));
    const end   = Math.min(this.page * this.pageSize, this.total);
    const pages = this._buildPages(totalPages);

    return html`
      <div class="toolbar" part="toolbar" ?hidden=${!this.searchable}>
        <wu-search
          placeholder="Search…"
          @wu-search=${this._handleSearch}
        ></wu-search>
      </div>

      <div class="container" part="container">
        <div class="loading-overlay" ?hidden=${!this.loading}>
          <span class="spinner" role="status" aria-label="Loading"></span>
        </div>

        <div class="table-wrap">
          <table part="table" role="grid" aria-rowcount=${this.total}>
            <thead>
              <tr>
                ${this.selectable
                  ? html`
                      <th class="checkbox-col">
                        <input
                          type="checkbox"
                          aria-label="Select all rows"
                          .checked=${allSelected}
                          .indeterminate=${someSelected}
                          @change=${this._handleSelectAll}
                        />
                      </th>
                    `
                  : nothing}
                ${this.columns.map(col => html`
                  <th
                    class="${col.sortable ? 'sortable' : ''} ${this._sortKey === col.key ? 'sorted' : ''}"
                    style="${col.width ? `width:${col.width}` : ''}"
                    @click=${() => this._handleSort(col)}
                    aria-sort=${this._sortKey === col.key
                      ? (this._sortDir === 'asc' ? 'ascending' : 'descending')
                      : nothing}
                  >
                    ${col.label}${this._sortIcon(col)}
                  </th>
                `)}
              </tr>
            </thead>
            <tbody>
              ${this.rows.length === 0
                ? html`
                    <tr class="empty-row">
                      <td colspan="${this.columns.length + (this.selectable ? 1 : 0)}">
                        ${this.emptyMessage}
                      </td>
                    </tr>
                  `
                : this.rows.map(row => html`
                    <tr
                      class="${this._selected.has(row) ? 'selected' : ''}"
                      aria-selected=${this._selected.has(row) ? 'true' : 'false'}
                    >
                      ${this.selectable
                        ? html`
                            <td class="checkbox-col">
                              <input
                                type="checkbox"
                                aria-label="Select row"
                                .checked=${this._selected.has(row)}
                                @change=${() => this._handleSelectRow(row)}
                              />
                            </td>
                          `
                        : nothing}
                      ${this.columns.map(col => html`
                        <td title=${String(row[col.key] ?? '')}>
                          ${row[col.key] != null ? String(row[col.key]) : '—'}
                        </td>
                      `)}
                    </tr>
                  `)}
            </tbody>
          </table>
        </div>

        <div class="footer" part="footer" ?hidden=${noPages}>
          <span class="footer-info">
            ${this.total > 0 ? `${start}–${end} of ${this.total}` : 'No results'}
          </span>
          <nav class="pagination-btns" aria-label="Pagination">
            <button
              class="page-btn"
              ?disabled=${this.page <= 1}
              aria-label="Previous page"
              @click=${() => this._emitPageChange(this.page - 1)}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M8 2L4 6l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            ${pages.map(p =>
              p === '…'
                ? html`<span style="padding:0 4px;color:var(--wu-color-text-secondary)">…</span>`
                : html`
                    <button
                      class="page-btn ${p === this.page ? 'active' : ''}"
                      aria-label="Page ${p}"
                      aria-current=${p === this.page ? 'page' : nothing}
                      @click=${() => this._emitPageChange(p as number)}
                    >${p}</button>
                  `
            )}
            <button
              class="page-btn"
              ?disabled=${this.page >= totalPages}
              aria-label="Next page"
              @click=${() => this._emitPageChange(this.page + 1)}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M4 2l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-data-table': WuDataTable;
  }
}
