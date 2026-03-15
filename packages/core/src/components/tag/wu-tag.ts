import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-tag.styles.js';

/**
 * A dismissible tag/chip for labelling.
 * @element wu-tag
 * @slot - Tag label content
 * @event wu-dismiss - Fires when dismiss button clicked
 */
@customElement('wu-tag')
export class WuTag extends LitElement {
  static styles = styles;
  @property({ reflect: true }) variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' = 'default';
  @property({ type: Boolean }) dismissible = false;
  @property({ type: Boolean, reflect: true }) disabled = false;

  render() {
    return html`
      <span class="tag">
        <slot></slot>
        ${this.dismissible ? html`<button class="dismiss" @click=${() => this.dispatchEvent(new CustomEvent('wu-dismiss', { bubbles: true, composed: true }))} aria-label="Remove tag">✕</button>` : ''}
      </span>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-tag': WuTag; } }
