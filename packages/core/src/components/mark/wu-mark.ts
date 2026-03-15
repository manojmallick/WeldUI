import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-mark.styles.js';

/**
 * Highlighted / marked text, similar to the HTML `<mark>` element.
 *
 * @element wu-mark
 * @slot - Text to highlight
 * @csspart base - The mark element
 */
@customElement('wu-mark')
export class WuMark extends LitElement {
  static styles = styles;

  /** Highlight colour variant */
  @property({ reflect: true })
  variant: 'default' | 'success' | 'warning' | 'danger' | 'info' = 'default';

  override render() {
    return html`<mark part="base"><slot></slot></mark>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-mark': WuMark;
  }
}
