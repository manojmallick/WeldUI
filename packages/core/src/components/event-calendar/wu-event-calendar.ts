import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-event-calendar.styles.js';

export interface CalendarEvent {
  id: string;
  title: string;
  /** ISO date string: YYYY-MM-DD */
  date: string;
  color?: string;
}

const DAYS_OF_WEEK = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

/**
 * A monthly event calendar grid.
 *
 * @element wu-event-calendar
 *
 * @event wu-date-click  - Emitted on day cell click. detail: { date: string }
 * @event wu-event-click - Emitted on event chip click. detail: { event: CalendarEvent }
 */
@customElement('wu-event-calendar')
export class WuEventCalendar extends LitElement {
  static styles = styles;

  /** Array of events to display */
  @property({ type: Array }) events: CalendarEvent[] = [];

  @state() private year: number;
  @state() private month: number;

  constructor() {
    super();
    const now = new Date();
    this.year = now.getFullYear();
    this.month = now.getMonth();
  }

  private prevMonth() {
    if (this.month === 0) { this.month = 11; this.year--; }
    else { this.month--; }
  }

  private nextMonth() {
    if (this.month === 11) { this.month = 0; this.year++; }
    else { this.month++; }
  }

  private getDays(): Array<{ date: Date; current: boolean }> {
    const first = new Date(this.year, this.month, 1);
    const last = new Date(this.year, this.month + 1, 0);
    const days: Array<{ date: Date; current: boolean }> = [];
    // leading days from prev month
    for (let i = 0; i < first.getDay(); i++) {
      days.push({ date: new Date(this.year, this.month, -first.getDay() + i + 1), current: false });
    }
    // current month days
    for (let d = 1; d <= last.getDate(); d++) {
      days.push({ date: new Date(this.year, this.month, d), current: true });
    }
    // trailing days
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push({ date: new Date(this.year, this.month + 1, i), current: false });
    }
    return days;
  }

  private isoDate(d: Date): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  private isToday(d: Date): boolean {
    const now = new Date();
    return d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth() && d.getDate() === now.getDate();
  }

  private eventsForDate(iso: string): CalendarEvent[] {
    return this.events.filter(e => e.date === iso);
  }

  private clickDay(iso: string) {
    this.dispatchEvent(new CustomEvent('wu-date-click', { bubbles: true, composed: true, detail: { date: iso } }));
  }

  private clickEvent(e: MouseEvent, ev: CalendarEvent) {
    e.stopPropagation();
    this.dispatchEvent(new CustomEvent('wu-event-click', { bubbles: true, composed: true, detail: { event: ev } }));
  }

  override render() {
    const days = this.getDays();
    return html`
      <div class="calendar" role="grid" aria-label="Calendar">
        <div class="header">
          <button class="nav-btn" type="button" aria-label="Previous month" @click=${this.prevMonth}>‹</button>
          <span class="month-label">${MONTH_NAMES[this.month]} ${this.year}</span>
          <button class="nav-btn" type="button" aria-label="Next month" @click=${this.nextMonth}>›</button>
        </div>
        <div class="grid" role="row">
          ${DAYS_OF_WEEK.map(d => html`<div class="dow" role="columnheader">${d}</div>`)}
        </div>
        <div class="grid">
          ${repeat(days, d => this.isoDate(d.date), ({ date, current }) => {
            const iso = this.isoDate(date);
            const dayEvents = this.eventsForDate(iso);
            return html`
              <div
                class="day ${current ? '' : 'other-month'} ${this.isToday(date) ? 'today' : ''}"
                role="gridcell"
                tabindex="0"
                aria-label="${date.getDate()} ${current ? MONTH_NAMES[this.month] : ''}"
                @click=${() => this.clickDay(iso)}
                @keydown=${(e: KeyboardEvent) => e.key === 'Enter' && this.clickDay(iso)}
              >
                <div class="day-num">${date.getDate()}</div>
                ${dayEvents.map(ev => html`
                  <span
                    class="event-chip"
                    style=${ev.color ? `background:${ev.color}` : ''}
                    @click=${(e: MouseEvent) => this.clickEvent(e, ev)}
                  >${ev.title}</span>
                `)}
              </div>
            `;
          })}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-event-calendar': WuEventCalendar; }
}
