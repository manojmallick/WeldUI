import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-validation-summary.styles.js';

/**
 * A grouped list of form validation errors displayed at the top of a form.
 *
 * @element wu-validation-summary
 * @csspart base - The summary container
 * @csspart title - The heading
 * @csspart list - The error list
 */
@customElement('wu-validation-summary')
export class WuValidationSummary extends LitElement {
  static styles = styles;

  /** List of error messages to display */
  @property({ type: Array }) errors: string[] = [];

  /** Heading above the error list */
  @property() heading = 'Please fix the following errors:';

  override render() {
    if (!this.errors.length) return html``;
    return html`
      <div part="base" class="summary" role="alert" aria-live="polite">
        <p part="title" class="title">${this.heading}</p>
        <ul part="list" class="list">
          ${repeat(this.errors, (e) => e, (e) => html`<li class="item">${e}</li>`)}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-validation-summary': WuValidationSummary;
  }
}
