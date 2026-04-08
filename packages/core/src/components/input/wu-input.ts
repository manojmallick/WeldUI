import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-input.styles.js';

/**
 * A text input component with label, hint, and error support.
 *
 * @element wu-input
 *
 * @event wu-change - Emitted when the value changes (on input)
 * @event wu-blur   - Emitted when the input loses focus
 *
 * @csspart base  - The outer wrapper
 * @csspart input - The native input element
 *
 * @cssprop --wu-input-bg           - Background colour
 * @cssprop --wu-input-border       - Border colour
 * @cssprop --wu-input-border-focus - Border colour when focused
 * @cssprop --wu-input-radius       - Border radius
 */
@customElement('wu-input')
export class WuInput extends LitElement {
  static styles = styles;

  /** Stable per-instance ID prefix — avoids new IDs on every render */
  private readonly _uid = Math.random().toString(36).slice(2, 9);

  /** Input type */
  @property()
  type: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel' | 'url' = 'text';

  /** Current value */
  @property()
  value = '';

  /** Placeholder text */
  @property()
  placeholder?: string;

  /** Visible label */
  @property()
  label?: string;

  /** Hint text shown below the input */
  @property()
  hint?: string;

  /** Error message — also sets invalid state */
  @property()
  error?: string;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Required field */
  @property({ type: Boolean })
  required = false;

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Name attribute for form submission */
  @property()
  name?: string;

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  private _handleBlur() {
    this.dispatchEvent(new CustomEvent('wu-blur', { bubbles: true, composed: true }));
  }

  override render() {
    const inputId = `wu-input-${this._uid}`;
    const errorId = `${inputId}-error`;
    const hintId = `${inputId}-hint`;
    const describedBy = this.error ? errorId : this.hint ? hintId : undefined;
    return html`
      <div part="base" class="wrapper">
        ${this.label ? html`<label for=${inputId}>${this.label}${this.required ? html` <span aria-hidden="true">*</span>` : ''}</label>` : ''}
        <div class="input-row">
          <input
            part="input"
            id=${inputId}
            type=${this.type}
            .value=${this.value}
            placeholder=${ifDefined(this.placeholder)}
            name=${ifDefined(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error ? 'true' : 'false'}
            aria-describedby=${ifDefined(describedBy)}
            @input=${this._handleInput}
            @blur=${this._handleBlur}
          />
        </div>
        ${this.error ? html`<span id=${errorId} class="error" role="alert">${this.error}</span>` : ''}
        ${this.hint && !this.error ? html`<span id=${hintId} class="hint">${this.hint}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-input': WuInput;
  }
}
