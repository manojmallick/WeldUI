import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-empty-state.styles.js';

/**
 * An empty-state placeholder shown when there is no content to display.
 *
 * @element wu-empty-state
 *
 * @slot icon - Icon or illustration above the title
 * @slot - Default slot for extra descriptive content
 * @slot actions - Action buttons (e.g., "Create new" button)
 *
 * @csspart icon - The icon wrapper
 * @csspart title - The title element
 * @csspart description - The description element
 * @csspart actions - The actions wrapper
 *
 * @cssprop --wu-empty-icon-color - Colour of the icon slot
 * @cssprop --wu-empty-title-color - Colour of the title text
 * @cssprop --wu-empty-desc-color - Colour of the description text
 *
 * @example
 * ```html
 * <wu-empty-state title="No results" description="Try adjusting your search.">
 *   <wu-button slot="actions" variant="primary">Clear filters</wu-button>
 * </wu-empty-state>
 * ```
 */
@customElement('wu-empty-state')
export class WuEmptyState extends LitElement {
  static styles = styles;

  /** Primary heading text */
  @property()
  title = '';

  /** Supporting description text */
  @property()
  description = '';

  render() {
    return html`
      <div class="icon" part="icon">
        <slot name="icon">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="8" y="8" width="32" height="32" rx="4"
              stroke="currentColor" stroke-width="2" fill="none"
            />
            <path
              d="M16 24h16M16 30h10"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
            />
            <circle cx="24" cy="18" r="3" stroke="currentColor" stroke-width="2" fill="none" />
          </svg>
        </slot>
      </div>

      ${this.title
        ? html`<p class="title" part="title">${this.title}</p>`
        : ''}

      <p class="description" part="description">
        ${this.description}
        <slot></slot>
      </p>

      <div class="actions" part="actions">
        <slot name="actions"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-empty-state': WuEmptyState;
  }
}
