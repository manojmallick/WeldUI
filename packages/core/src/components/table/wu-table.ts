import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-table.styles.js';

export interface WuTableColumn {
  key: string;
  label: string;
  sortable?: boolean;
  width?: string;
}

/**
 * A data table component with sortable columns, row selection, and sticky header.
 *
 * @element wu-table
 *
 * @event wu-sort - Emitted when a sortable column header is clicked. Detail: `{ key, direction }`
 * @event wu-select - Emitted when row selection changes. Detail: `{ selected: string[] }`
 *
 * @csspart base - The scrollable wrapper
 * @csspart table - The table element
 *
 * @cssprop --wu-table-border - Border color
 * @cssprop --wu-table-header-bg - Header background color
 * @cssprop --wu-table-row-hover-bg - Row hover background
 * @cssprop --wu-table-row-selected-bg - Selected row background
 */
@customElement('wu-table')
export class WuTable extends LitElement {
  static styles = styles;

  /** Column definitions */
  @property({ type: Array })
  columns: WuTableColumn[] = [];

  /** Row data — each item must have a unique `id` field */
  @property({ type: Array })
  data: Record<string, unknown>[] = [];

  /** Allow row selection via checkboxes */
  @property({ type: Boolean, attribute: 'selectable' })
  selectable = false;

  /** Currently sorted column key */
  @property({ attribute: 'sort-key' })
  sortKey = '';

  /** Current sort direction */
  @property({ attribute: 'sort-direction' })
  sortDirection: 'asc' | 'desc' = 'asc';

  /** Empty state message */
  @property({ attribute: 'empty-message' })
  emptyMessage = 'No data available.';

  @state() private _selected: Set<string> = new Set();

  private _sort(key: string) {
    if (this.sortKey === key) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortKey = key;
      this.sortDirection = 'asc';
    }
    this.dispatchEvent(new CustomEvent('wu-sort', {
      bubbles: true,
      composed: true,
      detail: { key: this.sortKey, direction: this.sortDirection },
    }));
  }

  private _toggleRow(id: string) {
    const next = new Set(this._selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    this._selected = next;
    this._emitSelect();
  }

  private _toggleAll(checked: boolean) {
    this._selected = checked
      ? new Set(this.data.map((r) => String(r['id'] ?? '')))
      : new Set();
    this._emitSelect();
  }

  private _emitSelect() {
    this.dispatchEvent(new CustomEvent('wu-select', {
      bubbles: true,
      composed: true,
      detail: { selected: [...this._selected] },
    }));
  }

  private _sortIcon(key: string) {
    const active = this.sortKey === key;
    const dir = this.sortDirection;
    return html`
      <span class="sort-icon">
        <svg viewBox="0 0 10 14" fill="currentColor" aria-hidden="true">
          <path d="M5 0L9 5H1L5 0Z" opacity="${active && dir === 'asc' ? 1 : 0.3}"/>
          <path d="M5 14L1 9H9L5 14Z" opacity="${active && dir === 'desc' ? 1 : 0.3}"/>
        </svg>
      </span>
    `;
  }

  render() {
    const allChecked = this.data.length > 0 && this._selected.size === this.data.length;
    return html`
      <div class="wrapper" part="base">
        <table part="table">
          <thead>
            <tr>
              ${this.selectable ? html`
                <th class="select-cell">
                  <input
                    type="checkbox"
                    .checked=${allChecked}
                    @change=${(e: Event) => this._toggleAll((e.target as HTMLInputElement).checked)}
                    aria-label="Select all rows"
                  />
                </th>
              ` : nothing}
              ${this.columns.map((col) => html`
                <th
                  class=${['', col.sortable ? 'sortable' : '', this.sortKey === col.key ? 'sorted' : ''].join(' ').trim()}
                  style=${col.width ? `width:${col.width}` : ''}
                  @click=${col.sortable ? () => this._sort(col.key) : undefined}
                  aria-sort=${this.sortKey === col.key ? (this.sortDirection === 'asc' ? 'ascending' : 'descending') : 'none'}
                >
                  <span class="th-inner">
                    ${col.label}
                    ${col.sortable ? this._sortIcon(col.key) : nothing}
                  </span>
                </th>
              `)}
            </tr>
          </thead>
          <tbody>
            ${this.data.length === 0 ? html`
              <tr>
                <td class="empty" colspan=${this.columns.length + (this.selectable ? 1 : 0)}>
                  ${this.emptyMessage}
                </td>
              </tr>
            ` : this.data.map((row) => {
              const id = String(row['id'] ?? '');
              const selected = this._selected.has(id);
              return html`
                <tr class=${selected ? 'selected' : ''}>
                  ${this.selectable ? html`
                    <td class="select-cell">
                      <input
                        type="checkbox"
                        .checked=${selected}
                        @change=${() => this._toggleRow(id)}
                        aria-label="Select row"
                      />
                    </td>
                  ` : nothing}
                  ${this.columns.map((col) => html`
                    <td>${row[col.key] ?? ''}</td>
                  `)}
                </tr>
              `;
            })}
          </tbody>
        </table>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-table': WuTable;
  }
}
