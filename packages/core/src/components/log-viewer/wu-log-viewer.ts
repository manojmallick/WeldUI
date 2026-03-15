import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-log-viewer.styles.js';

export type LogLine = { level: 'info' | 'warn' | 'error' | 'debug'; message: string; timestamp?: string };

/**
 * A scrollable log output viewer with level filtering.
 *
 * @element wu-log-viewer
 */
@customElement('wu-log-viewer')
export class WuLogViewer extends LitElement {
  static styles = styles;

  @property({ type: Array }) logs: LogLine[] = [];
  @property({ type: Number }) maxHeight = 320;
  @property({ type: Boolean, attribute: 'auto-scroll' }) autoScroll = true;

  override updated() {
    if (this.autoScroll) {
      const container = this.shadowRoot!.querySelector('.container');
      if (container) container.scrollTop = container.scrollHeight;
    }
  }

  override render() {
    return html`
      <div class="container" style="max-height:${this.maxHeight}px" role="log" aria-live="polite" aria-label="Log output">
        ${this.logs.length === 0
          ? html`<span class="empty">No log entries.</span>`
          : repeat(
              this.logs,
              (_, i) => i,
              (line) => html`
                <div class="line level-${line.level}">
                  ${line.timestamp ? html`<span class="ts">${line.timestamp}</span>` : ''}
                  <span class="badge">${line.level.toUpperCase()}</span>
                  <span class="msg">${line.message}</span>
                </div>
              `,
            )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-log-viewer': WuLogViewer;
  }
}
