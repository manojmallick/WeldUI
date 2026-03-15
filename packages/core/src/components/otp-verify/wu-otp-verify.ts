import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-otp-verify.styles.js';

/**
 * One-time-password verification with N digit boxes.
 *
 * @element wu-otp-verify
 * @event wu-complete - Emitted when all digits are entered, detail: { code: string }
 */
@customElement('wu-otp-verify')
export class WuOtpVerify extends LitElement {
  static styles = styles;

  /** Number of digits */
  @property({ type: Number }) digits = 6;

  /** Descriptive heading */
  @property() heading = 'Enter verification code';

  /** Sub label */
  @property() hint = '';

  @state() private values: string[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.values = Array(this.digits).fill('');
  }

  private handleInput(e: Event, index: number) {
    const target = e.target as HTMLInputElement;
    const val = target.value.replace(/\D/g, '').slice(-1);
    const next = [...this.values];
    next[index] = val;
    this.values = next;
    if (val && index < this.digits - 1) {
      const inputs = this.shadowRoot!.querySelectorAll<HTMLInputElement>('.digit');
      inputs[index + 1]?.focus();
    }
    if (next.every((v) => v !== '')) {
      this.dispatchEvent(
        new CustomEvent('wu-complete', {
          bubbles: true,
          composed: true,
          detail: { code: next.join('') },
        }),
      );
    }
  }

  private handleKeydown(e: KeyboardEvent, index: number) {
    if (e.key === 'Backspace' && !this.values[index] && index > 0) {
      const inputs = this.shadowRoot!.querySelectorAll<HTMLInputElement>('.digit');
      inputs[index - 1]?.focus();
    }
  }

  override render() {
    return html`
      <div class="otp">
        ${this.heading ? html`<p class="heading">${this.heading}</p>` : ''}
        ${this.hint ? html`<p class="hint">${this.hint}</p>` : ''}
        <div class="digits" role="group" aria-label="Verification code">
          ${repeat(
            Array.from({ length: this.digits }, (_, i) => i),
            (i) => i,
            (i) => html`
              <input
                class="digit"
                type="text"
                inputmode="numeric"
                maxlength="1"
                autocomplete="one-time-code"
                aria-label="Digit ${i + 1}"
                .value=${this.values[i] ?? ''}
                @input=${(e: Event) => this.handleInput(e, i)}
                @keydown=${(e: KeyboardEvent) => this.handleKeydown(e, i)}
              />
            `,
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-otp-verify': WuOtpVerify;
  }
}
