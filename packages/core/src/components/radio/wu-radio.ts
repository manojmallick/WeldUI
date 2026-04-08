import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { radioGroupStyles, radioStyles } from './wu-radio.styles.js';

/**
 * A single radio button within a radio group.
 *
 * @element wu-radio
 *
 * @slot - Label text for the radio button
 *
 * @event wu-change - Emitted when this radio is selected
 *
 * @csspart base - Host input element wrapper
 *
 * @cssprop --wu-radio-size - Size of the radio circle (default 18px)
 * @cssprop --wu-radio-color - Selected state colour
 * @cssprop --wu-radio-border - Unselected border colour
 *
 * @example
 * ```html
 * <wu-radio-group name="size" value="md">
 *   <wu-radio value="sm">Small</wu-radio>
 *   <wu-radio value="md">Medium</wu-radio>
 *   <wu-radio value="lg">Large</wu-radio>
 * </wu-radio-group>
 * ```
 */
@customElement('wu-radio')
export class WuRadio extends LitElement {
  static styles = radioStyles;

  /** The value this radio represents */
  @property()
  value = '';

  /** Whether this radio is currently checked */
  @property({ type: Boolean, reflect: true })
  checked = false;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** The name to use for native form grouping (usually set by wu-radio-group) */
  @property()
  name = '';

  private _handleChange() {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent('wu-change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
  }

  override render() {
    const id = `wu-radio-${this.value}`;
    return html`
      <input
        id=${id}
        type="radio"
        name=${ifDefined(this.name || undefined)}
        value=${this.value}
        .checked=${this.checked}
        ?disabled=${this.disabled}
        @change=${this._handleChange}
      />
      <label for=${id}><slot></slot></label>
    `;
  }
}

/**
 * A group of radio buttons — manages selection state and keyboard navigation.
 *
 * @element wu-radio-group
 *
 * @slot - wu-radio elements
 *
 * @event wu-change - Emits when selected value changes. Detail: { value: string }
 *
 * @csspart group - The flex container holding radio items
 *
 * @cssprop --wu-radio-group-gap - Gap between radio items
 *
 * @example
 * ```html
 * <wu-radio-group name="tier" value="pro" label="Plan">
 *   <wu-radio value="free">Free</wu-radio>
 *   <wu-radio value="pro">Pro</wu-radio>
 *   <wu-radio value="enterprise">Enterprise</wu-radio>
 * </wu-radio-group>
 * ```
 */
@customElement('wu-radio-group')
export class WuRadioGroup extends LitElement {
  static styles = radioGroupStyles;

  private readonly _uid = Math.random().toString(36).slice(2, 9);

  /** The name attribute applied to all child wu-radio elements */
  @property()
  name = '';

  /** Currently selected value */
  @property()
  value = '';

  /** Legend / label for the group */
  @property()
  label = '';

  /** Layout direction */
  @property({ reflect: true })
  orientation: 'vertical' | 'horizontal' = 'vertical';

  /** Disabled entire group */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Error message shown below the group */
  @property()
  error = '';

  @state()
  private _radios: WuRadio[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.addEventListener('wu-change', this._handleRadioChange as EventListener);
  }

  override firstUpdated() {
    // Sync immediately after first render in case slotchange hasn't fired
    const radios = Array.from(this.querySelectorAll<WuRadio>('wu-radio'));
    if (radios.length) {
      this._radios = radios;
      this._syncRadios();
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('wu-change', this._handleRadioChange as EventListener);
  }

  private _handleSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    this._radios = slot
      .assignedElements({ flatten: true })
      .filter((el): el is WuRadio => el.tagName === 'WU-RADIO');
    this._syncRadios();
  }

  private _syncRadios() {
    for (const radio of this._radios) {
      radio.name = this.name;
      radio.checked = radio.value === this.value;
      radio.disabled = this.disabled || radio.disabled;
    }
  }

  private _handleRadioChange = (e: CustomEvent<{ value: string }>) => {
    if (e.target === this) return; // prevent infinite loop from self-dispatched event
    this.value = e.detail.value;
    this._syncRadios();
    this.dispatchEvent(
      new CustomEvent('wu-change', {
        bubbles: true,
        composed: true,
        detail: { value: this.value },
      })
    );
    e.stopImmediatePropagation();
  };

  override updated(changed: Map<string, unknown>) {
    if (changed.has('value') || changed.has('disabled')) {
      this._syncRadios();
    }
  }

  override render() {
    const errorId = `wu-radio-group-error-${this._uid}`;
    return html`
      <span class="legend" ?hidden=${!this.label}>${this.label}</span>
      <div
        part="group"
        class="group"
        role="radiogroup"
        aria-label=${ifDefined(this.label || undefined)}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-describedby=${ifDefined(this.error ? errorId : undefined)}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      <span id=${errorId} class="error" role="alert" ?hidden=${!this.error}>${this.error}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-radio': WuRadio;
    'wu-radio-group': WuRadioGroup;
  }
}
