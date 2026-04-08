import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-select.styles.js';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * A single-select dropdown component.
 *
 * @element wu-select
 *
 * @event wu-change - Emitted when the selected value changes
 *
 * @csspart base   - The outer wrapper
 * @csspart select - The native select element
 *
 * @cssprop --wu-select-bg           - Background colour
 * @cssprop --wu-select-border       - Border colour
 * @cssprop --wu-select-border-focus - Border colour when focused
 */
@customElement('wu-select')
export class WuSelect extends LitElement {
  static styles = styles;

  private readonly _uid = Math.random().toString(36).slice(2, 9);

  /** Currently selected value */
  @property()
  value = '';

  /** Array of options to render */
  @property({ type: Array })
  options: SelectOption[] = [];

  /** Placeholder option shown when no value is selected */
  @property()
  placeholder?: string;

  /** Visible label */
  @property()
  label?: string;

  /** Hint text */
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

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Name attribute for form submission */
  @property()
  name?: string;

  private _handleChange(e: Event) {
    this.value = (e.target as HTMLSelectElement).value;
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  override render() {
    const selectId = `wu-select-${this._uid}`;
    const errorId = `${selectId}-error`;
    const hintId = `${selectId}-hint`;
    const describedBy = this.error ? errorId : this.hint ? hintId : undefined;
    return html`
      <div part="base" class="wrapper">
        ${this.label ? html`<label for=${selectId}>${this.label}${this.required ? html` <span aria-hidden="true">*</span>` : ''}</label>` : ''}
        <div class="select-row">
          <select
            part="select"
            id=${selectId}
            name=${ifDefined(this.name)}
            ?disabled=${this.disabled}
            ?required=${this.required}
            aria-invalid=${this.error ? 'true' : 'false'}
            aria-describedby=${ifDefined(describedBy)}
            @change=${this._handleChange}
          >
            ${this.placeholder ? html`<option value="" ?selected=${!this.value} disabled>${this.placeholder}</option>` : ''}
            ${this.options.map(opt => html`
              <option value=${opt.value} ?selected=${this.value === opt.value} ?disabled=${opt.disabled ?? false}>
                ${opt.label}
              </option>
            `)}
          </select>
          <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 6l4 4 4-4"/>
          </svg>
        </div>
        ${this.error ? html`<span id=${errorId} class="error" role="alert">${this.error}</span>` : ''}
        ${this.hint && !this.error ? html`<span id=${hintId} class="hint">${this.hint}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-select': WuSelect;
  }
}
