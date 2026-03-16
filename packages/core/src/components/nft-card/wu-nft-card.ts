import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-nft-card.styles.js';

/**
 * NFT display card with image name collection and traits
 *
 * @element wu-nft-card
 * @slot - Default slot
 */
@customElement('wu-nft-card')
export class WuNftCard extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-nft-card': WuNftCard; } }
