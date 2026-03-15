import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-collapse.styles.js';

/**
 * A single collapsible panel with a toggle trigger.
 * For multi-panel grouped accordions use `<wu-accordion>`.
 *
 * @element wu-collapse
 *
 * @slot - The content to show/hide
 * @slot trigger - Custom trigger content (defaults to the `label` property)
 *
 * @event wu-open  - Emitted when the panel opens
 * @event wu-close - Emitted when the panel closes
 *
 * @example
 * ```html
 * <wu-collapse label="Show details">
 *   <p>Hidden content revealed on expand.</p>
 * </wu-collapse>
 * ```
 */
@customElement('wu-collapse')
export class WuCollapse extends LitElement {
  static styles = styles;

  /** Whether the panel is expanded */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Trigger label text */
  @property()
  label = '';

  /** Disabled — prevents toggling */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  private _toggle() {
    if (this.disabled) return;
    this.open = !this.open;
    this.dispatchEvent(new CustomEvent(this.open ? 'wu-open' : 'wu-close', {
      bubbles: true, composed: true
    }));
  }

  override render() {
    return html`
      <button
        part="trigger"
        class="trigger"
        ?disabled=${this.disabled}
        aria-expanded=${this.open ? 'true' : 'false'}
        @click=${this._toggle}
      >
        <slot name="trigger">${this.label}</slot>
        <svg class="chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <polyline points="4,6 8,10 12,6"/>
        </svg>
      </button>
      <div
        part="content"
        class="content"
        role="region"
        aria-hidden=${this.open ? 'false' : 'true'}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-collapse': WuCollapse;
  }
}
