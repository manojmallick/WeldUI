import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-icon.styles.js';

/**
 * Renders an SVG icon from a named set or slot
 *
 * @element wu-icon
 * @slot - Default slot
 */
@customElement('wu-icon')
export class WuIcon extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-icon': WuIcon; } }
