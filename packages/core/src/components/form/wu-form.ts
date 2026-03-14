import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-form.styles.js';

/**
 * A form wrapper that provides built-in validation summary, loading state,
 * and a clean `wu-submit` event with a typed `FormData` values object.
 *
 * @element wu-form
 *
 * @slot         - Form field components (`<wu-input>`, `<wu-select>`, etc.)
 * @slot actions - Submit / reset buttons (rendered below fields)
 *
 * @event wu-submit  - Emitted when the form passes validation.
 *                     Detail: `{ values: Record<string, FormDataEntryValue> }`
 * @event wu-invalid - Emitted when the form has validation errors.
 *                     Detail: `{ errors: string[] }`
 *
 * @csspart base    - The native `<form>` element
 * @csspart summary - The validation error summary block
 * @csspart fields  - The fields wrapper
 * @csspart actions - The actions wrapper
 *
 * @example
 * ```html
 * <wu-form id="login">
 *   <wu-input name="email" label="Email" type="email" required></wu-input>
 *   <wu-input name="password" label="Password" type="password" required></wu-input>
 *   <wu-button slot="actions" type="submit">Sign in</wu-button>
 * </wu-form>
 * <script>
 *   document.getElementById('login').addEventListener('wu-submit', e => {
 *     console.log(e.detail.values);
 *   });
 * </script>
 * ```
 */
@customElement('wu-form')
export class WuForm extends LitElement {
  static styles = styles;

  /** Disable native browser validation UI — WeldUI handles it instead */
  @property({ type: Boolean })
  novalidate = false;

  /** Show a loading spinner on the submit button and disable the form */
  @property({ type: Boolean, reflect: true })
  loading = false;

  @state() private _errors: string[] = [];

  private _handleSubmit(e: SubmitEvent): void {
    e.preventDefault();

    // Collect controls from light DOM (slotted fields) and shadow DOM
    const controls = [
      ...Array.from(this.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea')),
    ];

    if (!this.novalidate) {
      const errors: string[] = [];
      controls.forEach(ctrl => {
        if (!ctrl.disabled && typeof (ctrl as HTMLInputElement).checkValidity === 'function' && !(ctrl as HTMLInputElement).checkValidity()) {
          const msg = (ctrl as HTMLInputElement).validationMessage;
          if (msg) errors.push(msg);
        }
      });
      if (errors.length > 0) {
        this._errors = [...new Set(errors)];
        this.dispatchEvent(new CustomEvent('wu-invalid', {
          bubbles: true, composed: true, detail: { errors: this._errors },
        }));
        return;
      }
    }

    this._errors = [];
    const values: Record<string, FormDataEntryValue> = {};
    controls.forEach(ctrl => {
      if (!ctrl.name || ctrl.disabled) return;
      if (ctrl instanceof HTMLInputElement && (ctrl.type === 'checkbox' || ctrl.type === 'radio')) {
        if (ctrl.checked) values[ctrl.name] = ctrl.value;
      } else {
        values[ctrl.name] = (ctrl as HTMLInputElement).value;
      }
    });

    this.dispatchEvent(new CustomEvent('wu-submit', {
      bubbles: true,
      composed: true,
      detail: { values },
    }));
  }

  render() {
    return html`
      <form
        part="base"
        ?novalidate=${true}
        aria-busy=${this.loading}
        @submit=${this._handleSubmit}
      >
        ${this._errors.length ? html`
          <div part="summary" class="error-summary" role="alert" aria-live="assertive">
            <span class="error-summary-title">Please fix the following errors:</span>
            <ul>${this._errors.map(e => html`<li>${e}</li>`)}</ul>
          </div>
        ` : ''}
        <div part="fields" class="fields">
          <slot></slot>
        </div>
        <div part="actions" class="actions">
          <slot name="actions"></slot>
        </div>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-form': WuForm;
  }
}
