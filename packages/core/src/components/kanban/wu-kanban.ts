import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { boardStyles, columnStyles } from './wu-kanban.styles.js';

export interface KanbanCard { id: string; title: string; }
export interface KanbanColumnData { id: string; title: string; cards: KanbanCard[]; }

/**
 * Kanban board container.
 * @element wu-kanban
 * @slot - wu-kanban-column children
 * @event wu-card-move - Card moved, detail: { cardId, fromColumn, toColumn }
 */
@customElement('wu-kanban')
export class WuKanban extends LitElement {
  static styles = boardStyles;
  render() { return html`<div role="region" aria-label="Kanban board"><slot></slot></div>`; }
}

/**
 * A kanban column with drag-and-drop card support.
 * @element wu-kanban-column
 */
@customElement('wu-kanban-column')
export class WuKanbanColumn extends LitElement {
  static styles = columnStyles;

  @property() columnId = '';
  @property() label = '';
  @property({ type: Array }) cards: KanbanCard[] = [];
  @state() private _draggingId: string | null = null;

  private _dragStart(cardId: string) { this._draggingId = cardId; }
  private _dragEnd() { this._draggingId = null; }

  private _dragOver(e: DragEvent) { e.preventDefault(); this.classList.add('drag-over'); }
  private _dragLeave() { this.classList.remove('drag-over'); }

  private _drop(e: DragEvent) {
    e.preventDefault();
    this.classList.remove('drag-over');
    const cardId = e.dataTransfer?.getData('text/plain');
    if (!cardId) return;
    this.dispatchEvent(new CustomEvent('wu-card-move', { bubbles: true, composed: true, detail: { cardId, toColumn: this.columnId } }));
  }

  render() {
    return html`
      <div class="header">
        <span>${this.label}</span>
        <span class="count">${this.cards.length}</span>
      </div>
      <div class="cards" @dragover=${this._dragOver} @dragleave=${this._dragLeave} @drop=${this._drop}>
        ${this.cards.map(card => html`
          <div class="card ${this._draggingId === card.id ? 'dragging' : ''}"
            draggable="true"
            @dragstart=${(e: DragEvent) => { e.dataTransfer?.setData('text/plain', card.id); this._dragStart(card.id); }}
            @dragend=${this._dragEnd}>
            ${card.title}
          </div>`)}
      </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-kanban': WuKanban;
    'wu-kanban-column': WuKanbanColumn;
  }
}
