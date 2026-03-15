import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-sortable.styles.js';

/**
 * Drag-and-drop sortable list.
 * @element wu-sortable
 * @event wu-sort - Fires after reorder, detail: { items: unknown[], from: number, to: number }
 */
@customElement('wu-sortable')
export class WuSortable extends LitElement {
  static styles = styles;

  @property({ type: Array }) items: { id: string; label: string; }[] = [];
  @state() private _draggingId: string | null = null;
  @state() private _overIndex: number | null = null;

  private _dragStart(id: string) { this._draggingId = id; }

  private _dragOver(e: DragEvent, i: number) {
    e.preventDefault();
    this._overIndex = i;
  }

  private _drop(i: number) {
    if (this._draggingId === null) return;
    const from = this.items.findIndex(x => x.id === this._draggingId);
    if (from === i) { this._draggingId = null; this._overIndex = null; return; }
    const updated = [...this.items];
    const [moved] = updated.splice(from, 1);
    updated.splice(i, 0, moved);
    this.items = updated;
    this.dispatchEvent(new CustomEvent('wu-sort', { bubbles: true, composed: true, detail: { items: updated, from, to: i } }));
    this._draggingId = null;
    this._overIndex = null;
  }

  private _dragEnd() { this._draggingId = null; this._overIndex = null; }

  render() {
    return html`
      <ul class="list" role="list">
        ${this.items.map((item, i) => html`
          <li class="item ${this._draggingId === item.id ? 'dragging' : ''} ${this._overIndex === i ? 'drag-over' : ''}"
            draggable="true"
            @dragstart=${() => this._dragStart(item.id)}
            @dragover=${(e: DragEvent) => this._dragOver(e, i)}
            @drop=${() => this._drop(i)}
            @dragend=${this._dragEnd}>
            <span class="handle" aria-hidden="true">⠿</span>
            <span class="content">${item.label}</span>
          </li>`)}
      </ul>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-sortable': WuSortable; } }
