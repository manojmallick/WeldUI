import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-context-menu.styles.js';

export interface ContextMenuItem {
  label: string;
  value: string;
  disabled?: boolean;
  danger?: boolean;
  separator?: boolean;
  icon?: string;
}

/**
 * A right-click context menu component.
 * @element wu-context-menu
 * @event wu-select - Fires when item selected, detail: { value: string }
 * @event wu-close - Fires when menu is closed
 */
@customElement('wu-context-menu')
export class WuContextMenu extends LitElement {
  static styles = styles;
  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: Number }) x = 0;
  @property({ type: Number }) y = 0;
  @property({ type: Array }) items: ContextMenuItem[] = [];

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._close);
    document.addEventListener('keydown', this._onKey);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._close);
    document.removeEventListener('keydown', this._onKey);
  }

  private _close = () => {
    if (this.open) {
      this.open = false;
      this.dispatchEvent(new CustomEvent('wu-close', { bubbles: true, composed: true }));
    }
  };

  private _onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') this._close(); };

  private _select(item: ContextMenuItem) {
    if (item.disabled) return;
    this.dispatchEvent(new CustomEvent('wu-select', { bubbles: true, composed: true, detail: { value: item.value } }));
    this._close();
  }

  render() {
    return html`
      <div role="menu" style="left:${this.x}px;top:${this.y}px" @click=${(e: Event) => e.stopPropagation()}>
        ${this.items.map(item => item.separator
          ? html`<div class="separator" role="separator"></div>`
          : html`<button class="item ${item.danger ? 'danger' : ''}" role="menuitem" ?disabled=${item.disabled} @click=${() => this._select(item)}>
              ${item.icon ? html`<span>${item.icon}</span>` : ''} ${item.label}
            </button>`
        )}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-context-menu': WuContextMenu; } }
