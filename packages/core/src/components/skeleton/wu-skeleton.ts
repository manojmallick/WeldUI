import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-skeleton.styles.js';

/**
 * A skeleton placeholder for loading states.
 *
 * @element wu-skeleton
 *
 * @cssprop --wu-skeleton-color - Base skeleton colour
 * @cssprop --wu-skeleton-shimmer - Shimmer highlight colour
 * @cssprop --wu-skeleton-speed - Animation duration
 */
@customElement('wu-skeleton')
export class WuSkeleton extends LitElement {
  static styles = styles;

  /** Shape variant */
  @property({ reflect: true })
  variant: 'text' | 'circle' | 'rect' = 'text';

  /** Width (CSS value) */
  @property()
  width = '100%';

  /** Height (CSS value) */
  @property()
  height = '';

  render() {
    const inlineStyles: Record<string, string> = { width: this.width };
    if (this.height) inlineStyles['height'] = this.height;

    return html`
      <div
        class="skeleton"
        style=${styleMap(inlineStyles)}
        role="status"
        aria-label="Loading…"
        aria-busy="true"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-skeleton': WuSkeleton;
  }
}
