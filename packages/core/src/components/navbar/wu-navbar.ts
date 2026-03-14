import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-navbar.styles.js';

/**
 * A top navigation bar with logo, nav links, and actions slots.
 * Includes a responsive mobile burger menu that reveals a drawer.
 *
 * @element wu-navbar
 *
 * @slot logo   - Brand logo or wordmark
 * @slot        - Navigation links (hidden on mobile, shown in drawer)
 * @slot actions - Right-side actions: buttons, avatar, etc.
 *
 * @event wu-menu-open  - Emitted when the mobile drawer opens
 * @event wu-menu-close - Emitted when the mobile drawer closes
 *
 * @csspart bar     - The main bar container
 * @csspart logo    - Logo wrapper
 * @csspart nav     - Desktop nav wrapper
 * @csspart actions - Actions wrapper
 * @csspart burger  - Mobile burger button
 * @csspart drawer  - Mobile nav drawer
 *
 * @cssprop --wu-navbar-height  - Height of the bar (default 60px)
 * @cssprop --wu-navbar-bg      - Background colour
 * @cssprop --wu-navbar-border  - Bottom border colour
 * @cssprop --wu-navbar-padding - Horizontal padding
 * @cssprop --wu-navbar-z       - z-index when sticky/fixed
 *
 * @example
 * ```html
 * <wu-navbar>
 *   <span slot="logo">MyApp</span>
 *   <a href="/about">About</a>
 *   <wu-button slot="actions" size="sm">Sign in</wu-button>
 * </wu-navbar>
 * ```
 */
@customElement('wu-navbar')
export class WuNavbar extends LitElement {
  static styles = styles;

  /** Pin the navbar to the top of the viewport using `position: sticky` */
  @property({ type: Boolean, reflect: true })
  sticky = false;

  /** Fix the navbar to the top of the viewport using `position: fixed` */
  @property({ type: Boolean, reflect: true })
  fixed = false;

  /** Mobile drawer open state */
  @state()
  private _open = false;

  private _toggleDrawer(): void {
    this._open = !this._open;
    // Reflect for CSS host selector
    if (this._open) {
      this.setAttribute('_open', '');
    } else {
      this.removeAttribute('_open');
    }
    this.dispatchEvent(new CustomEvent(this._open ? 'wu-menu-open' : 'wu-menu-close', {
      bubbles: true,
      composed: true,
    }));
  }

  render() {
    return html`
      <header part="bar" class="bar">
        <a class="logo" part="logo" aria-label="Home">
          <slot name="logo"></slot>
        </a>
        <nav class="nav" part="nav" aria-label="Main navigation">
          <slot></slot>
        </nav>
        <div class="actions" part="actions">
          <slot name="actions"></slot>
        </div>
        <button
          part="burger"
          class="burger"
          aria-label="Toggle navigation"
          aria-expanded=${this._open}
          aria-controls="mobile-drawer"
          @click=${this._toggleDrawer}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round">
            ${this._open
              ? html`<path d="M2 2l14 14M16 2L2 16"/>`
              : html`<path d="M2 4h14M2 9h14M2 14h14"/>`}
          </svg>
        </button>
      </header>
      <nav id="mobile-drawer" part="drawer" class="drawer"
           aria-label="Mobile navigation" aria-hidden=${!this._open}>
        <slot name="mobile"><slot></slot></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-navbar': WuNavbar;
  }
}
