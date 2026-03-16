import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-canvas-sketch.styles.js';

/**
 * Freehand drawing canvas with toolbar
 *
 * @element wu-canvas-sketch
 * @slot - Default slot
 */
@customElement('wu-canvas-sketch')
export class WuCanvasSketch extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-canvas-sketch': WuCanvasSketch; } }
