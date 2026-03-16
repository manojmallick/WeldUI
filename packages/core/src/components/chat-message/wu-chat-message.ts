import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-chat-message.styles.js';

/**
 * A single chat message bubble supporting text, code, image, and tool-call types.
 *
 * @element wu-chat-message
 * @slot - Message content
 */
@customElement('wu-chat-message')
export class WuChatMessage extends LitElement {
  static styles = styles;

  /** Role of the message author */
  @property({ reflect: true })
  role: 'user' | 'assistant' | 'system' = 'user';

  /** Display name shown above the bubble */
  @property()
  author = '';

  /** Timestamp string shown below the bubble */
  @property()
  timestamp = '';

  /** Content type for special rendering */
  @property()
  type: 'text' | 'code' | 'tool-call' = 'text';

  /** Programming language for code blocks */
  @property()
  language = '';

  /** Tool name for tool-call type */
  @property({ attribute: 'tool-name' })
  toolName = '';

  render() {
    return html`
      <div class="message" part="message">
        ${this.author
          ? html`<span class="meta">${this.author}</span>`
          : ''}
        <div class="bubble" part="bubble">
          ${this.type === 'code'
            ? html`<div class="code-block" part="code">${this.language ? html`<span class="lang">${this.language}</span>` : ''}<slot></slot></div>`
            : this.type === 'tool-call'
            ? html`<div class="tool-call" part="tool-call">${this.toolName ? html`<strong>${this.toolName}</strong><br>` : ''}<slot></slot></div>`
            : html`<slot></slot>`}
        </div>
        ${this.timestamp
          ? html`<span class="meta">${this.timestamp}</span>`
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-chat-message': WuChatMessage;
  }
}
