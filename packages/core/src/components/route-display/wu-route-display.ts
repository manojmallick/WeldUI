import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-route-display.styles.js';

/**
 * Displays a route with waypoints on a map
 *
 * @element wu-route-display
 * @slot - Default slot
 */
@customElement('wu-route-display')
export class WuRouteDisplay extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-route-display': WuRouteDisplay; } }
