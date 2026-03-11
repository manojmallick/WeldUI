import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-date-picker.styles.js';

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function toDateStr(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/**
 * A date picker component with a calendar grid and keyboard navigation.
 *
 * @element wu-date-picker
 *
 * @event wu-date-change - Emitted when the user selects a date. Detail: `{ value: string }` (ISO YYYY-MM-DD)
 *
 * @csspart trigger - The trigger button
 * @csspart calendar - The calendar popup
 *
 * @cssprop --wu-dp-border - Border color
 * @cssprop --wu-dp-bg - Calendar background
 * @cssprop --wu-dp-shadow - Calendar shadow
 * @cssprop --wu-dp-cell-size - Size of each day cell
 */
@customElement('wu-date-picker')
export class WuDatePicker extends LitElement {
  static styles = styles;

  /** Selected date in YYYY-MM-DD format */
  @property()
  value = '';

  /** Placeholder text shown when no date is selected */
  @property()
  placeholder = 'Select date';

  /** Minimum selectable date (YYYY-MM-DD) */
  @property()
  min = '';

  /** Maximum selectable date (YYYY-MM-DD) */
  @property()
  max = '';

  /** Whether the calendar is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Accessible label */
  @property()
  label = 'Date';

  @state() private _viewYear: number;
  @state() private _viewMonth: number;

  constructor() {
    super();
    const now = new Date();
    this._viewYear = now.getFullYear();
    this._viewMonth = now.getMonth();
  }

  private _toggle() {
    this.open = !this.open;
    if (this.open && this.value) {
      const d = new Date(this.value + 'T00:00:00');
      this._viewYear = d.getFullYear();
      this._viewMonth = d.getMonth();
    }
  }

  private _prevMonth() {
    if (this._viewMonth === 0) { this._viewYear--; this._viewMonth = 11; }
    else this._viewMonth--;
  }

  private _nextMonth() {
    if (this._viewMonth === 11) { this._viewYear++; this._viewMonth = 0; }
    else this._viewMonth++;
  }

  private _select(dateStr: string) {
    this.value = dateStr;
    this.open = false;
    this.dispatchEvent(new CustomEvent('wu-date-change', {
      bubbles: true,
      composed: true,
      detail: { value: dateStr },
    }));
  }

  private _isDisabled(dateStr: string): boolean {
    if (this.min && dateStr < this.min) return true;
    if (this.max && dateStr > this.max) return true;
    return false;
  }

  private _getDays() {
    const first = new Date(this._viewYear, this._viewMonth, 1);
    const last = new Date(this._viewYear, this._viewMonth + 1, 0);
    const days: Array<{ date: Date; current: boolean }> = [];
    // Leading days from previous month
    for (let i = 0; i < first.getDay(); i++) {
      const d = new Date(this._viewYear, this._viewMonth, 1 - (first.getDay() - i));
      days.push({ date: d, current: false });
    }
    // Current month days
    for (let d = 1; d <= last.getDate(); d++) {
      days.push({ date: new Date(this._viewYear, this._viewMonth, d), current: true });
    }
    // Trailing days from next month
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(this._viewYear, this._viewMonth + 1, i), current: false });
    }
    return days;
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') this.open = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeydown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeydown);
  }

  render() {
    const today = toDateStr(new Date());
    const days = this._getDays();
    const displayValue = this.value
      ? new Date(this.value + 'T00:00:00').toLocaleDateString()
      : this.placeholder;

    return html`
      <button
        part="trigger"
        class="trigger"
        type="button"
        aria-label="${this.label}: ${this.value || 'not selected'}"
        aria-expanded=${this.open}
        aria-haspopup="dialog"
        @click=${this._toggle}
      >
        <span>${displayValue}</span>
        <span class="icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 1v1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-2V1h-1v1H5V1H4zm8 2h2v2H2V3h2v1h1V3h6v1h1V3zM2 6h12v8H2V6z"/>
          </svg>
        </span>
      </button>

      <div
        part="calendar"
        class="calendar"
        role="dialog"
        aria-label="Date picker"
        aria-modal="false"
      >
        <div class="header">
          <button class="nav-btn" type="button" aria-label="Previous month" @click=${this._prevMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M9 2L4 7l5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <span class="month-year">${MONTHS[this._viewMonth]} ${this._viewYear}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this._nextMonth}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
              <path d="M5 2l5 5-5 5" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>

        <div class="grid" role="grid" aria-label="${MONTHS[this._viewMonth]} ${this._viewYear}">
          ${DAYS.map((d) => html`<div class="day-name" role="columnheader" aria-label=${d}>${d}</div>`)}
          ${days.map(({ date, current }) => {
            const ds = toDateStr(date);
            const disabled = this._isDisabled(ds);
            const selected = ds === this.value;
            const isToday = ds === today;
            return html`
              <button
                type="button"
                class=${['day', !current ? 'other-month' : '', isToday ? 'today' : '', selected ? 'selected' : ''].join(' ').trim()}
                role="gridcell"
                aria-label=${date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                aria-selected=${selected}
                aria-current=${isToday ? 'date' : nothing}
                ?disabled=${disabled}
                @click=${() => !disabled && this._select(ds)}
              >${date.getDate()}</button>
            `;
          })}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-date-picker': WuDatePicker;
  }
}
