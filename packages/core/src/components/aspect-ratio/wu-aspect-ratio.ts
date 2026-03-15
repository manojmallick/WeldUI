import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-aspect-ratio.styles.js';

/**
 * Maintains a width-to-height aspect ratio for media containers.
 *
 * @element wu-aspect-ratio
 * @slot - Media content (img, video, iframe)
 * @csspart base - The aspect ratio wrapper
 * @cssprop --wu-aspect-ratio-ratio - CSS aspect-ratio value
 */
@customElement('wu-aspect-ratio')
export class WuAspectRatio extends LitElement {
  static styles = styles;

  /** CSS aspect-ratio value e.g. "16/9", "4/3", "1" */
  @property({ reflect: true }) ratio = '16/9';

  override render() {
    return html`
      <div
        part="base"
        class="aspect-ratio"
        style=${styleMap({ '--wu-aspect-ratio-ratio': this.ratio })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-aspect-ratio': WuAspectRatio;
  }
}
