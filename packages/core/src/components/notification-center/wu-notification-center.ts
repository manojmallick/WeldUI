import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-notification-center.styles.js';

export interface Notification {
  id: string;
  title: string;
  body?: string;
  time?: string;
  read?: boolean;
}

/**
 * Notification center with bell icon.
 * @element wu-notification-center
 * @event wu-notification-click - Fires on notification click, detail: { id: string }
 */
@customElement('wu-notification-center')
export class WuNotificationCenter extends LitElement {
  static styles = styles;

  @property({ type: Array }) notifications: Notification[] = [];
  @state() private _open = false;

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
      this._open = false;
    }
  };

  private get _unreadCount() { return this.notifications.filter(n => !n.read).length; }

  private _markAllRead() {
    this.notifications = this.notifications.map(n => ({ ...n, read: true }));
    this.dispatchEvent(new CustomEvent('wu-mark-all-read', { bubbles: true, composed: true }));
  }

  private _clickItem(n: Notification) {
    n.read = true;
    this.notifications = [...this.notifications];
    this.dispatchEvent(new CustomEvent('wu-notification-click', { bubbles: true, composed: true, detail: { id: n.id } }));
  }

  render() {
    const unread = this._unreadCount;
    return html`
      <button class="trigger" aria-label="Notifications${unread ? `, ${unread} unread` : ''}" @click=${() => { this._open = !this._open; }}>
        🔔
        ${unread > 0 ? html`<span class="badge" aria-hidden="true">${unread > 99 ? '99+' : unread}</span>` : ''}
      </button>
      <div class="panel" ?hidden=${!this._open} role="region" aria-label="Notifications">
        <div class="header">
          <span class="header-title">Notifications</span>
          ${unread > 0 ? html`<button class="mark-all-btn" @click=${this._markAllRead}>Mark all read</button>` : ''}
        </div>
        ${this.notifications.length === 0
          ? html`<div class="empty">No notifications</div>`
          : this.notifications.map(n => html`
            <div class="item ${n.read ? 'read' : 'unread'}" role="button" tabindex="0" @click=${() => this._clickItem(n)}>
              <div class="dot"></div>
              <div>
                <div class="item-title">${n.title}</div>
                ${n.body ? html`<div class="item-body">${n.body}</div>` : ''}
                ${n.time ? html`<div class="item-time">${n.time}</div>` : ''}
              </div>
            </div>`)}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-notification-center': WuNotificationCenter; } }
