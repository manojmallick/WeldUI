import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-battery-indicator.styles.js';

/**
 * Device battery level indicator
 *
 * @element wu-battery-indicator
 * @slot - Default slot
 */
@customElement('wu-battery-indicator')
export class WuBatteryIndicator extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-battery-indicator': WuBatteryIndicator; } }
