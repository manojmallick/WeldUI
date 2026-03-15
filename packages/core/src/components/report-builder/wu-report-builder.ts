import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-report-builder.styles.js';

export interface ReportColumn {
  id: string;
  label: string;
  selected?: boolean;
}

/**
 * A checklist-style report column/metric selector with reordering.
 *
 * @element wu-report-builder
 *
 * @event wu-change - Emitted when selection changes. detail: { selected: string[] }
 */
@customElement('wu-report-builder')
export class WuReportBuilder extends LitElement {
  static styles = styles;

  /** Available columns */
  @property({ type: Array }) columns: ReportColumn[] = [];

  @state() private items: ReportColumn[] = [];

  override willUpdate(changed: Map<string, unknown>) {
    if (changed.has('columns')) {
      this.items = this.columns.map(c => ({ ...c, selected: c.selected ?? false }));
    }
  }

  private toggle(id: string) {
    this.items = this.items.map(c => c.id === id ? { ...c, selected: !c.selected } : c);
    this.emitChange();
  }

  private move(index: number, dir: -1 | 1) {
    const next = index + dir;
    if (next < 0 || next >= this.items.length) return;
    const arr = [...this.items];
    [arr[index], arr[next]] = [arr[next], arr[index]];
    this.items = arr;
    this.emitChange();
  }

  private selectAll() {
    this.items = this.items.map(c => ({ ...c, selected: true }));
    this.emitChange();
  }

  private selectNone() {
    this.items = this.items.map(c => ({ ...c, selected: false }));
    this.emitChange();
  }

  private emitChange() {
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true, composed: true,
      detail: { selected: this.items.filter(c => c.selected).map(c => c.id) }
    }));
  }

  override render() {
    const selectedCount = this.items.filter(c => c.selected).length;
    return html`
      <div class="builder">
        <div class="builder-header">
          <span>Columns</span>
          <span class="count">${selectedCount} / ${this.items.length} selected</span>
        </div>
        <ul class="column-list" role="list">
          ${repeat(this.items, c => c.id, (col, i) => html`
            <li class="column-item">
              <label>
                <input
                  type="checkbox"
                  .checked=${col.selected ?? false}
                  @change=${() => this.toggle(col.id)}
                  aria-label=${col.label}
                />
                ${col.label}
              </label>
              <div class="reorder">
                <button class="reorder-btn" type="button" aria-label="Move up" ?disabled=${i === 0} @click=${() => this.move(i, -1)}>▲</button>
                <button class="reorder-btn" type="button" aria-label="Move down" ?disabled=${i === this.items.length - 1} @click=${() => this.move(i, 1)}>▼</button>
              </div>
            </li>
          `)}
        </ul>
        <div class="footer">
          <button class="select-all-btn" type="button" @click=${this.selectAll}>Select all</button>
          <button class="select-all-btn" type="button" @click=${this.selectNone}>Clear all</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-report-builder': WuReportBuilder; }
}
