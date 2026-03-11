import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { tabsStyles, tabStyles, panelStyles } from './wu-tabs.styles.js';

/**
 * A single tab button inside `<wu-tabs>`.
 *
 * @element wu-tab
 *
 * @slot - Tab label
 *
 * @cssprop --wu-tab-color - Tab text colour
 * @cssprop --wu-tab-color-active - Active tab colour
 */
@customElement('wu-tab')
export class WuTab extends LitElement {
  static styles = tabStyles;

  /** The panel this tab controls */
  @property()
  panel = '';

  /** Whether this tab is active */
  @property({ type: Boolean, reflect: true })
  active = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  private _handleClick() {
    if (this.disabled) return;
    this.dispatchEvent(new CustomEvent('wu-tab-click', {
      bubbles: true,
      composed: true,
      detail: { panel: this.panel },
    }));
  }

  render() {
    return html`
      <button
        role="tab"
        aria-selected=${this.active}
        aria-controls=${this.panel}
        ?disabled=${this.disabled}
        tabindex=${this.active ? '0' : '-1'}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}

/**
 * A tab panel — shown when its associated `<wu-tab>` is active.
 *
 * @element wu-tab-panel
 *
 * @slot - Panel content
 */
@customElement('wu-tab-panel')
export class WuTabPanel extends LitElement {
  static styles = panelStyles;

  /** ID matching the `panel` attribute on `<wu-tab>` */
  @property({ reflect: true })
  name = '';

  /** Whether this panel is active (shown) */
  @property({ type: Boolean, reflect: true })
  active = false;

  render() {
    return html`
      <div role="tabpanel" id=${this.name} aria-hidden=${!this.active}>
        <slot></slot>
      </div>
    `;
  }
}

/**
 * A tabbed navigation component. Contains `<wu-tab>` and `<wu-tab-panel>` elements.
 *
 * @element wu-tabs
 *
 * @slot - Place `<wu-tab>` and `<wu-tab-panel>` elements here
 *
 * @event wu-tab-change - Emitted when the active tab changes ({ panel: string })
 *
 * @cssprop --wu-tabs-border - Tab list border colour
 * @cssprop --wu-tab-indicator - Active tab indicator colour
 */
@customElement('wu-tabs')
export class WuTabs extends LitElement {
  static styles = tabsStyles;

  /** Orientation of the tab list */
  @property({ reflect: true })
  orientation: 'horizontal' | 'vertical' = 'horizontal';

  /** The currently active panel name */
  @property({ attribute: 'active-panel' })
  activePanel = '';

  override firstUpdated(): void {
    this._setup();
    // Use event delegation — listen for wu-tab-click which bubbles/composes from wu-tab
    this.addEventListener('wu-tab-click', (e: Event) => {
      const evt = e as CustomEvent<{ panel: string }>;
      const tabs = this._tabs();
      const panels = this._panels();
      const tab = tabs.find(t => t.panel === evt.detail.panel);
      if (!tab || tab.disabled || tab.active) return;
      this._activate(evt.detail.panel, tabs, panels);
      this.dispatchEvent(new CustomEvent('wu-tab-change', {
        bubbles: true, composed: true, detail: { panel: evt.detail.panel },
      }));
    });
  }

  private _setup(): void {
    const tabs = this._tabs();
    const panels = this._panels();
    if (!tabs.length) return;

    const activeTab = tabs.find(t => t.panel === this.activePanel)
      ?? tabs.find(t => !t.disabled)
      ?? tabs[0];

    this._activate(activeTab.panel, tabs, panels);
    this._attachKeyboardListeners(tabs, panels);
  }

  private _tabs(): WuTab[] {
    return Array.from(this.querySelectorAll<WuTab>('wu-tab'));
  }

  private _panels(): WuTabPanel[] {
    return Array.from(this.querySelectorAll<WuTabPanel>('wu-tab-panel'));
  }

  private _activate(panelName: string, tabs: WuTab[], panels: WuTabPanel[]): void {
    tabs.forEach(t => { t.active = t.panel === panelName; });
    panels.forEach(p => { p.active = p.name === panelName; });
    this.activePanel = panelName;
  }

  private _attachKeyboardListeners(tabs: WuTab[], panels: WuTabPanel[]): void {
    // Keyboard navigation
    const tablist = this.shadowRoot?.querySelector('.tablist');
    tablist?.addEventListener('keydown', (e: Event) => this._onKeydown(e as KeyboardEvent, tabs, panels));
  }

  private _onKeydown(e: KeyboardEvent, tabs: WuTab[], panels: WuTabPanel[]): void {
    const idx = tabs.findIndex(t => t.active);
    const isHorizontal = this.orientation === 'horizontal';
    let next = -1;

    if ((isHorizontal && e.key === 'ArrowRight') || (!isHorizontal && e.key === 'ArrowDown')) {
      next = (idx + 1) % tabs.length;
    } else if ((isHorizontal && e.key === 'ArrowLeft') || (!isHorizontal && e.key === 'ArrowUp')) {
      next = (idx - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      next = 0;
    } else if (e.key === 'End') {
      next = tabs.length - 1;
    }

    if (next >= 0 && !tabs[next].disabled) {
      e.preventDefault();
      this._activate(tabs[next].panel, tabs, panels);
      tabs[next].shadowRoot?.querySelector<HTMLButtonElement>('button')?.focus();
    }
  }

  render() {
    return html`
      <div class="tablist" role="tablist" aria-orientation=${this.orientation}>
        <slot name="tabs"></slot>
      </div>
      <div class="panels">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-tabs': WuTabs;
    'wu-tab': WuTab;
    'wu-tab-panel': WuTabPanel;
  }
}
