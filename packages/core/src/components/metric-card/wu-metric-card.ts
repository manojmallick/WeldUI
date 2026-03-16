import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-metric-card.styles.js';

/**
 * KPI metric card with value label and trend
 *
 * @element wu-metric-card
 * @slot - Default slot
 */
@customElement('wu-metric-card')
export class WuMetricCard extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-metric-card': WuMetricCard; } }
