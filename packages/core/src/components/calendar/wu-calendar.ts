import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-calendar.styles.js';

/**
 * A standalone calendar for date selection.
 * @element wu-calendar
 * @event wu-change - Fires on date select, detail: { value: string (ISO date) }
 */
@customElement('wu-calendar')
export class WuCalendar extends LitElement {
  static styles = styles;
  @property() value = '';
  @property() min = '';
  @property() max = '';
  @state() private _year = new Date().getFullYear();
  @state() private _month = new Date().getMonth();

  private _select(ds: string) {
    this.value = ds;
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: ds } }));
  }

  render() {
    const today = new Date().toISOString().split('T')[0];
    const monthName = new Date(this._year, this._month).toLocaleString('default', { month: 'long', year: 'numeric' });
    const days = new Date(this._year, this._month + 1, 0).getDate();
    const offset = new Date(this._year, this._month, 1).getDay();
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<span></span>`);
    for (let d = 1; d <= days; d++) {
      const ds = `${this._year}-${String(this._month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      cells.push(html`<button class="day ${ds === today ? 'today' : ''} ${ds === this.value ? 'selected' : ''}" ?disabled=${!!(this.min && ds < this.min) || !!(this.max && ds > this.max)} @click=${() => this._select(ds)} aria-label=${ds} aria-pressed=${ds === this.value}>${d}</button>`);
    }
    return html`
      <div class="cal" role="application" aria-label="Calendar">
        <div class="cal-header">
          <button class="nav-btn" @click=${() => { if (this._month === 0) { this._year--; this._month = 11; } else { this._month--; } }} aria-label="Previous month">‹</button>
          <span class="cal-title">${monthName}</span>
          <button class="nav-btn" @click=${() => { if (this._month === 11) { this._year++; this._month = 0; } else { this._month++; } }} aria-label="Next month">›</button>
        </div>
        <div class="grid">
          ${['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => html`<span class="dow">${d}</span>`)}
          ${cells}
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-calendar': WuCalendar; } }
