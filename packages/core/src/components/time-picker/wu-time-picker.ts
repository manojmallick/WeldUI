import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-time-picker.styles.js';

/**
 * A time picker with hour/minute dropdowns and optional AM/PM.
 * @element wu-time-picker
 * @event wu-change - Fires on time change, detail: { value: string (HH:MM) }
 */
@customElement('wu-time-picker')
export class WuTimePicker extends LitElement {
  static styles = styles;

  @property() label = '';
  /** Value in HH:MM 24-hour format */
  @property() value = '12:00';
  @property({ type: Boolean }) hour12 = false;
  @property() error = '';
  @property({ type: Boolean, reflect: true }) disabled = false;

  @state() private _hours = 12;
  @state() private _minutes = 0;
  @state() private _period: 'AM' | 'PM' = 'PM';

  connectedCallback() {
    super.connectedCallback();
    this._parseValue();
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('value')) this._parseValue();
  }

  private _parseValue() {
    const [h, m] = this.value.split(':').map(Number);
    const hours = isNaN(h) ? 12 : h;
    const minutes = isNaN(m) ? 0 : m;
    if (this.hour12) {
      this._period = hours >= 12 ? 'PM' : 'AM';
      this._hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;
    } else {
      this._hours = hours;
    }
    this._minutes = minutes;
  }

  private _emit() {
    let h = this._hours;
    if (this.hour12) {
      if (this._period === 'AM' && h === 12) h = 0;
      else if (this._period === 'PM' && h !== 12) h += 12;
    }
    this.value = `${String(h).padStart(2,'0')}:${String(this._minutes).padStart(2,'0')}`;
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  private _onHour(e: Event) { this._hours = Number((e.target as HTMLSelectElement).value); this._emit(); }
  private _onMinute(e: Event) { this._minutes = Number((e.target as HTMLSelectElement).value); this._emit(); }
  private _onPeriod(e: Event) { this._period = (e.target as HTMLSelectElement).value as 'AM' | 'PM'; this._emit(); }

  private _hourOptions() {
    const max = this.hour12 ? 12 : 23;
    const start = this.hour12 ? 1 : 0;
    return Array.from({ length: max - start + 1 }, (_, i) => i + start);
  }

  render() {
    const dis = this.disabled;
    return html`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="time-wrap">
        <div class="drum">
          <span class="drum-label">HH</span>
          <select class="drum-select" aria-label="Hour" ?disabled=${dis} @change=${this._onHour}>
            ${this._hourOptions().map(h => html`<option value=${h} ?selected=${h === this._hours}>${String(h).padStart(2,'0')}</option>`)}
          </select>
        </div>
        <span class="sep">:</span>
        <div class="drum">
          <span class="drum-label">MM</span>
          <select class="drum-select" aria-label="Minute" ?disabled=${dis} @change=${this._onMinute}>
            ${Array.from({ length: 60 }, (_, i) => i).map(m => html`<option value=${m} ?selected=${m === this._minutes}>${String(m).padStart(2,'0')}</option>`)}
          </select>
        </div>
        ${this.hour12 ? html`
          <div class="drum">
            <span class="drum-label">AM/PM</span>
            <select class="drum-select" aria-label="Period" ?disabled=${dis} @change=${this._onPeriod}>
              <option value="AM" ?selected=${this._period === 'AM'}>AM</option>
              <option value="PM" ?selected=${this._period === 'PM'}>PM</option>
            </select>
          </div>` : ''}
      </div>
      <p class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</p>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-time-picker': WuTimePicker; } }
