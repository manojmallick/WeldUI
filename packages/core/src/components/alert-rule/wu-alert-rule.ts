import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-alert-rule.styles.js';

/**
 * Alert rule configuration UI with condition builder
 *
 * @element wu-alert-rule
 * @slot - Default slot
 */
@customElement('wu-alert-rule')
export class WuAlertRule extends LitElement {
  static styles = styles;

  @property() label = '';
  @property() value = '';

  render() {
    return html`
      <div class="container">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div class="content">
          ${this.value || html`<slot></slot>`}
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-alert-rule': WuAlertRule; } }
