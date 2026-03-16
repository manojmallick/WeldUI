import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-distance-calculator.styles.js';

/**
 * Calculate distance between two points
 *
 * @element wu-distance-calculator
 * @slot - Default slot
 */
@customElement('wu-distance-calculator')
export class WuDistanceCalculator extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-distance-calculator': WuDistanceCalculator; } }
