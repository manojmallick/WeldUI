/**
 * Mixin for form-associated custom elements.
 * Enables components to participate in native <form> submission.
 *
 * Usage:
 *   class WuInput extends FormAssociated(LitElement) { ... }
 */
export function FormAssociated<T extends new (...args: unknown[]) => HTMLElement>(Base: T) {
  abstract class FormAssociatedElement extends Base {
    static formAssociated = true;

    protected _internals: ElementInternals;

    constructor(...args: unknown[]) {
      super(...args);
      this._internals = (this as unknown as HTMLElement).attachInternals();
    }

    /** The form this element is associated with */
    get form(): HTMLFormElement | null {
      return this._internals.form;
    }

    /** The name attribute — used in form submission */
    get name(): string {
      return this.getAttribute('name') ?? '';
    }

    /** The current validation message */
    get validationMessage(): string {
      return this._internals.validationMessage;
    }

    /** Whether the element passes constraint validation */
    get validity(): ValidityState {
      return this._internals.validity;
    }

    /** Whether the element will validate on form submit */
    get willValidate(): boolean {
      return this._internals.willValidate;
    }

    checkValidity(): boolean {
      return this._internals.checkValidity();
    }

    reportValidity(): boolean {
      return this._internals.reportValidity();
    }
  }

  return FormAssociatedElement;
}
