import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-event-timeline.styles.js';

/**
 * Chronological event timeline for audits
 *
 * @element wu-event-timeline
 * @slot - Default slot
 */
@customElement('wu-event-timeline')
export class WuEventTimeline extends LitElement {
  static styles = styles;

  @property() label = '';
  @property() value = '';

  render() {
    return html`
      <div class="container">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div class="content">
          ${this.value || html`<slot></slot>`}
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-event-timeline': WuEventTimeline; } }
