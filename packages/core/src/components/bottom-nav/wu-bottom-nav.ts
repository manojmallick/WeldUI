import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles, itemStyles } from './wu-bottom-nav.styles.js';

/**
 * Mobile bottom navigation bar.
 * @element wu-bottom-nav
 * @slot - wu-bottom-nav-item children
 * @event wu-change - Fires on item activate, detail: { value: string }
 */
@customElement('wu-bottom-nav')
export class WuBottomNav extends LitElement {
  static styles = styles;

  @property() value = '';

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('wu-item-click', this._handleSelect as EventListener);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('wu-item-click', this._handleSelect as EventListener);
  }

  private _handleSelect(e: CustomEvent) {
    const val = e.detail.value;
    const items = this.querySelectorAll('wu-bottom-nav-item') as NodeListOf<WuBottomNavItem>;
    items.forEach(item => { item.active = item.value === val; });
    this.value = val;
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: val } }));
  }

  render() {
    return html`<nav><slot></slot></nav>`;
  }
}

/**
 * An item inside wu-bottom-nav.
 * @element wu-bottom-nav-item
 */
@customElement('wu-bottom-nav-item')
export class WuBottomNavItem extends LitElement {
  static styles = itemStyles;

  @property({ reflect: true }) value = '';
  @property() label = '';
  @property() icon = '';
  @property({ type: Boolean, reflect: true }) active = false;

  private _click() {
    this.dispatchEvent(new CustomEvent('wu-item-click', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  render() {
    return html`
      <button role="tab" aria-selected=${this.active} @click=${this._click}>
        <span class="icon" aria-hidden="true">${this.icon}</span>
        <span class="label">${this.label}</span>
      </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-bottom-nav': WuBottomNav;
    'wu-bottom-nav-item': WuBottomNavItem;
  }
}
