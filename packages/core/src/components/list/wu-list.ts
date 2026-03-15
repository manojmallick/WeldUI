import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-list.styles.js';

/**
 * A semantic list container. Pair with `<wu-list-item>` for each item.
 *
 * @element wu-list
 *
 * @slot - One or more `<wu-list-item>` elements
 *
 * @cssprop --wu-list-* - Inherits font tokens
 *
 * @example
 * ```html
 * <wu-list>
 *   <wu-list-item>First item</wu-list-item>
 *   <wu-list-item>Second item</wu-list-item>
 * </wu-list>
 * ```
 */
@customElement('wu-list')
export class WuList extends LitElement {
  static styles = styles;

  /** List style type */
  @property({ reflect: true })
  type: 'unordered' | 'ordered' | 'none' = 'unordered';

  override render() {
    return this.type === 'ordered'
      ? html`<ol part="base"><slot></slot></ol>`
      : html`<ul part="base"><slot></slot></ul>`;
  }
}

/**
 * A single item inside a `<wu-list>`.
 *
 * @element wu-list-item
 *
 * @slot - Item content
 */
@customElement('wu-list-item')
export class WuListItem extends LitElement {
  override render() {
    return html`<li part="item"><slot></slot></li>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-list': WuList;
    'wu-list-item': WuListItem;
  }
}
