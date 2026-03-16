import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-presence.styles.js';

export interface PresenceUser {
  id: string;
  name: string;
  avatar?: string;
  color?: string;
}

/**
 * Shows who else is currently viewing or editing a document (avatar stack).
 *
 * @element wu-presence
 */
@customElement('wu-presence')
export class WuPresence extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  users: PresenceUser[] = [];

  /** Maximum visible avatars before overflow */
  @property({ type: Number })
  max = 5;

  @property({ type: Boolean, attribute: 'show-label' })
  showLabel = false;

  private initials(name: string) {
    return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  }

  render() {
    const visible = this.users.slice(0, this.max);
    const overflow = this.users.length - visible.length;
    const label = this.users.length === 0
      ? 'No one else here'
      : `${this.users.length} viewer${this.users.length > 1 ? 's' : ''}`;

    return html`
      <div class="avatars" aria-label="${label}">
        ${overflow > 0 ? html`<div class="avatar overflow">+${overflow}</div>` : ''}
        ${[...visible].reverse().map(u => html`
          <div class="avatar" style=${u.color ? `background:${u.color}` : ''} title=${u.name} aria-label=${u.name}>
            ${u.avatar ? html`<img src=${u.avatar} alt=${u.name}>` : this.initials(u.name)}
          </div>
        `)}
      </div>
      ${this.showLabel ? html`<span class="label">${label}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-presence': WuPresence;
  }
}
