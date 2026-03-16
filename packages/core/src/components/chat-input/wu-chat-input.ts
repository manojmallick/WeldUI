import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-chat-input.styles.js';

/**
 * Multiline prompt input with send, attach, and voice buttons.
 *
 * @element wu-chat-input
 * @event wu-submit - Emitted with `{ value: string }` when user sends a message
 * @event wu-attach - Emitted when the attach button is clicked
 */
@customElement('wu-chat-input')
export class WuChatInput extends LitElement {
  static styles = styles;

  @property()
  placeholder = 'Ask anything…';

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean, attribute: 'show-attach' })
  showAttach = false;

  @property({ type: Boolean, attribute: 'show-voice' })
  showVoice = false;

  @state()
  private value = '';

  private onInput(e: Event) {
    this.value = (e.target as HTMLTextAreaElement).value;
  }

  private onKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.submit();
    }
  }

  private submit() {
    const trimmed = this.value.trim();
    if (!trimmed || this.disabled) return;
    this.dispatchEvent(new CustomEvent('wu-submit', {
      bubbles: true,
      composed: true,
      detail: { value: trimmed },
    }));
    this.value = '';
    const ta = this.shadowRoot!.querySelector('textarea');
    if (ta) ta.value = '';
  }

  render() {
    return html`
      <div class="wrapper" part="wrapper">
        <textarea
          part="textarea"
          .value=${this.value}
          placeholder=${this.placeholder}
          ?disabled=${this.disabled}
          rows="1"
          @input=${this.onInput}
          @keydown=${this.onKeyDown}
          aria-label="Message input"
        ></textarea>
        <div class="actions">
          ${this.showAttach
            ? html`<button
                type="button"
                aria-label="Attach file"
                ?disabled=${this.disabled}
                @click=${() => this.dispatchEvent(new CustomEvent('wu-attach', { bubbles: true, composed: true }))}
              >📎</button>`
            : ''}
          ${this.showVoice
            ? html`<button type="button" aria-label="Voice input" ?disabled=${this.disabled}>🎤</button>`
            : ''}
          <button
            type="button"
            class="send"
            aria-label="Send message"
            ?disabled=${this.disabled || !this.value.trim()}
            @click=${this.submit}
          >↑</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-chat-input': WuChatInput;
  }
}
