import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-streaming-text.styles.js';

/**
 * Text that renders character-by-character in a typewriter / streaming style.
 *
 * @element wu-streaming-text
 * @event wu-done - Emitted when streaming completes
 */
@customElement('wu-streaming-text')
export class WuStreamingText extends LitElement {
  static styles = styles;

  /** Full text to stream */
  @property()
  text = '';

  /** Characters per interval tick */
  @property({ type: Number })
  speed = 30;

  /** Whether streaming is complete */
  @property({ type: Boolean, reflect: true })
  done = false;

  @state()
  private displayed = '';

  private _timer: ReturnType<typeof setInterval> | null = null;
  private _index = 0;

  updated(changed: Map<string, unknown>) {
    if (changed.has('text')) {
      this._reset();
    }
  }

  private _reset() {
    if (this._timer) clearInterval(this._timer);
    this._index = 0;
    this.displayed = '';
    this.done = false;
    if (!this.text) return;
    this._timer = setInterval(() => {
      if (this._index < this.text.length) {
        this.displayed += this.text[this._index++];
      } else {
        clearInterval(this._timer!);
        this._timer = null;
        this.done = true;
        this.dispatchEvent(new CustomEvent('wu-done', { bubbles: true, composed: true }));
      }
    }, 1000 / this.speed);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._timer) clearInterval(this._timer);
  }

  render() {
    return html`
      <span class="text" part="text" aria-live="polite">${this.displayed}</span>
      <span class="cursor" aria-hidden="true"></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-streaming-text': WuStreamingText;
  }
}
