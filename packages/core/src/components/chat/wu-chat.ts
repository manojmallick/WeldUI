import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-chat.styles.js';

/**
 * A chat message bubble.
 *
 * @element wu-chat-bubble
 * @slot - Message content
 */
@customElement('wu-chat-bubble')
export class WuChatBubble extends LitElement {
  static styles = styles;

  @property({ reflect: true }) side: 'left' | 'right' = 'left';
  @property() author = '';
  @property() time = '';
  @property({ type: Boolean, attribute: 'show-avatar' }) showAvatar = false;

  private initials() {
    return this.author.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
  }

  override render() {
    return html`
      <div class="bubble-row">
        ${this.showAvatar && this.side === 'left'
          ? html`<span class="avatar" aria-hidden="true">${this.initials()}</span>`
          : ''}
        <div class="bubble">
          ${this.author ? html`<span class="author">${this.author}</span>` : ''}
          <div class="content"><slot></slot></div>
          ${this.time ? html`<span class="time">${this.time}</span>` : ''}
        </div>
        ${this.showAvatar && this.side === 'right'
          ? html`<span class="avatar" aria-hidden="true">${this.initials()}</span>`
          : ''}
      </div>
    `;
  }
}

/**
 * A chat container that stacks chat bubbles in a conversation layout.
 *
 * @element wu-chat
 * @slot - wu-chat-bubble elements
 */
@customElement('wu-chat')
export class WuChat extends LitElement {
  static styles = styles;

  @property({ type: Number, attribute: 'max-height' }) maxHeight = 400;

  override render() {
    return html`
      <div class="chat-container" style="max-height:${this.maxHeight}px" role="log" aria-label="Chat messages" aria-live="polite">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-chat-bubble': WuChatBubble;
    'wu-chat': WuChat;
  }
}
