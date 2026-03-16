import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-cron-builder.styles.js';

/**
 * Visual cron expression builder
 *
 * @element wu-cron-builder
 * @slot - Default slot
 */
@customElement('wu-cron-builder')
export class WuCronBuilder extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-cron-builder': WuCronBuilder; } }
