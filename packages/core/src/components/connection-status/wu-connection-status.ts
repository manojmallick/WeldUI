import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-connection-status.styles.js';

/**
 * Online/offline/reconnecting banner for connection state.
 *
 * @element wu-connection-status
 */
@customElement('wu-connection-status')
export class WuConnectionStatus extends LitElement {
  static styles = styles;

  @property({ reflect: true })
  status: 'online' | 'offline' | 'reconnecting' = 'online';

  private get label() {
    switch (this.status) {
      case 'online': return 'Connected';
      case 'offline': return 'No internet connection';
      case 'reconnecting': return 'Reconnecting…';
    }
  }

  render() {
    return html`
      <div class="banner" role="status" aria-live="polite">
        <span class="dot" aria-hidden="true"></span>
        ${this.label}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-connection-status': WuConnectionStatus;
  }
}
