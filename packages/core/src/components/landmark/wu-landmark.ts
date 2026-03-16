import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-landmark.styles.js';

/**
 * ARIA landmark region wrapper with label
 *
 * @element wu-landmark
 * @slot - Default slot
 */
@customElement('wu-landmark')
export class WuLandmark extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-landmark': WuLandmark; } }
