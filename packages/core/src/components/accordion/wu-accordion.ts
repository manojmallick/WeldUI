import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { accordionStyles, itemStyles } from './wu-accordion.styles.js';

/**
 * An individual accordion item with a toggle header.
 *
 * @element wu-accordion-item
 *
 * @slot - Accordion item body content
 * @slot summary - The clickable header text
 *
 * @event wu-toggle - Emitted when the item is opened or closed
 */
@customElement('wu-accordion-item')
export class WuAccordionItem extends LitElement {
  static styles = itemStyles;

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
    return html`
      <button
        class="header"
        aria-expanded=${this.open}
        ?disabled=${this.disabled}
        @click=${this._toggle}
      >
        <slot name="summary">Accordion Item</slot>
        <span class="chevron" aria-hidden="true">▼</span>
      </button>
      <div class="body" aria-hidden=${!this.open}>
        <div class="content"><slot></slot></div>
      </div>
    `;
  }
}

/**
 * An accordion container. Optionally enforces single-open behaviour.
 *
 * @element wu-accordion
 *
 * @slot - Place `<wu-accordion-item>` elements here
 */
@customElement('wu-accordion')
export class WuAccordion extends LitElement {
  static styles = accordionStyles;

  /** Only allow one item open at a time */
  @property({ type: Boolean, attribute: 'single' })
  single = false;

  override firstUpdated(): void {
    if (this.single) {
      this.addEventListener('wu-toggle', this._onToggle.bind(this));
    }
  }

  private _onToggle(e: Event): void {
    const item = e.target as WuAccordionItem;
    if (!item.open) return;
    this.querySelectorAll<WuAccordionItem>('wu-accordion-item').forEach(el => {
      if (el !== item) el.open = false;
    });
  }

  render() {
    return html`<div class="accordion" role="list"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-accordion': WuAccordion;
    'wu-accordion-item': WuAccordionItem;
  }
}
