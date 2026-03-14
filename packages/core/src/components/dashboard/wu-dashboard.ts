import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-dashboard.styles.js';

/**
 * Application shell layout: navbar (top) + sidebar (left) + main content area.
 * Drop in a `<wu-navbar>` via the `navbar` slot, a `<wu-sidebar>` via the
 * `sidebar` slot, and your page content in the default slot.
 *
 * @element wu-dashboard
 *
 * @slot navbar   - Top navigation bar (`<wu-navbar>`)
 * @slot sidebar  - Side navigation (`<wu-sidebar>`)
 * @slot          - Main page content
 *
 * @csspart shell   - Outer flex column wrapper
 * @csspart body    - Horizontal flex row (sidebar + main)
 * @csspart main    - The scrollable main content area
 *
 * @cssprop --wu-dashboard-padding - Inner padding of main content area (default: var(--wu-space-6))
 *
 * @example
 * ```html
 * <wu-dashboard style="height:100vh">
 *   <wu-navbar slot="navbar">…</wu-navbar>
 *   <wu-sidebar slot="sidebar">…</wu-sidebar>
 *   <h1>Dashboard</h1>
 *   <p>Main content goes here.</p>
 * </wu-dashboard>
 * ```
 */
@customElement('wu-dashboard')
export class WuDashboard extends LitElement {
  static styles = styles;

  /** Remove the max-width constraint from the main content area */
  @property({ type: Boolean, attribute: 'full-width', reflect: true })
  fullWidth = false;

  render() {
    return html`
      <div part="shell" class="shell">
        <div class="topbar">
          <slot name="navbar"></slot>
        </div>
        <div part="body" class="body">
          <div class="sidearea">
            <slot name="sidebar"></slot>
          </div>
          <main part="main">
            <div class="main-inner">
              <slot></slot>
            </div>
          </main>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-dashboard': WuDashboard;
  }
}
