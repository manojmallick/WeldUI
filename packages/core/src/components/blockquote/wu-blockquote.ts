import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-blockquote.styles.js';

/**
 * A pull quote with optional source attribution.
 *
 * @element wu-blockquote
 * @slot - Quote text
 * @csspart base - The blockquote element
 * @csspart attribution - The cite/attribution line
 */
@customElement('wu-blockquote')
export class WuBlockquote extends LitElement {
  static styles = styles;

  /** Source URL (cite attribute on blockquote) */
  @property() cite = '';

  /** Attribution text displayed below the quote */
  @property() attribution = '';

  override render() {
    return html`
      <figure part="base" class="blockquote-figure">
        <blockquote cite=${this.cite}>
          <slot></slot>
        </blockquote>
        ${this.attribution
          ? html`<figcaption part="attribution" class="attribution">— ${this.attribution}</figcaption>`
          : ''}
      </figure>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-blockquote': WuBlockquote;
  }
}
