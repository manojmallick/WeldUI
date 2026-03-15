import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-activity-feed.styles.js';

export type ActivityItem = { id: string; actor: string; action: string; target?: string; time: string; avatarUrl?: string };

/**
 * A scrollable feed of timestamped activity events.
 *
 * @element wu-activity-feed
 */
@customElement('wu-activity-feed')
export class WuActivityFeed extends LitElement {
  static styles = styles;

  @property({ type: Array }) items: ActivityItem[] = [];
  @property() heading = 'Activity';
  @property({ type: Boolean, attribute: 'show-heading' }) showHeading = false;

  private initials(name: string) {
    return name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase();
  }

  override render() {
    return html`
      <div class="feed">
        ${this.showHeading ? html`<h3 class="heading">${this.heading}</h3>` : ''}
        ${this.items.length === 0
          ? html`<p class="empty">No activity yet.</p>`
          : html`
            <ul class="list" aria-label="${this.heading}">
              ${repeat(
                this.items,
                (i) => i.id,
                (i) => html`
                  <li class="item">
                    <div class="avatar-wrap">
                      ${i.avatarUrl
                        ? html`<img src="${i.avatarUrl}" alt="${i.actor}" class="avatar" />`
                        : html`<span class="avatar initials">${this.initials(i.actor)}</span>`}
                      <span class="connector" aria-hidden="true"></span>
                    </div>
                    <div class="content">
                      <p class="text"><strong>${i.actor}</strong> ${i.action}${i.target ? html` <em>${i.target}</em>` : ''}</p>
                      <time class="time">${i.time}</time>
                    </div>
                  </li>
                `,
              )}
            </ul>
          `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-activity-feed': WuActivityFeed;
  }
}
