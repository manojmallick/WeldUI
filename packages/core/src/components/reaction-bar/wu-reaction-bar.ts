import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-reaction-bar.styles.js';

export type Reaction = { emoji: string; count: number; reacted: boolean };

/**
 * A row of emoji reaction buttons with counts.
 *
 * @element wu-reaction-bar
 * @event wu-react - detail: { emoji: string, reacted: boolean }
 */
@customElement('wu-reaction-bar')
export class WuReactionBar extends LitElement {
  static styles = styles;

  @property({ type: Array }) reactions: Reaction[] = [];
  @property({ type: Boolean, attribute: 'show-add' }) showAdd = false;

  private handleReact(reaction: Reaction) {
    const updated = this.reactions.map((r) =>
      r.emoji === reaction.emoji
        ? { ...r, reacted: !r.reacted, count: r.reacted ? r.count - 1 : r.count + 1 }
        : r,
    );
    this.reactions = updated;
    const next = updated.find((r) => r.emoji === reaction.emoji)!;
    this.dispatchEvent(
      new CustomEvent('wu-react', { bubbles: true, composed: true, detail: { emoji: next.emoji, reacted: next.reacted } }),
    );
  }

  override render() {
    return html`
      <div class="bar" role="group" aria-label="Reactions">
        ${repeat(
          this.reactions,
          (r) => r.emoji,
          (r) => html`
            <button
              class="reaction ${r.reacted ? 'active' : ''}"
              type="button"
              aria-label="${r.emoji} ${r.count} reaction${r.count !== 1 ? 's' : ''}"
              aria-pressed=${String(r.reacted)}
              @click=${() => this.handleReact(r)}
            >
              <span class="emoji">${r.emoji}</span>
              <span class="count">${r.count}</span>
            </button>
          `,
        )}
        ${this.showAdd
          ? html`<button class="add-btn" type="button" aria-label="Add reaction">+</button>`
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-reaction-bar': WuReactionBar;
  }
}
