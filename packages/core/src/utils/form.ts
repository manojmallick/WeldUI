/**
 * Mixin for form-associated custom elements.
 * Enables components to participate in native <form> submission.
 *
 * Usage:
 *   class WuInput extends FormAssociated(LitElement) { ... }
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function FormAssociated<T extends new (...args: any[]) => HTMLElement>(Base: T) {
  class FormAssociatedElement extends Base {
    static formAssociated = true;

    // underscore prefix signals "internal use only" without TS protected restriction
    _internals: ElementInternals;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
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
