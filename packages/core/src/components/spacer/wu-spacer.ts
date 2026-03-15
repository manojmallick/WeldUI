import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-spacer.styles.js';

/**
 * A flexible space-filling element for flex and grid layouts.
 * With `size="auto"` it fills all remaining flex space.
 * With a t-shirt size it renders a fixed-size gap block.
 *
 * @element wu-spacer
 * @csspart base - The spacer element
 */
@customElement('wu-spacer')
export class WuSpacer extends LitElement {
  static styles = styles;

  /** "auto" to fill remaining flex space, or a fixed size */
  @property({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'auto' = 'auto';

  override render() {
    return html`<span part="base" aria-hidden="true"></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-spacer': WuSpacer;
  }
}
