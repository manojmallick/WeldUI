import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-session-timeout.styles.js';

/**
 * Session timeout warning banner with countdown and extend/logout actions.
 *
 * @element wu-session-timeout
 * @event wu-extend - User chose to extend the session
 * @event wu-logout - User chose to log out
 */
@customElement('wu-session-timeout')
export class WuSessionTimeout extends LitElement {
  static styles = styles;

  /** Seconds remaining before session expires */
  @property({ type: Number, attribute: 'seconds-remaining' }) secondsRemaining = 120;

  /** Whether the warning is visible */
  @property({ type: Boolean, reflect: true }) visible = false;

  @state() private remaining = 120;
  private _interval: ReturnType<typeof setInterval> | null = null;

  override updated(changed: Map<string, unknown>) {
    if (changed.has('visible') || changed.has('secondsRemaining')) {
      this.remaining = this.secondsRemaining;
      if (this.visible) {
        this._startCountdown();
      } else {
        this._stopCountdown();
      }
    }
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._stopCountdown();
  }

  private _startCountdown() {
    this._stopCountdown();
    this._interval = setInterval(() => {
      if (this.remaining > 0) {
        this.remaining--;
      } else {
        this._stopCountdown();
        this.dispatchEvent(new CustomEvent('wu-logout', { bubbles: true, composed: true }));
      }
    }, 1000);
  }

  private _stopCountdown() {
    if (this._interval) {
      clearInterval(this._interval);
      this._interval = null;
    }
  }

  private handleExtend() {
    this._stopCountdown();
    this.visible = false;
    this.dispatchEvent(new CustomEvent('wu-extend', { bubbles: true, composed: true }));
  }

  private handleLogout() {
    this._stopCountdown();
    this.dispatchEvent(new CustomEvent('wu-logout', { bubbles: true, composed: true }));
  }

  private get formattedTime() {
    const m = Math.floor(this.remaining / 60);
    const s = this.remaining % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  }

  override render() {
    if (!this.visible) return html``;
    return html`
      <div class="timeout-warning" role="alertdialog" aria-live="assertive" aria-label="Session timeout warning">
        <div class="icon">⏱</div>
        <div class="content">
          <p class="message">Your session will expire in <strong>${this.formattedTime}</strong>.</p>
          <p class="sub">Do you want to stay signed in?</p>
        </div>
        <div class="actions">
          <button class="extend-btn" @click=${this.handleExtend}>Stay signed in</button>
          <button class="logout-btn" @click=${this.handleLogout}>Sign out</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-session-timeout': WuSessionTimeout;
  }
}
