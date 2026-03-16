import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-sync-status.styles.js';

/**
 * Cloud save / sync / offline indicator.
 *
 * @element wu-sync-status
 */
@customElement('wu-sync-status')
export class WuSyncStatus extends LitElement {
  static styles = styles;

  @property({ reflect: true })
  status: 'synced' | 'syncing' | 'offline' | 'error' = 'synced';

  @property({ attribute: 'last-saved' })
  lastSaved = '';

  private get icon() {
    switch (this.status) {
      case 'synced': return '☁️';
      case 'syncing': return '🔄';
      case 'offline': return '📴';
      case 'error': return '⚠️';
    }
  }

  private get label() {
    switch (this.status) {
      case 'synced': return this.lastSaved ? `Saved ${this.lastSaved}` : 'All changes saved';
      case 'syncing': return 'Saving…';
      case 'offline': return 'Offline';
      case 'error': return 'Save failed';
    }
  }

  render() {
    return html`
      <span class="icon" aria-hidden="true">${this.icon}</span>
      <span role="status" aria-live="polite">${this.label}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-sync-status': WuSyncStatus;
  }
}
