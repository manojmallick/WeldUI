import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-container.styles.js';

/**
 * A centered content wrapper with configurable max width and inline padding.
 *
 * @element wu-container
 *
 * @slot - Container content
 *
 * @csspart base - The centered inner wrapper
 *
 * @cssprop --wu-container-max-width - Maximum width of the content area
 * @cssprop --wu-container-padding-inline - Inline padding applied to the content area
 *
 * @example
 * ```html
 * <wu-container size="xl">
 *   <h1>Page Title</h1>
 * </wu-container>
 * ```
 */
@customElement('wu-container')
export class WuContainer extends LitElement {
  static styles = styles;

  /** Width preset for the container. */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'lg';

  /** Removes the default inline padding when true. */
  @property({ type: Boolean, reflect: true })
  flush = false;

  override render() {
    return html`<div part="base" class="base"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-container': WuContainer;
  }
}