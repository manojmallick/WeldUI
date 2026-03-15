import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-switch.styles.js';

/**
 * An iOS-style switch component for boolean form fields.
 * Use `<wu-toggle>` for standalone on/off controls; use `<wu-switch>` inside
 * forms where `name`/`value` semantics are needed.
 *
 * @element wu-switch
 *
 * @event wu-change - Emitted when the checked state changes. Detail: `{ checked: boolean, value: string }`
 *
 * @csspart base  - The root label element
 * @csspart track - The switch track
 * @csspart thumb - The sliding thumb/knob
 * @csspart label - The label text span
 *
 * @cssprop --wu-switch-on-bg       - Track colour when checked
 * @cssprop --wu-switch-off-bg      - Track colour when unchecked
 * @cssprop --wu-switch-thumb-color - Thumb fill colour
 * @cssprop --wu-switch-width       - Track width
 * @cssprop --wu-switch-height      - Track height
 *
 * @example
 * ```html
 * <wu-switch name="notifications" label="Enable notifications" checked></wu-switch>
 * ```
 */
@customElement('wu-switch')
export class WuSwitch extends LitElement {
  static styles = styles;

  /** Whether the switch is on */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Label text */
  @property()
  label?: string;

  /** Label position relative to the track */
  @property({ attribute: 'label-position' })
  labelPosition: 'start' | 'end' = 'end';

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Form field name */
  @property()
  name?: string;

  /** Value submitted with the form when checked */
  @property()
  value = 'on';

  /** Required for form validation */
  @property({ type: Boolean })
  required = false;

  private _handleChange(e: Event) {
    this.checked = (e.target as HTMLInputElement).checked;
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true,
      composed: true,
      detail: { checked: this.checked, value: this.checked ? this.value : '' }
    }));
  }

  override render() {
    const uid = `wu-switch-${this.name ?? Math.random().toString(36).slice(2)}`;
    const labelEl = this.label
      ? html`<span part="label" class="label-text">${this.label}</span>`
      : html`<slot></slot>`;

    return html`
      <label part="base" for=${uid}>
        ${this.labelPosition === 'start' ? labelEl : ''}
        <input
          type="checkbox"
          id=${uid}
          name=${this.name ?? ''}
          value=${this.value}
          .checked=${this.checked}
          ?disabled=${this.disabled}
          ?required=${this.required}
          role="switch"
          aria-checked=${this.checked ? 'true' : 'false'}
          @change=${this._handleChange}
        />
        <div part="track" class="track">
          <div part="thumb" class="thumb"></div>
        </div>
        ${this.labelPosition === 'end' ? labelEl : ''}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-switch': WuSwitch;
  }
}
