import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-date-range-picker.styles.js';

function isoToDate(s: string): Date | null {
  const d = new Date(s);
  return isNaN(d.getTime()) ? null : d;
}
function daysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}
function startDow(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

/**
 * A two-calendar date range picker.
 * @element wu-date-range-picker
 * @event wu-change - Fires on range confirmed, detail: { start: string, end: string }
 */
@customElement('wu-date-range-picker')
export class WuDateRangePicker extends LitElement {
  static styles = styles;

  @property() label = '';
  @property() start = '';
  @property() end = '';
  @property() min = '';
  @property() max = '';
  @property() error = '';
  @property({ type: Boolean, reflect: true }) disabled = false;

  @state() private _open = false;
  @state() private _hoverDate = '';
  @state() private _pendingStart = '';
  @state() private _pendingEnd = '';
  @state() private _leftYear = new Date().getFullYear();
  @state() private _leftMonth = new Date().getMonth();

  private get _rightYear() { return this._leftMonth === 11 ? this._leftYear + 1 : this._leftYear; }
  private get _rightMonth() { return (this._leftMonth + 1) % 12; }

  connectedCallback() {
    super.connectedCallback();
    if (this.start) this._pendingStart = this.start;
    if (this.end) this._pendingEnd = this.end;
    if (this.start) {
      const d = isoToDate(this.start)!;
      this._leftYear = d.getFullYear();
      this._leftMonth = d.getMonth();
    }
    document.addEventListener('click', this._outsideClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this._outsideClick);
  }

  private _outsideClick = (e: MouseEvent) => {
    if (!this.contains(e.target as Node) && !this.shadowRoot!.contains(e.target as Node)) {
      this._open = false;
    }
  };

  private _isInRange(dateStr: string): boolean {
    const s = this._pendingStart, e = this._pendingEnd || this._hoverDate;
    if (!s) return false;
    const [lo, hi] = s <= (e || s) ? [s, e || s] : [e || s, s];
    return dateStr > lo && dateStr < hi;
  }

  private _onDayClick(dateStr: string) {
    if (!this._pendingStart || (this._pendingStart && this._pendingEnd)) {
      this._pendingStart = dateStr;
      this._pendingEnd = '';
    } else {
      if (dateStr < this._pendingStart) {
        this._pendingEnd = this._pendingStart;
        this._pendingStart = dateStr;
      } else {
        this._pendingEnd = dateStr;
      }
    }
  }

  private _confirm() {
    if (this._pendingStart && this._pendingEnd) {
      this.start = this._pendingStart;
      this.end = this._pendingEnd;
      this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { start: this.start, end: this.end } }));
      this._open = false;
    }
  }

  private _renderCal(year: number, month: number) {
    const days = daysInMonth(year, month);
    const offset = startDow(year, month);
    const monthName = new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' });
    const cells = [];
    for (let i = 0; i < offset; i++) cells.push(html`<span></span>`);
    for (let d = 1; d <= days; d++) {
      const ds = `${year}-${String(month + 1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
      const isStart = ds === this._pendingStart;
      const isEnd = ds === this._pendingEnd;
      const inRange = this._isInRange(ds);
      const disabled = (this.min && ds < this.min) || (this.max && ds > this.max);
      cells.push(html`
        <button class="day ${isStart ? 'start' : ''} ${isEnd ? 'end' : ''} ${inRange ? 'in-range' : ''}"
          ?disabled=${disabled}
          @click=${() => this._onDayClick(ds)}
          @mouseenter=${() => { this._hoverDate = ds; }}
          @mouseleave=${() => { this._hoverDate = ''; }}
          aria-label=${ds}
        >${d}</button>`);
    }
    return html`
      <div class="cal">
        <div class="cal-header">
          <button class="nav-btn" @click=${() => { if (month === 0) { this._leftYear--; this._leftMonth = 11; } else { this._leftMonth--; } }} aria-label="Previous month">‹</button>
          <span class="cal-title">${monthName}</span>
          <button class="nav-btn" @click=${() => { if (month === 11) { this._leftYear++; this._leftMonth = 0; } else { this._leftMonth++; } }} aria-label="Next month">›</button>
        </div>
        <div class="cal-grid">
          ${['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => html`<span class="cal-dow">${d}</span>`)}
          ${cells}
        </div>
      </div>`;
  }

  private _formatRange(): string {
    if (!this.start && !this.end) return 'Select date range…';
    if (this.start && !this.end) return this.start;
    return `${this.start} → ${this.end}`;
  }

  render() {
    return html`
      ${this.label ? html`<label>${this.label}</label>` : ''}
      <button class="trigger" @click=${() => { this._open = !this._open; }} ?disabled=${this.disabled} aria-haspopup="true" aria-expanded=${this._open}>
        <span class="trigger-icon">📅</span>
        <span>${this._formatRange()}</span>
      </button>
      <div class="popup" ?hidden=${!this._open} role="dialog" aria-label="Date range picker">
        ${this._renderCal(this._leftYear, this._leftMonth)}
        ${this._renderCal(this._rightYear, this._rightMonth)}
        <div style="align-self:flex-end;display:flex;flex-direction:column;justify-content:flex-end">
          <div class="actions">
            <button class="btn" @click=${() => { this._pendingStart = ''; this._pendingEnd = ''; }}>Clear</button>
            <button class="btn btn-primary" @click=${this._confirm} ?disabled=${!this._pendingStart || !this._pendingEnd}>Apply</button>
          </div>
        </div>
      </div>
      ${this.error ? html`<p class="error-msg" role="alert">${this.error}</p>` : ''}
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-date-range-picker': WuDateRangePicker; } }
