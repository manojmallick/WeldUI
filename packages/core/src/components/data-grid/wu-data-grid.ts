import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-data-grid.styles.js';

export interface WuDataGridColumn {
  key: string;
  label: string;
  sortable?: boolean;
  filterable?: boolean;
  width?: string;
}

/**
 * A data grid component with filtering, sorting, and server-side pagination.
 *
 * @element wu-data-grid
 *
 * @event wu-sort-change - Emitted when sort changes. Detail: `{ key, direction }`
 * @event wu-filter-change - Emitted when global filter changes. Detail: `{ query }`
 * @event wu-page-change - Emitted when page changes. Detail: `{ page, pageSize }`
 *
 * @csspart grid - Root grid container
 *
 * @cssprop --wu-dg-border - Border color
 * @cssprop --wu-dg-header-bg - Header background
 * @cssprop --wu-dg-row-hover - Row hover background
 * @cssprop --wu-dg-row-height - Row height
 */
@customElement('wu-data-grid')
export class WuDataGrid extends LitElement {
  static styles = styles;

  /** Column definitions */
  @property({ type: Array })
  columns: WuDataGridColumn[] = [];

  /** Row data — each item should have an `id` field */
  @property({ type: Array })
  data: Record<string, unknown>[] = [];

  /** Total number of rows (for server-side pagination) */
  @property({ type: Number, attribute: 'total-rows' })
  totalRows = 0;

  /** Current page (1-based) */
  @property({ type: Number })
  page = 1;

  /** Rows per page */
  @property({ type: Number, attribute: 'page-size' })
  pageSize = 10;

  /** Show the filter/search toolbar */
  @property({ type: Boolean, attribute: 'show-toolbar' })
  showToolbar = true;

  /** Empty state message */
  @property({ attribute: 'empty-message' })
  emptyMessage = 'No data to display.';

  @state() private _sortKey = '';
  @state() private _sortDir: 'asc' | 'desc' = 'asc';
  @state() private _filter = '';

  private get _filteredData(): Record<string, unknown>[] {
    if (!this._filter.trim()) return this.data;
    const q = this._filter.toLowerCase();
    return this.data.filter((row) =>
      this.columns.some((col) => String(row[col.key] ?? '').toLowerCase().includes(q))
    );
  }

  private get _sortedData(): Record<string, unknown>[] {
    if (!this._sortKey) return this._filteredData;
    return [...this._filteredData].sort((a, b) => {
      const av = String(a[this._sortKey] ?? '');
      const bv = String(b[this._sortKey] ?? '');
      const cmp = av.localeCompare(bv);
      return this._sortDir === 'asc' ? cmp : -cmp;
    });
  }

  private get _pageData(): Record<string, unknown>[] {
    // If totalRows > data.length, assume server-side pagination and use data as-is
    if (this.totalRows > this.data.length) return this._sortedData;
    const start = (this.page - 1) * this.pageSize;
    return this._sortedData.slice(start, start + this.pageSize);
  }

  private get _totalPages(): number {
    const total = this.totalRows || this._filteredData.length;
    return Math.max(1, Math.ceil(total / this.pageSize));
  }

  private _sort(key: string, sortable?: boolean) {
    if (!sortable) return;
    if (this._sortKey === key) {
      this._sortDir = this._sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this._sortKey = key;
      this._sortDir = 'asc';
    }
    this.dispatchEvent(new CustomEvent('wu-sort-change', {
      bubbles: true,
      composed: true,
      detail: { key: this._sortKey, direction: this._sortDir },
    }));
  }

  private _onFilter(e: Event) {
    this._filter = (e.target as HTMLInputElement).value;
    this.page = 1;
    this.dispatchEvent(new CustomEvent('wu-filter-change', {
      bubbles: true,
      composed: true,
      detail: { query: this._filter },
    }));
  }

  private _goPage(p: number) {
    if (p < 1 || p > this._totalPages) return;
    this.page = p;
    this.dispatchEvent(new CustomEvent('wu-page-change', {
      bubbles: true,
      composed: true,
      detail: { page: this.page, pageSize: this.pageSize },
    }));
  }

  private _onPageSize(e: Event) {
    this.pageSize = Number((e.target as HTMLSelectElement).value);
    this.page = 1;
    this.dispatchEvent(new CustomEvent('wu-page-change', {
      bubbles: true,
      composed: true,
      detail: { page: this.page, pageSize: this.pageSize },
    }));
  }

  private _pageButtons() {
    const total = this._totalPages;
    const current = this.page;
    const pages: (number | 'dots')[] = [];
    if (total <= 7) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (current > 3) pages.push('dots');
      for (let i = Math.max(2, current - 1); i <= Math.min(total - 1, current + 1); i++) pages.push(i);
      if (current < total - 2) pages.push('dots');
      pages.push(total);
    }
    return pages;
  }

  render() {
    const rows = this._pageData;
    const totalDisplay = this.totalRows || this._filteredData.length;

    return html`
      <div class="grid" part="grid">
        ${this.showToolbar ? html`
          <div class="toolbar">
            <div class="search-wrap">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true">
                <circle cx="6.5" cy="6.5" r="4.5"/>
                <path d="M10 10l3 3"/>
              </svg>
              <input
                class="search-input"
                type="text"
                placeholder="Filter…"
                aria-label="Filter rows"
                .value=${this._filter}
                @input=${this._onFilter}
              />
            </div>
            <span class="row-count" aria-live="polite">${totalDisplay} row${totalDisplay !== 1 ? 's' : ''}</span>
          </div>
        ` : nothing}

        <div class="header-row" role="row">
          ${this.columns.map((col) => html`
            <div
              class=${`header-cell${col.sortable ? ' sortable' : ''}${this._sortKey === col.key ? ' sorted' : ''}`}
              style=${col.width ? `flex: 0 0 ${col.width}` : ''}
              role="columnheader"
              aria-sort=${this._sortKey === col.key ? (this._sortDir === 'asc' ? 'ascending' : 'descending') : 'none'}
              @click=${() => this._sort(col.key, col.sortable)}
            >
              ${col.label}
              ${col.sortable && this._sortKey === col.key
                ? html`<span class="sort-indicator">${this._sortDir === 'asc' ? '▲' : '▼'}</span>`
                : nothing}
            </div>
          `)}
        </div>

        <div class="body" role="rowgroup">
          ${rows.length === 0 ? html`<div class="empty">${this.emptyMessage}</div>` : nothing}
          ${rows.map((row, i) => html`
            <div class="data-row" role="row" aria-rowindex=${(this.page - 1) * this.pageSize + i + 2}>
              ${this.columns.map((col) => html`
                <div
                  class="cell"
                  role="gridcell"
                  style=${col.width ? `flex: 0 0 ${col.width}` : ''}
                >${row[col.key] ?? ''}</div>
              `)}
            </div>
          `)}
        </div>

        ${this._totalPages > 1 ? html`
          <div class="pagination-bar" role="navigation" aria-label="Pagination">
            <div style="display:flex;align-items:center;gap:8px">
              <span class="page-info">
                Rows per page:
              </span>
              <select class="page-size-select" aria-label="Rows per page" @change=${this._onPageSize}>
                ${[10, 25, 50, 100].map((n) => html`
                  <option value=${n} ?selected=${this.pageSize === n}>${n}</option>
                `)}
              </select>
              <span class="page-info">
                ${Math.min((this.page - 1) * this.pageSize + 1, totalDisplay)}–${Math.min(this.page * this.pageSize, totalDisplay)} of ${totalDisplay}
              </span>
            </div>
            <div class="page-controls">
              <button class="page-btn" ?disabled=${this.page === 1} @click=${() => this._goPage(this.page - 1)} aria-label="Previous page">‹</button>
              ${this._pageButtons().map((p) =>
                p === 'dots'
                  ? html`<span class="page-btn" aria-hidden="true" style="border:none;background:none;cursor:default">…</span>`
                  : html`<button class="page-btn ${this.page === p ? 'active' : ''}" aria-label="Page ${p}" aria-current=${this.page === p ? 'page' : nothing} @click=${() => this._goPage(p as number)}>${p}</button>`
              )}
              <button class="page-btn" ?disabled=${this.page === this._totalPages} @click=${() => this._goPage(this.page + 1)} aria-label="Next page">›</button>
            </div>
          </div>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-data-grid': WuDataGrid;
  }
}
