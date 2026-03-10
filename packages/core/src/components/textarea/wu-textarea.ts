import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-textarea.styles.js';

/**
 * A multi-line text input component.
 *
 * @element wu-textarea
 *
 * @event wu-change - Emitted when the value changes
 * @event wu-blur   - Emitted when the textarea loses focus
 *
 * @csspart base     - The outer wrapper
 * @csspart textarea - The native textarea element
 *
 * @cssprop --wu-textarea-bg           - Background colour
 * @cssprop --wu-textarea-border       - Border colour
 * @cssprop --wu-textarea-border-focus - Border colour when focused
 * @cssprop --wu-textarea-min-height   - Minimum height
 */
@customElement('wu-textarea')
export class WuTextarea extends LitElement {
  static styles = styles;

  /** Current value */
  @property()
  value = '';

  /** Placeholder text */
  @property()
  placeholder?: string;

  /** Visible label */
  @property()
  label?: string;

  /** Hint text shown below the textarea */
  @property()
  hint?: string;

  /** Error message */
  @property()
  error?: string;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Required field */
  @property({ type: Boolean })
  required = false;

  /** Maximum character count — shows counter when set */
  @property({ type: Number })
  maxlength?: number;

  /** Number of visible rows */
  @property({ type: Number })
  rows = 4;

  /** Name attribute for form submission */
  @property()
  name?: string;

  @state() private _charCount = 0;

  override connectedCallback() {
    super.connectedCallback();
    this._charCount = this.value.length;
  }

  private _handleInput(e: Event) {
    this.value = (e.target as HTMLTextAreaElement).value;
    this._charCount = this.value.length;
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  private _handleBlur() {
    this.dispatchEvent(new CustomEvent('wu-blur', { bubbles: true, composed: true }));
  }

  override render() {
    const id = 'textarea-' + (this.name ?? Math.random().toString(36).slice(2));
    return html`
      <div part="base" class="wrapper">
        ${this.label ? html`<label for=${id}>${this.label}${this.required ? html` <span aria-hidden="true">*</span>` : ''}</label>` : ''}
        <textarea
          part="textarea"
          id=${id}
          rows=${this.rows}
          name=${ifDefined(this.name)}
          placeholder=${ifDefined(this.placeholder)}
          maxlength=${ifDefined(this.maxlength)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${this.error ? 'true' : 'false'}
          .value=${this.value}
          @input=${this._handleInput}
          @blur=${this._handleBlur}
        ></textarea>
        ${this.maxlength ? html`<span class="char-count">${this._charCount} / ${this.maxlength}</span>` : ''}
        ${this.error ? html`<span class="error" role="alert">${this.error}</span>` : ''}
        ${this.hint && !this.error ? html`<span class="hint">${this.hint}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-textarea': WuTextarea;
  }
}
