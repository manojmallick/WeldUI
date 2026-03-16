import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-share-button.styles.js';

/**
 * Web Share API button with clipboard fallback
 *
 * @element wu-share-button
 * @slot - Default slot
 */
@customElement('wu-share-button')
export class WuShareButton extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-share-button': WuShareButton; } }
