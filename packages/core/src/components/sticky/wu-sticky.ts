import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-sticky.styles.js';

/**
 * A `position: sticky` layout wrapper with configurable offset and z-index.
 *
 * @element wu-sticky
 * @slot - Content to be made sticky
 * @csspart base - The sticky wrapper element
 * @cssprop --wu-sticky-top - Top offset when sticking
 * @cssprop --wu-sticky-z - z-index value
 */
@customElement('wu-sticky')
export class WuSticky extends LitElement {
  static styles = styles;

  /** Top offset (CSS value, e.g. "0", "64px") */
  @property({ reflect: true }) top = '0';

  /** Bottom offset (CSS value) */
  @property({ reflect: true }) bottom = '';

  /** z-index when sticky */
  @property({ type: Number, reflect: true, attribute: 'z-index' }) zIndex = 10;

  override render() {
    return html`
      <div
        part="base"
        class="sticky"
        style=${styleMap({
          '--wu-sticky-top': this.top || '0',
          '--wu-sticky-bottom': this.bottom || '',
          '--wu-sticky-z': String(this.zIndex),
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-sticky': WuSticky;
  }
}
