import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-code-editor.styles.js';

/**
 * Syntax-highlighted code editor placeholder
 *
 * @element wu-code-editor
 * @slot - Default slot
 */
@customElement('wu-code-editor')
export class WuCodeEditor extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-code-editor': WuCodeEditor; } }
