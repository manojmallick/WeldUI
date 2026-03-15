import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-print-area.styles.js';

/**
 * A layout wrapper that controls print visibility.
 * Use `print-only` to show content only when printing.
 * Use `no-print` to hide content when printing.
 *
 * @element wu-print-area
 * @slot - Content to show/hide depending on print context
 * @csspart base - The print area wrapper
 */
@customElement('wu-print-area')
export class WuPrintArea extends LitElement {
  static styles = styles;

  /** Show only when printing; hidden on screen */
  @property({ type: Boolean, reflect: true, attribute: 'print-only' }) printOnly = false;

  /** Hide when printing; visible on screen */
  @property({ type: Boolean, reflect: true, attribute: 'no-print' }) noPrint = false;

  override render() {
    return html`<div part="base"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-print-area': WuPrintArea;
  }
}
