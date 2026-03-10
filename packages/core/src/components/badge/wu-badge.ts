import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-badge.styles.js';

/**
 * A small status/label indicator component.
 *
 * @element wu-badge
 *
 * @slot - Badge label text
 *
 * @csspart base - The badge container element
 *
 * @cssprop --wu-badge-bg - Background colour
 * @cssprop --wu-badge-color - Text colour
 * @cssprop --wu-badge-border - Border colour
 */
@customElement('wu-badge')
export class WuBadge extends LitElement {
  static styles = styles;

  /** Visual style variant */
  @property({ reflect: true })
  variant: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'outline' = 'default';

  override render() {
    return html`<span part="base" class="badge"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-badge': WuBadge;
  }
}
