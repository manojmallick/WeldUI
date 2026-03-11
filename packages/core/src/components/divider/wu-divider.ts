import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-divider.styles.js';

/**
 * A horizontal or vertical divider line with an optional label.
 *
 * @element wu-divider
 *
 * @slot - Optional label content displayed in the centre of the divider
 *
 * @cssprop --wu-divider-color - Line colour
 * @cssprop --wu-divider-thickness - Line thickness
 * @cssprop --wu-divider-spacing - Margin around the divider
 */
@customElement('wu-divider')
export class WuDivider extends LitElement {
  static styles = styles;

  /** Render as a vertical divider */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  @state() private _hasLabel = false;

  private _onSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasLabel = slot.assignedNodes({ flatten: true }).some(
      n => n.nodeType === Node.ELEMENT_NODE || (n.nodeType === Node.TEXT_NODE && n.textContent!.trim())
    );
  }

  render() {
    return html`
      <div class="line" role="separator" aria-orientation=${this.vertical ? 'vertical' : 'horizontal'}></div>
      ${this._hasLabel ? html`<span class="label"><slot @slotchange=${this._onSlotChange}></slot></span>` : html`<slot @slotchange=${this._onSlotChange} style="display:none"></slot>`}
      ${this._hasLabel ? html`<div class="line"></div>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-divider': WuDivider;
  }
}
