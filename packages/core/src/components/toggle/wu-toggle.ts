import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-toggle.styles.js';

/**
 * A toggle switch component for boolean on/off states.
 *
 * @element wu-toggle
 *
 * @event wu-change - Emitted when the toggle state changes
 *
 * @csspart base  - The outer wrapper
 * @csspart track - The toggle track element
 * @csspart thumb - The toggle thumb (knob)
 * @csspart label - The label element
 *
 * @cssprop --wu-toggle-width      - Track width
 * @cssprop --wu-toggle-height     - Track height
 * @cssprop --wu-toggle-on-bg      - Track colour when on
 * @cssprop --wu-toggle-off-bg     - Track colour when off
 * @cssprop --wu-toggle-thumb-size - Thumb diameter
 */
@customElement('wu-toggle')
export class WuToggle extends LitElement {
  static styles = styles;

  private readonly _uid = Math.random().toString(36).slice(2, 9);

  /** Whether the toggle is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position */
  @property({ attribute: 'label-position' })
  labelPosition: 'start' | 'end' = 'end';

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Name attribute for form submission */
  @property()
  name?: string;

  /** Hint text shown below the toggle */
  @property()
  hint?: string;

  /** Error message — marks the toggle as invalid */
  @property()
  error?: string;

  private _handleChange(e: Event) {
    this.checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true,
      composed: true,
      detail: { checked: this.checked }
    }));
  }

  override render() {
    const toggleId = `wu-toggle-${this._uid}`;
    const errorId = `${toggleId}-error`;
    const hintId = `${toggleId}-hint`;
    const describedBy = this.error ? errorId : this.hint ? hintId : undefined;
    const labelEl = this.label ? html`<label part="label" for=${toggleId}>${this.label}</label>` : '';
    return html`
      <div part="base" class="wrapper">
        ${this.labelPosition === 'start' ? labelEl : ''}
        <input
          type="checkbox"
          id=${toggleId}
          name=${this.name ?? ''}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          role="switch"
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-invalid=${ifDefined(this.error ? 'true' : undefined)}
          aria-describedby=${ifDefined(describedBy)}
          @change=${this._handleChange}
        />
        <div part="track" class="track ${this.checked ? 'on' : ''}">
          <div part="thumb" class="thumb"></div>
        </div>
        ${this.labelPosition === 'end' ? labelEl : ''}
      </div>
      ${this.error ? html`<span id=${errorId} class="error" role="alert">${this.error}</span>` : ''}
      ${this.hint && !this.error ? html`<span id=${hintId} class="hint">${this.hint}</span>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-toggle': WuToggle;
  }
}
