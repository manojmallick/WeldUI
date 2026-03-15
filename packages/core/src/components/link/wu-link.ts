import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-link.styles.js';

/**
 * A styled anchor (`<a>`) element with external-link indicator and download support.
 *
 * @element wu-link
 * @slot - Link text
 * @slot prefix - Content before the label
 * @csspart base - The anchor element
 * @event wu-click - Emitted when the link is clicked
 */
@customElement('wu-link')
export class WuLink extends LitElement {
  static styles = styles;

  /** Link destination */
  @property() href = '';

  /** Opens in new tab; auto-adds rel="noopener noreferrer" */
  @property({ type: Boolean, reflect: true }) external = false;

  /** Triggers browser download, optionally with a filename */
  @property() download = '';

  /** Visual style */
  @property({ reflect: true }) variant: 'default' | 'subtle' | 'danger' = 'default';

  /** Underline style */
  @property({ reflect: true }) underline: 'hover' | 'always' | 'never' = 'hover';

  override render() {
    return html`
      <a
        part="base"
        href=${this.href}
        ?download=${!!this.download}
        target=${ifDefined(this.external ? '_blank' : undefined)}
        rel=${ifDefined(this.external ? 'noopener noreferrer' : undefined)}
        aria-label=${ifDefined(this.external ? `${this.textContent?.trim()} (opens in new tab)` : undefined)}
      >
        <slot name="prefix"></slot>
        <slot></slot>
        ${this.external
          ? html`<svg class="external-icon" aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`
          : ''}
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-link': WuLink;
  }
}
