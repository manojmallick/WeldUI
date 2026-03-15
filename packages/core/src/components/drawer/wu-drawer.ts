import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-drawer.styles.js';

/**
 * A sliding drawer/panel component with backdrop.
 * @element wu-drawer
 * @slot - Drawer body content
 * @slot footer - Footer actions
 * @event wu-close - Fires when drawer requests close
 */
@customElement('wu-drawer')
export class WuDrawer extends LitElement {
  static styles = styles;
  @property({ type: Boolean, reflect: true }) open = false;
  @property() label = '';
  @property({ reflect: true }) placement: 'left' | 'right' | 'top' | 'bottom' = 'right';

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._onKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._onKeydown);
  }

  private _onKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && this.open) this._close();
  };

  private _close() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('wu-close', { bubbles: true, composed: true }));
  }

  render() {
    return html`
      <div class="backdrop" @click=${this._close}></div>
      <div class="drawer" role="dialog" aria-modal="true" aria-label=${this.label || 'Drawer'}>
        <div class="drawer-header">
          <span class="drawer-title">${this.label}</span>
          <button class="close-btn" @click=${this._close} aria-label="Close drawer">✕</button>
        </div>
        <div class="drawer-body"><slot></slot></div>
        <div class="drawer-footer"><slot name="footer"></slot></div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-drawer': WuDrawer; } }
