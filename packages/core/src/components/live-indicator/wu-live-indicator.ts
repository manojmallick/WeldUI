import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-live-indicator.styles.js';

/**
 * Pulsing "LIVE" badge for dashboards, sports scores, and real-time data feeds.
 *
 * @element wu-live-indicator
 */
@customElement('wu-live-indicator')
export class WuLiveIndicator extends LitElement {
  static styles = styles;

  @property()
  label = 'LIVE';

  @property({ type: Boolean, reflect: true })
  active = true;

  render() {
    return html`
      ${this.active ? html`<span class="dot" aria-hidden="true"></span>` : ''}
      <span class="text" role="status" aria-live="polite">${this.label}</span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-live-indicator': WuLiveIndicator;
  }
}
