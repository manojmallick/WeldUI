import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styles } from './wu-audio.styles.js';

/**
 * An accessible audio player with play/pause, progress, and mute controls.
 *
 * @element wu-audio
 *
 * @event wu-play   - Emitted when playback starts
 * @event wu-pause  - Emitted when playback pauses
 * @event wu-ended  - Emitted when audio ends
 */
@customElement('wu-audio')
export class WuAudio extends LitElement {
  static styles = styles;

  /** Audio source URL */
  @property() src = '';
  /** Start playing automatically */
  @property({ type: Boolean }) autoplay = false;
  /** Loop audio */
  @property({ type: Boolean }) loop = false;

  @state() private playing = false;
  @state() private muted = false;
  @state() private currentTime = 0;
  @state() private duration = 0;

  @query('audio') private audio!: HTMLAudioElement;

  private fmt(s: number): string {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  }

  private toggle() {
    if (this.playing) {
      this.audio.pause();
    } else {
      this.audio.play();
    }
  }

  private onPlay() {
    this.playing = true;
    this.dispatchEvent(new CustomEvent('wu-play', { bubbles: true, composed: true }));
  }

  private onPause() {
    this.playing = false;
    this.dispatchEvent(new CustomEvent('wu-pause', { bubbles: true, composed: true }));
  }

  private onEnded() {
    this.playing = false;
    this.dispatchEvent(new CustomEvent('wu-ended', { bubbles: true, composed: true }));
  }

  private onTimeUpdate() {
    this.currentTime = this.audio.currentTime;
  }

  private onLoadedMetadata() {
    this.duration = this.audio.duration;
  }

  private onProgressClick(e: MouseEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    this.audio.currentTime = ratio * this.duration;
  }

  private toggleMute() {
    this.muted = !this.muted;
    this.audio.muted = this.muted;
  }

  override render() {
    const pct = this.duration ? this.currentTime / this.duration : 0;
    const playIcon = this.playing
      ? html`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="4" width="4" height="16"/><rect x="15" y="4" width="4" height="16"/></svg>`
      : html`<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`;
    const muteIcon = this.muted ? '🔇' : '🔊';

    return html`
      <audio
        src=${this.src}
        ?autoplay=${this.autoplay}
        ?loop=${this.loop}
        @play=${this.onPlay}
        @pause=${this.onPause}
        @ended=${this.onEnded}
        @timeupdate=${this.onTimeUpdate}
        @loadedmetadata=${this.onLoadedMetadata}
      ></audio>
      <div class="player" role="region" aria-label="Audio player">
        <button class="ctrl-btn" type="button" aria-label=${this.playing ? 'Pause' : 'Play'} @click=${this.toggle}>
          ${playIcon}
        </button>
        <div class="progress-wrap">
          <progress
            max="1"
            .value=${pct}
            aria-label="Playback progress"
            @click=${this.onProgressClick}
          ></progress>
          <div class="times">
            <span>${this.fmt(this.currentTime)}</span>
            <span>${this.duration ? this.fmt(this.duration) : '--:--'}</span>
          </div>
        </div>
        <button class="mute-btn" type="button" aria-label=${this.muted ? 'Unmute' : 'Mute'} @click=${this.toggleMute}>
          ${muteIcon}
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-audio': WuAudio; }
}
