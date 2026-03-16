import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-label-sheet.styles.js';

/**
 * Printable label sheet Avery-style layout
 *
 * @element wu-label-sheet
 * @slot - Default slot
 */
@customElement('wu-label-sheet')
export class WuLabelSheet extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-label-sheet': WuLabelSheet; } }
