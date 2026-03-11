import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-breadcrumb.styles.js';

/**
 * A breadcrumb navigation component with structured data markup.
 *
 * @element wu-breadcrumb
 *
 * @slot - Place `<a>` or `<span>` elements for each breadcrumb item
 *
 * @cssprop --wu-breadcrumb-color - Item link colour
 * @cssprop --wu-breadcrumb-color-active - Current page colour
 * @cssprop --wu-breadcrumb-color-hover - Hover colour
 */
@customElement('wu-breadcrumb')
export class WuBreadcrumb extends LitElement {
  static styles = styles;

  /** Custom separator character */
  @property()
  separator = '/';

  /** Accessible label for the nav element */
  @property()
  label = 'Breadcrumb';

  override firstUpdated(): void {
    this.style.setProperty('--wu-breadcrumb-separator-char', `"${this.separator}"`);
  }

  render() {
    return html`
      <nav aria-label=${this.label}>
        <ol>
          <slot></slot>
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-breadcrumb': WuBreadcrumb;
  }
}
