import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './wu-visually-hidden.styles.js';

/**
 * Hides content visually while keeping it accessible to screen readers.
 * Use this to provide labels for icon-only UI elements.
 *
 * @element wu-visually-hidden
 * @slot - Text content for screen readers only
 * @csspart base - The visually-hidden span
 */
@customElement('wu-visually-hidden')
export class WuVisuallyHidden extends LitElement {
  static styles = styles;

  override render() {
    return html`<span part="base"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-visually-hidden': WuVisuallyHidden;
  }
}
