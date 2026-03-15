import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-label.styles.js';

/**
 * A styled `<label>` element for form controls.
 *
 * @element wu-label
 * @slot - Label text
 * @csspart base - The label element
 */
@customElement('wu-label')
export class WuLabel extends LitElement {
  static styles = styles;

  /** ID of the form control this label describes */
  @property() for = '';

  /** Mark the label as required (shows asterisk) */
  @property({ type: Boolean, reflect: true }) required = false;

  /** Muted/disabled appearance */
  @property({ type: Boolean, reflect: true }) disabled = false;

  override render() {
    return html`
      <label part="base" for=${ifDefined(this.for || undefined)}>
        <slot></slot>
        ${this.required ? html`<span class="required" aria-hidden="true">*</span>` : ''}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-label': WuLabel;
  }
}
