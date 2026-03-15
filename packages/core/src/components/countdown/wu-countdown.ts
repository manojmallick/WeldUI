import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-countdown.styles.js';

/**
 * A countdown timer that counts down to a target ISO date/time.
 * @element wu-countdown
 * @event wu-expire - Fires when countdown reaches zero
 */
@customElement('wu-countdown')
export class WuCountdown extends LitElement {
  static styles = styles;
  @property() target = '';
  @property({ reflect: true }) variant: 'default' | 'compact' = 'default';
  @state() private _remaining = 0;
  private _timer = 0;

  connectedCallback() {
    super.connectedCallback();
    this._tick();
    this._timer = window.setInterval(() => this._tick(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this._timer);
  }

  private _tick() {
    const end = this.target ? new Date(this.target).getTime() : 0;
    const diff = end - Date.now();
    this._remaining = Math.max(0, Math.floor(diff / 1000));
    if (this._remaining === 0 && diff <= 0) {
      this.dispatchEvent(new CustomEvent('wu-expire', { bubbles: true, composed: true }));
      clearInterval(this._timer);
    }
  }

  render() {
    if (!this.target || this._remaining <= 0) return html`<span class="expired" role="timer" aria-live="polite">Expired</span>`;
    const d = Math.floor(this._remaining / 86400);
    const h = Math.floor((this._remaining % 86400) / 3600);
    const m = Math.floor((this._remaining % 3600) / 60);
    const s = this._remaining % 60;
    const pad = (n: number) => String(n).padStart(2, '0');
    return html`
      <div class="countdown" role="timer" aria-live="polite" aria-label="Countdown: ${d} days ${h} hours ${m} minutes ${s} seconds">
        ${d > 0 ? html`<div class="unit"><span class="value">${d}</span><span class="label">days</span></div><span class="sep">:</span>` : ''}
        <div class="unit"><span class="value">${pad(h)}</span><span class="label">hrs</span></div>
        <span class="sep">:</span>
        <div class="unit"><span class="value">${pad(m)}</span><span class="label">min</span></div>
        <span class="sep">:</span>
        <div class="unit"><span class="value">${pad(s)}</span><span class="label">sec</span></div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-countdown': WuCountdown; } }
