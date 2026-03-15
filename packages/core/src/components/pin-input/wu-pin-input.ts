import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-pin-input.styles.js';

/**
 * OTP / verification code input — splits into individual digit fields.
 *
 * @element wu-pin-input
 *
 * @event wu-change - Emitted when a digit changes. Detail: { value: string, complete: boolean }
 * @event wu-complete - Emitted when all digits are filled. Detail: { value: string }
 *
 * @cssprop - inherited from input styling
 *
 * @example
 * ```html
 * <wu-pin-input length="6" label="Verification code"></wu-pin-input>
 * ```
 */
@customElement('wu-pin-input')
export class WuPinInput extends LitElement {
  static styles = styles;

  /** Number of digits (4–8) */
  @property({ type: Number }) length = 6;
  /** Input label */
  @property() label = '';
  /** Current combined value */
  @property() value = '';
  /** Use password masking */
  @property({ type: Boolean }) mask = false;
  /** Error message */
  @property() error = '';
  /** Disabled state */
  @property({ type: Boolean, reflect: true }) disabled = false;

  @state() private _digits: string[] = [];

  override updated(changed: Map<string, unknown>) {
    if (changed.has('length') || changed.has('value')) {
      const arr = (this.value || '').split('').slice(0, this.length);
      this._digits = Array.from({ length: this.length }, (_, i) => arr[i] ?? '');
    }
  }

  private _handleInput(e: Event, index: number) {
    const input = e.target as HTMLInputElement;
    const char = input.value.replace(/\D/g, '').slice(-1);
    const next = [...this._digits];
    next[index] = char;
    this._digits = next;
    this.value = next.join('');

    if (char && index < this.length - 1) {
      this._focusAt(index + 1);
    }

    const complete = this.value.length === this.length;
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true, composed: true, detail: { value: this.value, complete }
    }));
    if (complete) {
      this.dispatchEvent(new CustomEvent('wu-complete', {
        bubbles: true, composed: true, detail: { value: this.value }
      }));
    }
  }

  private _handleKeydown(e: KeyboardEvent, index: number) {
    if (e.key === 'Backspace' && !this._digits[index] && index > 0) {
      this._focusAt(index - 1);
    }
    if (e.key === 'ArrowLeft' && index > 0) this._focusAt(index - 1);
    if (e.key === 'ArrowRight' && index < this.length - 1) this._focusAt(index + 1);
  }

  private _handlePaste(e: ClipboardEvent) {
    e.preventDefault();
    const text = e.clipboardData?.getData('text')?.replace(/\D/g, '').slice(0, this.length) ?? '';
    if (!text) return;
    this._digits = Array.from({ length: this.length }, (_, i) => text[i] ?? '');
    this.value = this._digits.join('');
    const complete = this.value.length === this.length;
    if (complete) this._focusAt(this.length - 1);
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true, composed: true, detail: { value: this.value, complete }
    }));
    if (complete) {
      this.dispatchEvent(new CustomEvent('wu-complete', {
        bubbles: true, composed: true, detail: { value: this.value }
      }));
    }
  }

  private _focusAt(index: number) {
    const inputs = this.shadowRoot!.querySelectorAll<HTMLInputElement>('input');
    inputs[index]?.focus();
    inputs[index]?.select();
  }

  override render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <div class="pin-row" role="group" aria-label=${this.label || 'PIN input'}>
        ${Array.from({ length: this.length }, (_, i) => html`
          <input
            type=${this.mask ? 'password' : 'tel'}
            inputmode="numeric"
            maxlength="1"
            pattern="[0-9]"
            .value=${this._digits[i] ?? ''}
            ?disabled=${this.disabled}
            class=${this._digits[i] ? 'filled' : ''}
            aria-label="Digit ${i + 1} of ${this.length}"
            @input=${(e: Event) => this._handleInput(e, i)}
            @keydown=${(e: KeyboardEvent) => this._handleKeydown(e, i)}
            @paste=${this._handlePaste}
          />
        `)}
      </div>
      ${this.error ? html`<span class="error-msg" role="alert">${this.error}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-pin-input': WuPinInput; }
}
