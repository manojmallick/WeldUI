import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-mention-input.styles.js';

/**
 * A textarea-like input that detects @-mentions and emits them for resolution.
 *
 * @element wu-mention-input
 * @event wu-input   - detail: { value: string }
 * @event wu-mention - detail: { query: string } — fired when @ followed by chars
 */
@customElement('wu-mention-input')
export class WuMentionInput extends LitElement {
  static styles = styles;

  @property() value = '';
  @property() placeholder = 'Type @ to mention someone…';
  @property({ type: Number }) rows = 3;

  @state() private mentionQuery = '';
  @state() private mentioning = false;

  private handleInput(e: Event) {
    const ta = e.target as HTMLTextAreaElement;
    this.value = ta.value;
    this.dispatchEvent(new CustomEvent('wu-input', { bubbles: true, composed: true, detail: { value: this.value } }));

    // Detect @mention
    const cursor = ta.selectionStart ?? ta.value.length;
    const before = ta.value.slice(0, cursor);
    const match = before.match(/@(\w*)$/);
    if (match) {
      this.mentioning = true;
      this.mentionQuery = match[1];
      this.dispatchEvent(new CustomEvent('wu-mention', { bubbles: true, composed: true, detail: { query: match[1] } }));
    } else {
      this.mentioning = false;
      this.mentionQuery = '';
    }
  }

  override render() {
    return html`
      <div class="wrapper">
        <textarea
          class="textarea ${this.mentioning ? 'mentioning' : ''}"
          rows=${this.rows}
          placeholder=${this.placeholder}
          .value=${this.value}
          @input=${this.handleInput}
          aria-label=${this.placeholder}
        ></textarea>
        ${this.mentioning ? html`<div class="mention-hint" role="status">Mentioning: @${this.mentionQuery}</div>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-mention-input': WuMentionInput;
  }
}
