import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-abbr.styles.js';

/**
 * An abbreviation element with a tooltip definition.
 *
 * @element wu-abbr
 * @slot - The abbreviated text
 * @csspart base - The abbr element
 */
@customElement('wu-abbr')
export class WuAbbr extends LitElement {
  static styles = styles;

  /** The full definition/expansion of the abbreviation */
  @property() title = '';

  override render() {
    return html`
      <abbr part="base" title=${this.title}>
        <slot></slot>
      </abbr>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-abbr': WuAbbr;
  }
}
