import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-terminal.styles.js';

/**
 * Web terminal xterm emulator placeholder
 *
 * @element wu-terminal
 * @slot - Default slot
 */
@customElement('wu-terminal')
export class WuTerminal extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-terminal': WuTerminal; } }
