import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-app-shell.styles.js';

/**
 * Full-page layout shell combining a sidebar, header, and main content area.
 *
 * @element wu-app-shell
 * @slot sidebar - The sidebar navigation area
 * @slot header  - The top application header
 * @slot         - Main content area (default slot)
 */
@customElement('wu-app-shell')
export class WuAppShell extends LitElement {
  static styles = styles;

  /** Collapse sidebar to icon-only mode */
  @property({ type: Boolean, reflect: true, attribute: 'sidebar-collapsed' }) sidebarCollapsed = false;
  /** Remove the sidebar entirely */
  @property({ type: Boolean, attribute: 'no-sidebar' }) noSidebar = false;

  override render() {
    return html`
      <div class="shell ${this.sidebarCollapsed ? 'collapsed' : ''} ${this.noSidebar ? 'no-sidebar' : ''}">
        ${!this.noSidebar ? html`<aside class="sidebar"><slot name="sidebar"></slot></aside>` : ''}
        <div class="body">
          <header class="header"><slot name="header"></slot></header>
          <main class="main"><slot></slot></main>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-app-shell': WuAppShell;
  }
}
