import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-stack.styles.js';

type Alignment = 'start' | 'center' | 'end' | 'stretch';
type Justification = 'start' | 'center' | 'end' | 'between' | 'around';

/**
 * A one-dimensional layout primitive for vertically or horizontally stacking items.
 *
 * @element wu-stack
 *
 * @slot - Stack children
 *
 * @csspart base - The flex layout wrapper
 *
 * @cssprop --wu-stack-gap - Gap between stack children
 * @cssprop --wu-stack-direction - Flex direction for the stack
 *
 * @example
 * ```html
 * <wu-stack gap="lg">
 *   <section>Alpha</section>
 *   <section>Beta</section>
 * </wu-stack>
 * ```
 */
@customElement('wu-stack')
export class WuStack extends LitElement {
  static styles = styles;

  /** Stack direction. */
  @property({ reflect: true })
  direction: 'vertical' | 'horizontal' = 'vertical';

  /** Gap preset between items. */
  @property({ reflect: true })
  gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  /** Cross-axis alignment. */
  @property()
  align: Alignment = 'stretch';

  /** Main-axis distribution. */
  @property()
  justify: Justification = 'start';

  private get _alignValue(): string {
    switch (this.align) {
      case 'start': return 'flex-start';
      case 'center': return 'center';
      case 'end': return 'flex-end';
      default: return 'stretch';
    }
  }

  private get _justifyValue(): string {
    switch (this.justify) {
      case 'center': return 'center';
      case 'end': return 'flex-end';
      case 'between': return 'space-between';
      case 'around': return 'space-around';
      default: return 'flex-start';
    }
  }

  override render() {
    return html`
      <div
        part="base"
        class="stack"
        style=${styleMap({
          '--wu-stack-align': this._alignValue,
          '--wu-stack-justify': this._justifyValue,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-stack': WuStack;
  }
}