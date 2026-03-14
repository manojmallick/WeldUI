import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { sidebarStyles, itemStyles } from './wu-sidebar.styles.js';

/**
 * A single navigation item inside `<wu-sidebar>`.
 *
 * @element wu-sidebar-item
 *
 * @slot icon  - Icon (SVG or img, 20×20)
 * @slot       - Item label text
 *
 * @cssprop --wu-sidebar-item-bg-active   - Background when active
 * @cssprop --wu-sidebar-item-color-active - Text/icon colour when active
 */
@customElement('wu-sidebar-item')
export class WuSidebarItem extends LitElement {
  static styles = itemStyles;

  /** Link href. If omitted, renders a `<button>` instead of `<a>`. */
  @property()
  href?: string;

  /** Mark this item as the current page / active route */
  @property({ type: Boolean, reflect: true })
  active = false;

  /** Disable interaction */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  private _handleClick() {
    if (this.disabled || this.href) return;
    this.dispatchEvent(new CustomEvent('wu-nav', {
      bubbles: true, composed: true, detail: { item: this },
    }));
  }

  render() {
    const inner = html`
      <span class="icon" aria-hidden="true"><slot name="icon"></slot></span>
      <span class="label"><slot></slot></span>
    `;

    return this.href
      ? html`<a href=${ifDefined(this.href)} aria-current=${ifDefined(this.active ? 'page' : undefined)}>${inner}</a>`
      : html`<button class="item-btn" ?disabled=${this.disabled} @click=${this._handleClick}>${inner}</button>`;
  }
}

/**
 * A collapsible application sidebar with header, nav body, and footer slots.
 *
 * @element wu-sidebar
 *
 * @slot header  - Brand / logo area at the top
 * @slot         - Navigation items (`<wu-sidebar-item>` elements)
 * @slot footer  - Bottom slot — user profile, settings link, etc.
 *
 * @event wu-collapse - Emitted when collapsed state changes. Detail: `{ collapsed: boolean }`
 *
 * @csspart sidebar - The outer container
 * @csspart header  - Header section
 * @csspart body    - Scrollable nav area
 * @csspart footer  - Footer section
 * @csspart toggle  - Collapse toggle button
 *
 * @cssprop --wu-sidebar-width           - Width when expanded (default 240px)
 * @cssprop --wu-sidebar-collapsed-width - Width when collapsed (default 64px)
 * @cssprop --wu-sidebar-bg              - Background colour
 * @cssprop --wu-sidebar-border          - Border colour
 *
 * @example
 * ```html
 * <wu-sidebar>
 *   <span slot="header">MyApp</span>
 *   <wu-sidebar-item href="/dashboard" active>
 *     <svg slot="icon">…</svg>
 *     Dashboard
 *   </wu-sidebar-item>
 * </wu-sidebar>
 * ```
 */
@customElement('wu-sidebar')
export class WuSidebar extends LitElement {
  static styles = sidebarStyles;

  /** Whether the sidebar is in collapsed (icon-only) mode */
  @property({ type: Boolean, reflect: true })
  collapsed = false;

  /** Hide the collapse toggle button */
  @property({ type: Boolean, attribute: 'hide-toggle' })
  hideToggle = false;

  private _toggle(): void {
    this.collapsed = !this.collapsed;
    // Propagate collapsed state to child items for label animation
    this.querySelectorAll('wu-sidebar-item').forEach(item => {
      if (this.collapsed) {
        item.setAttribute('collapsed', '');
      } else {
        item.removeAttribute('collapsed');
      }
    });
    this.dispatchEvent(new CustomEvent('wu-collapse', {
      bubbles: true,
      composed: true,
      detail: { collapsed: this.collapsed },
    }));
  }

  render() {
    return html`
      <aside part="sidebar" class="sidebar" aria-label="Sidebar navigation">
        <div part="header" class="header">
          <div class="header-slot"><slot name="header"></slot></div>
          ${!this.hideToggle ? html`
            <button
              part="toggle"
              class="toggle"
              aria-label=${this.collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              aria-expanded=${!this.collapsed}
              @click=${this._toggle}
            >
              <svg class="toggle-icon" width="16" height="16" viewBox="0 0 16 16"
                   fill="none" stroke="currentColor" stroke-width="2"
                   stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M10 4L6 8l4 4"/>
              </svg>
            </button>
          ` : ''}
        </div>
        <nav part="body" class="body">
          <slot></slot>
        </nav>
        <div part="footer" class="footer">
          <slot name="footer"></slot>
        </div>
      </aside>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-sidebar': WuSidebar;
    'wu-sidebar-item': WuSidebarItem;
  }
}
