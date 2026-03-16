import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-log-stream.styles.js';

/**
 * Live log stream viewer with level filtering
 *
 * @element wu-log-stream
 * @slot - Default slot
 */
@customElement('wu-log-stream')
export class WuLogStream extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-log-stream': WuLogStream; } }
