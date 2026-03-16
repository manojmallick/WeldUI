import { LitElement, html, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-user-cursor.styles.js';

/**
 * Another user's cursor rendered in a shared canvas or document.
 *
 * @element wu-user-cursor
 */
@customElement('wu-user-cursor')
export class WuUserCursor extends LitElement {
  static styles = styles;

  @property()
  name = '';

  @property()
  color = '#3b82f6';

  @property({ type: Number })
  x = 0;

  @property({ type: Number })
  y = 0;

  render() {
    return html`
      <div class="cursor" style="left:${this.x}px;top:${this.y}px;" aria-hidden="true">
        <svg class="pointer" viewBox="0 0 16 16" fill="none">
          ${svg`<path d="M2 2l12 5-6 1-3 6z" fill="${this.color}" stroke="white" stroke-width="1"/>`}
        </svg>
        ${this.name ? html`<span class="label" style="background:${this.color}">${this.name}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-user-cursor': WuUserCursor;
  }
}
