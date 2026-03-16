import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-uptime-bar.styles.js';

/**
 * Service uptime history bar 28 or 90 day view
 *
 * @element wu-uptime-bar
 * @slot - Default slot
 */
@customElement('wu-uptime-bar')
export class WuUptimeBar extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-uptime-bar': WuUptimeBar; } }
