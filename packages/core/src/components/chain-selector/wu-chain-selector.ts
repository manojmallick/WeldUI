import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-chain-selector.styles.js';

/**
 * Blockchain network chain selector dropdown
 *
 * @element wu-chain-selector
 * @slot - Default slot
 */
@customElement('wu-chain-selector')
export class WuChainSelector extends LitElement {
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

declare global { interface HTMLElementTagNameMap { 'wu-chain-selector': WuChainSelector; } }
