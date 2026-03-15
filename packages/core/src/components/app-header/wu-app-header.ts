import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-app-header.styles.js';

/**
 * Top application header with logo, navigation, and actions slots.
 *
 * @element wu-app-header
 * @slot logo    - Brand logo / wordmark
 * @slot nav     - Primary navigation links
 * @slot actions - Right-aligned action buttons (search, avatar, etc.)
 */
@customElement('wu-app-header')
export class WuAppHeader extends LitElement {
  static styles = styles;

  @property() heading = '';

  override render() {
    return html`
      <header class="header" role="banner">
        <div class="logo"><slot name="logo">${this.heading ? html`<span class="wordmark">${this.heading}</span>` : ''}</slot></div>
        <nav class="nav" aria-label="Primary"><slot name="nav"></slot></nav>
        <div class="actions"><slot name="actions"></slot></div>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-app-header': WuAppHeader;
  }
}
