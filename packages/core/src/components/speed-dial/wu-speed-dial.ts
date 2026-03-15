import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-speed-dial.styles.js';

export interface SpeedDialAction {
  label: string;
  value: string;
  icon?: string;
}

/**
 * A FAB with expanding action buttons (speed dial).
 * @element wu-speed-dial
 * @event wu-action-click - Fires on action click, detail: { value: string }
 */
@customElement('wu-speed-dial')
export class WuSpeedDial extends LitElement {
  static styles = styles;

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ reflect: true }) direction: 'up' | 'left' = 'up';
  @property() icon = '+';
  @property({ type: Array }) actions: SpeedDialAction[] = [];

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this._outsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._outsideClick);
  }

  private _outsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node) && !this.shadowRoot!.contains(e.target as Node)) {
      this.open = false;
    }
  };

  private _clickAction(a: SpeedDialAction) {
    this.open = false;
    this.dispatchEvent(new CustomEvent('wu-action-click', { bubbles: true, composed: true, detail: { value: a.value } }));
  }

  render() {
    return html`
      <div class="container">
        <button class="fab" aria-label="Open actions" aria-expanded=${this.open} @click=${() => { this.open = !this.open; }}>
          ${this.icon}
        </button>
        <div class="actions" ?hidden=${!this.open} role="menu">
          ${this.actions.map(a => html`
            <button class="action-btn" role="menuitem" @click=${() => this._clickAction(a)}>
              ${a.icon ? html`<span class="action-icon" aria-hidden="true">${a.icon}</span>` : ''}
              <span>${a.label}</span>
            </button>`)}
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-speed-dial': WuSpeedDial; } }
