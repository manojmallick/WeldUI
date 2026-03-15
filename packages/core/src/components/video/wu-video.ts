import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-video.styles.js';

/**
 * Video player with custom controls.
 * @element wu-video
 * @event wu-play - Fires when video starts playing
 * @event wu-pause - Fires when video pauses
 * @event wu-ended - Fires when video ends
 */
@customElement('wu-video')
export class WuVideo extends LitElement {
  static styles = styles;

  @property() src = '';
  @property() poster = '';
  @property({ type: Boolean }) autoplay = false;
  @property({ type: Boolean }) muted = false;
  @property({ type: Boolean }) loop = false;
  @property({ reflect: true, type: Boolean }) paused = true;

  @state() private _progress = 0;
  @state() private _vol = 1;
  @state() private _currentTime = 0;
  @state() private _duration = 0;

  @query('video') private _video!: HTMLVideoElement;

  private _toggle() {
    if (this._video.paused) { this._video.play(); }
    else { this._video.pause(); }
  }

  private _onPlay() { this.paused = false; this.dispatchEvent(new CustomEvent('wu-play', { bubbles: true, composed: true })); }
  private _onPause() { this.paused = true; this.dispatchEvent(new CustomEvent('wu-pause', { bubbles: true, composed: true })); }
  private _onEnded() { this.paused = true; this.dispatchEvent(new CustomEvent('wu-ended', { bubbles: true, composed: true })); }

  private _onTimeUpdate() {
    this._currentTime = this._video.currentTime;
    this._duration = this._video.duration || 0;
    this._progress = this._duration ? (this._currentTime / this._duration) * 100 : 0;
  }

  private _seek(e: MouseEvent) {
    const bar = e.currentTarget as HTMLElement;
    const pct = e.offsetX / bar.offsetWidth;
    this._video.currentTime = pct * (this._video.duration || 0);
  }

  private _toggleMute() {
    this._video.muted = !this._video.muted;
    this._vol = this._video.muted ? 0 : 1;
  }

  private _formatTime(s: number) {
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  render() {
    return html`
      <div class="container">
        <video src=${this.src} poster=${this.poster} ?autoplay=${this.autoplay} ?muted=${this.muted || this._vol === 0} ?loop=${this.loop}
          @play=${this._onPlay} @pause=${this._onPause} @ended=${this._onEnded} @timeupdate=${this._onTimeUpdate}>
        </video>
        <div class="controls">
          <button class="play-btn" aria-label=${this.paused ? 'Play' : 'Pause'} @click=${this._toggle}>
            ${this.paused ? '▶' : '⏸'}
          </button>
          <div class="progress" @click=${this._seek} role="slider" aria-label="Seek" aria-valuenow=${Math.round(this._progress)}>
            <div class="progress-fill" style=${styleMap({ width: `${this._progress}%` })}></div>
          </div>
          <span class="time">${this._formatTime(this._currentTime)} / ${this._formatTime(this._duration)}</span>
          <button class="volume-btn" aria-label=${this._vol === 0 ? 'Unmute' : 'Mute'} @click=${this._toggleMute}>
            ${this._vol === 0 ? '🔇' : '🔊'}
          </button>
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-video': WuVideo; } }
