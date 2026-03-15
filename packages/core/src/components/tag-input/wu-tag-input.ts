import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-tag-input.styles.js';

/**
 * A tag/chip input field that allows creating tags by pressing Enter or comma.
 * @element wu-tag-input
 * @event wu-change - Fires when tags change, detail: { values: string[] }
 * @event wu-add - Fires when a tag is added, detail: { value: string }
 * @event wu-remove - Fires when a tag is removed, detail: { value: string }
 * @cssprop --wu-tag-input-bg - Container background
 */
@customElement('wu-tag-input')
export class WuTagInput extends LitElement {
  static styles = styles;

  @property() label = '';
  @property({ type: Array }) values: string[] = [];
  @property() placeholder = 'Add a tag…';
  @property() delimiter = ',';
  @property({ type: Number }) max = Infinity;
  @property() error = '';
  @property({ type: Boolean, reflect: true }) disabled = false;

  @state() private _inputValue = '';

  private _emit() {
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { values: [...this.values] } }));
  }

  private _addTag(raw: string) {
    const val = raw.trim();
    if (!val || this.values.includes(val) || this.values.length >= this.max) return;
    this.values = [...this.values, val];
    this._inputValue = '';
    this.dispatchEvent(new CustomEvent('wu-add', { bubbles: true, composed: true, detail: { value: val } }));
    this._emit();
  }

  private _removeTag(val: string) {
    this.values = this.values.filter(v => v !== val);
    this.dispatchEvent(new CustomEvent('wu-remove', { bubbles: true, composed: true, detail: { value: val } }));
    this._emit();
  }

  private _onKeyDown(e: KeyboardEvent) {
    const input = e.target as HTMLInputElement;
    if (e.key === 'Enter' || e.key === this.delimiter) {
      e.preventDefault();
      this._addTag(input.value);
    } else if (e.key === 'Backspace' && !input.value && this.values.length) {
      this._removeTag(this.values[this.values.length - 1]);
    }
  }

  private _onInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    if (val.endsWith(this.delimiter)) {
      this._addTag(val.slice(0, -1));
    } else {
      this._inputValue = val;
    }
  }

  private _focusInput() {
    this.shadowRoot?.querySelector<HTMLInputElement>('.tag-input')?.focus();
  }

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <div class="tag-container" @click=${this._focusInput}>
        ${this.values.map(v => html`
          <span class="tag">
            ${v}
            <button class="tag-remove" @click=${(e: Event) => { e.stopPropagation(); this._removeTag(v); }} aria-label="Remove ${v}">✕</button>
          </span>
        `)}
        <input
          class="tag-input"
          .value=${this._inputValue}
          placeholder=${this.values.length ? '' : this.placeholder}
          ?disabled=${this.disabled}
          @keydown=${this._onKeyDown}
          @input=${this._onInput}
          aria-label=${this.label || 'Tag input'}
        />
      </div>
      ${this.error ? html`<p class="error-msg" role="alert">${this.error}</p>` : html`<p class="hint">Press Enter or comma to add tags</p>`}
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-tag-input': WuTagInput; } }
