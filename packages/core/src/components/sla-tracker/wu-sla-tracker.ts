import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-sla-tracker.styles.js';

/**
 * SLA compliance tracker with percentage and target
 *
 * @element wu-sla-tracker
 * @slot - Default slot
 */
@customElement('wu-sla-tracker')
export class WuSlaTracker extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-sla-tracker': WuSlaTracker; } }
