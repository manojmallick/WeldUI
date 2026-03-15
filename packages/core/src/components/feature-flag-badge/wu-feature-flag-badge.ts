import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-feature-flag-badge.styles.js';

/**
 * A small badge indicating a feature's release status.
 *
 * @element wu-feature-flag-badge
 */
@customElement('wu-feature-flag-badge')
export class WuFeatureFlagBadge extends LitElement {
  static styles = styles;

  @property({ reflect: true }) variant: 'alpha' | 'beta' | 'new' | 'experimental' | 'deprecated' | 'stable' = 'beta';
  @property() label = '';

  private defaultLabel() {
    const map: Record<string, string> = { alpha: 'Alpha', beta: 'Beta', new: 'New', experimental: 'Experimental', deprecated: 'Deprecated', stable: 'Stable' };
    return map[this.variant] ?? this.variant;
  }

  override render() {
    return html`
      <span class="badge" role="status" aria-label="Feature status: ${this.label || this.defaultLabel()}">
        ${this.label || this.defaultLabel()}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-feature-flag-badge': WuFeatureFlagBadge;
  }
}
