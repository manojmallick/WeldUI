import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-masonry.styles.js';

/**
 * A CSS column-based masonry layout container.
 *
 * @element wu-masonry
 * @slot - Items to lay out in masonry columns
 * @csspart base - The masonry container
 * @cssprop --wu-masonry-gap - Gap between items
 */
@customElement('wu-masonry')
export class WuMasonry extends LitElement {
  static styles = styles;

  /** Number of columns */
  @property({ type: Number, reflect: true }) columns = 3;

  /** Gap between items */
  @property({ reflect: true }) gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  override render() {
    return html`
      <div
        part="base"
        class="masonry"
        style=${styleMap({ '--wu-masonry-columns': String(this.columns) })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-masonry': WuMasonry;
  }
}
