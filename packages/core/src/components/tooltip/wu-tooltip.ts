import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-tooltip.styles.js';

/**
 * A tooltip that displays contextual text on hover or focus.
 *
 * @element wu-tooltip
 *
 * @slot - The trigger element that activates the tooltip
 *
 * @cssprop --wu-tooltip-bg - Tooltip background colour
 * @cssprop --wu-tooltip-color - Tooltip text colour
 * @cssprop --wu-tooltip-delay - Opening delay
 * @cssprop --wu-tooltip-max-width - Max tooltip width
 */
@customElement('wu-tooltip')
export class WuTooltip extends LitElement {
  static styles = styles;

  /** Tooltip text content */
  @property()
  content = '';

  /** Placement relative to trigger */
  @property({ reflect: true })
  placement: 'top' | 'bottom' | 'left' | 'right' = 'top';

  /** Delay in ms before showing */
  @property({ type: Number })
  delay = 300;

  @state() private _visible = false;

  private _showTimer: ReturnType<typeof setTimeout> | null = null;

  private _show(): void {
    this._showTimer = setTimeout(() => { this._visible = true; }, this.delay);
  }

  private _hide(): void {
    if (this._showTimer) { clearTimeout(this._showTimer); this._showTimer = null; }
    this._visible = false;
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this._hide();
  }

  render() {
    const tooltipId = 'tooltip-content';
    return html`
      <span
        class="trigger"
        aria-describedby=${this._visible ? tooltipId : ''}
        @mouseenter=${this._show}
        @mouseleave=${this._hide}
        @focusin=${this._show}
        @focusout=${this._hide}
      >
        <slot></slot>
      </span>
      <span
        id=${tooltipId}
        role="tooltip"
        class="tooltip ${this._visible ? 'visible' : ''}"
        aria-hidden=${!this._visible}
      >${this.content}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-tooltip': WuTooltip;
  }
}
