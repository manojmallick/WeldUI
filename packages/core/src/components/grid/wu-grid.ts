import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-grid.styles.js';

/**
 * A responsive grid primitive for evenly spaced cards and content blocks.
 *
 * @element wu-grid
 *
 * @slot - Grid children
 *
 * @csspart base - The CSS grid wrapper
 *
 * @cssprop --wu-grid-gap - Gap between grid items
 * @cssprop --wu-grid-columns - Number of explicit columns
 * @cssprop --wu-grid-min-item-width - Minimum item width when auto-fit is enabled
 *
 * @example
 * ```html
 * <wu-grid columns="3" gap="lg">
 *   <article>One</article>
 *   <article>Two</article>
 *   <article>Three</article>
 * </wu-grid>
 * ```
 */
@customElement('wu-grid')
export class WuGrid extends LitElement {
  static styles = styles;

  /** Number of explicit columns when auto-fit is disabled. */
  @property({ type: Number, reflect: true })
  columns = 3;

  /** Gap preset between grid items. */
  @property({ reflect: true })
  gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** Minimum item width used when auto-fit is enabled. */
  @property({ attribute: 'min-item-width' })
  minItemWidth = '16rem';

  /** Automatically fit as many columns as available width allows. */
  @property({ type: Boolean, reflect: true, attribute: 'auto-fit' })
  autoFit = false;

  override render() {
    return html`
      <div
        part="base"
        class="grid"
        style=${styleMap({
          '--wu-grid-columns': String(this.columns),
          '--wu-grid-min-item-width': this.minItemWidth,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-grid': WuGrid;
  }
}