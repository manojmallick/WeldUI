import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-callout.styles.js';

const ICONS: Record<string, string> = {
  info:    'ℹ',
  success: '✓',
  warning: '⚠',
  danger:  '✕',
};

/**
 * A callout box for drawing attention to important content.
 * Less urgent than `<wu-alert>` — no dismiss action.
 *
 * @element wu-callout
 *
 * @slot - Callout body content
 *
 * @cssprop --wu-callout-bg     - Background colour
 * @cssprop --wu-callout-border - Left accent border colour
 * @cssprop --wu-callout-color  - Icon and title colour
 *
 * @example
 * ```html
 * <wu-callout variant="warning" title="Beta feature">
 *   This API may change in a future release.
 * </wu-callout>
 * ```
 */
@customElement('wu-callout')
export class WuCallout extends LitElement {
  static styles = styles;

  /** Visual variant */
  @property({ reflect: true })
  variant: 'info' | 'success' | 'warning' | 'danger' = 'info';

  /** Optional bold heading line */
  @property()
  heading?: string;

  override render() {
    return html`
      <div class="callout" role="note">
        <span class="icon" aria-hidden="true">${ICONS[this.variant]}</span>
        <div class="body">
          ${this.heading ? html`<div class="title">${this.heading}</div>` : ''}
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-callout': WuCallout;
  }
}
