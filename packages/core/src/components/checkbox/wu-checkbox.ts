import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-checkbox.styles.js';

/**
 * A checkbox component with checked, indeterminate, and disabled states.
 *
 * @element wu-checkbox
 *
 * @event wu-change - Emitted when the checked state changes
 *
 * @csspart base  - The outer wrapper
 * @csspart input - The native checkbox input
 * @csspart label - The label element
 *
 * @cssprop --wu-checkbox-size         - Width and height of the checkbox
 * @cssprop --wu-checkbox-checked-bg   - Background when checked
 * @cssprop --wu-checkbox-border       - Default border colour
 */
@customElement('wu-checkbox')
export class WuCheckbox extends LitElement {
  static styles = styles;

  private readonly _uid = Math.random().toString(36).slice(2, 9);

  /** Checked state */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Indeterminate state (partially checked) */
  @property({ type: Boolean, reflect: true })
  indeterminate = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Name attribute for form submission */
  @property()
  name?: string;

  /** Value attribute for form submission */
  @property()
  value = 'on';

  /** Hint text shown below the checkbox */
  @property()
  hint?: string;

  /** Error message — also marks the checkbox invalid */
  @property()
  error?: string;

  private _handleChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = false;
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true,
      composed: true,
      detail: { checked: this.checked, value: this.value }
    }));
  }

  override updated(changed: Map<string, unknown>) {
    if (changed.has('indeterminate')) {
      const input = this.shadowRoot?.querySelector('input');
      if (input) input.indeterminate = this.indeterminate;
    }
  }

  override render() {
    const checkboxId = `wu-checkbox-${this._uid}`;
    const errorId = `${checkboxId}-error`;
    const hintId = `${checkboxId}-hint`;
    const describedBy = this.error ? errorId : this.hint ? hintId : undefined;
    return html`
      <div part="base" class="wrapper">
        <input
          part="input"
          type="checkbox"
          id=${checkboxId}
          name=${this.name ?? ''}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          aria-checked=${this.indeterminate ? 'mixed' : this.checked ? 'true' : 'false'}
          aria-invalid=${ifDefined(this.error ? 'true' : undefined)}
          aria-describedby=${ifDefined(describedBy)}
          @change=${this._handleChange}
        />
        ${this.label ? html`<label part="label" for=${checkboxId}>${this.label}</label>` : ''}
      </div>
      ${this.error ? html`<span id=${errorId} class="error" role="alert">${this.error}</span>` : ''}
      ${this.hint && !this.error ? html`<span id=${hintId} class="hint">${this.hint}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-checkbox': WuCheckbox;
  }
}
