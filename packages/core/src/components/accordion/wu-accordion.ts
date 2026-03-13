import { LitElement, html, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { accordionStyles, itemStyles } from './wu-accordion.styles.js';

let _uid = 0;

/**
 * An individual accordion item with an animated toggle panel.
 *
 * @element wu-accordion-item
 *
 * @slot - Accordion item body content
 * @slot summary - The clickable header text
 *
 * @event wu-toggle - Emitted when the item is opened or closed. Detail: `{ open: boolean }`
 *
 * @csspart header - The trigger button
 * @csspart panel - The collapsible content panel
 *
 * @cssprop --wu-accordion-header-bg - Header background colour
 * @cssprop --wu-accordion-header-bg-hover - Header background on hover
 * @cssprop --wu-accordion-header-color - Header text colour
 * @cssprop --wu-accordion-padding-x - Horizontal padding
 * @cssprop --wu-accordion-padding-y - Vertical padding
 * @cssprop --wu-accordion-content-color - Body text colour
 */
@customElement('wu-accordion-item')
export class WuAccordionItem extends LitElement {
  static styles = itemStyles;

  // Unique ID per instance for ARIA linkage
  private readonly _uid = ++_uid;

  /** Whether this item is expanded */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Disable this item */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  private _toggle(): void {
    if (this.disabled) return;
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent('wu-toggle', {
      bubbles: true, composed: true, detail: { open: this.open },
    }));
  }

  render() {
    const headerId = `wu-acc-header-${this._uid}`;
    const panelId  = `wu-acc-panel-${this._uid}`;
    return html`
      <button
        part="header"
        class="header"
        id="${headerId}"
        aria-expanded="${this.open ? 'true' : 'false'}"
        aria-controls="${panelId}"
        ?disabled=${this.disabled}
        @click=${this._toggle}
      >
        <slot name="summary">Accordion Item</slot>
        <svg class="chevron" aria-hidden="true" width="16" height="16"
             viewBox="0 0 16 16" fill="none" stroke="currentColor"
             stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 6l4 4 4-4"/>
        </svg>
      </button>
      <div
        part="panel"
        class="body"
        id="${panelId}"
        role="region"
        aria-labelledby="${headerId}"
        aria-hidden="${ifDefined(this.open ? undefined : 'true')}"
      >
        <div class="content"><slot></slot></div>
      </div>
    `;
  }
}

/**
 * An accordion container that groups `<wu-accordion-item>` elements.
 * Add the `single` attribute to restrict to one open item at a time.
 *
 * @element wu-accordion
 *
 * @slot - Place `<wu-accordion-item>` elements here
 *
 * @cssprop --wu-accordion-border - Border colour around the group
 * @cssprop --wu-accordion-radius - Border radius of the group
 *
 * @example
 * ```html
 * <wu-accordion single>
 *   <wu-accordion-item>
 *     <span slot="summary">Question</span>
 *     Answer content here.
 *   </wu-accordion-item>
 * </wu-accordion>
 * ```
 */
@customElement('wu-accordion')
export class WuAccordion extends LitElement {
  static styles = accordionStyles;

  /** Restrict so only one item can be open at a time */
  @property({ type: Boolean, reflect: true })
  single = false;

  // Arrow function retains `this` when added/removed as a listener
  private readonly _onToggle = (e: Event): void => {
    const item = e.target as WuAccordionItem;
    if (!item.open) return;
    this.querySelectorAll<WuAccordionItem>('wu-accordion-item').forEach(el => {
      if (el !== item) el.open = false;
    });
  };

  override updated(changed: PropertyValues): void {
    if (!changed.has('single')) return;
    if (this.single) {
      this.addEventListener('wu-toggle', this._onToggle);
    } else {
      this.removeEventListener('wu-toggle', this._onToggle);
    }
  }

  render() {
    return html`<div class="accordion"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-accordion': WuAccordion;
    'wu-accordion-item': WuAccordionItem;
  }
}
