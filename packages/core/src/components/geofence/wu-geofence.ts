import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-geofence.styles.js';

/**
 * Draw and manage geofence boundaries on a map
 *
 * @element wu-geofence
 * @slot - Default slot
 */
@customElement('wu-geofence')
export class WuGeofence extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-geofence': WuGeofence; } }
