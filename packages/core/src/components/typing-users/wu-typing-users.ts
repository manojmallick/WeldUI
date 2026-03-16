import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-typing-users.styles.js';

/**
 * Shows "Alice and Bob are typing…" indicator for collaborative contexts.
 *
 * @element wu-typing-users
 */
@customElement('wu-typing-users')
export class WuTypingUsers extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  users: string[] = [];

  private get message() {
    if (this.users.length === 0) return '';
    if (this.users.length === 1) return `${this.users[0]} is typing…`;
    if (this.users.length === 2) return `${this.users[0]} and ${this.users[1]} are typing…`;
    const rest = this.users.length - 2;
    return `${this.users[0]}, ${this.users[1]} and ${rest} other${rest > 1 ? 's' : ''} are typing…`;
  }

  render() {
    const msg = this.message;
    return html`
      <span role="status" aria-live="polite">${msg}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-typing-users': WuTypingUsers;
  }
}
