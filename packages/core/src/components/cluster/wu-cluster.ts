import { LitElement, html } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-cluster.styles.js';

type Alignment = 'start' | 'center' | 'end' | 'stretch';
type Justification = 'start' | 'center' | 'end' | 'between' | 'around';

/**
 * A wrapping flex layout for groups of badges, filters, actions, or chips.
 *
 * @element wu-cluster
 *
 * @slot - Cluster children
 *
 * @csspart base - The wrapping flex layout
 *
 * @cssprop --wu-cluster-gap - Gap between clustered children
 *
 * @example
 * ```html
 * <wu-cluster gap="sm">
 *   <wu-badge>Design</wu-badge>
 *   <wu-badge>System</wu-badge>
 * </wu-cluster>
 * ```
 */
@customElement('wu-cluster')
export class WuCluster extends LitElement {
  static styles = styles;

  /** Gap preset between wrapped items. */
  @property({ reflect: true })
  gap: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';

  /** Cross-axis alignment for the cluster. */
  @property()
  align: Alignment = 'center';

  /** Main-axis distribution for the cluster. */
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
        class="cluster"
        style=${styleMap({
          '--wu-cluster-align': this._alignValue,
          '--wu-cluster-justify': this._justifyValue,
        })}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-cluster': WuCluster;
  }
}