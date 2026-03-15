import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './wu-code.styles.js';

/**
 * Inline code snippet. For multi-line syntax-highlighted blocks use `<wu-code-block>`.
 *
 * @element wu-code
 *
 * @slot - The code string to display inline
 *
 * @example
 * ```html
 * Use the <wu-code>onClick</wu-code> prop to handle clicks.
 * ```
 */
@customElement('wu-code')
export class WuCode extends LitElement {
  static styles = styles;

  override render() {
    return html`<code><slot></slot></code>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-code': WuCode;
  }
}
