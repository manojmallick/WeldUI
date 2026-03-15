import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styles } from './wu-emoji-picker.styles.js';

const EMOJI_DATA: Array<{ category: string; emojis: string[] }> = [
  { category: 'Smileys', emojis: ['😀','😁','😂','🤣','😃','😄','😅','😆','😇','😉','😊','🙂','😋','😌','😍','🥰','😘','😗','😙','😚','😛','😜','🤪','😝','🤑','🤗','🤭','🤫','🤔','🤐','🥶','🥺','😯','😦','😧','😮','😲','🥱','😴','🤤','😪','🤧','🥵','🤯'] },
  { category: 'Gestures', emojis: ['👋','🤚','🖐','✋','🖖','👌','🤌','🤏','✌️','🤞','🤟','🤘','🤙','👈','👉','👆','🖕','👇','☝️','👍','👎','✊','👊','🤛','🤜','👏','🙌','🫶','👐','🤲','🤝','🙏'] },
  { category: 'Animals', emojis: ['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐔','🐧','🐦','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝'] },
  { category: 'Food', emojis: ['🍎','🍊','🍋','🍇','🍓','🫐','🍈','🍒','🥝','🍑','🥭','🍍','🥥','🍅','🍆','🥑','🥦','🥕','🌽','🌶','🥒','🧄','🧅','🥔','🍠','🫘','🌰','🥜','🍞','🥐'] },
  { category: 'Activities', emojis: ['⚽','🏀','🏈','⚾','🥎','🎾','🏐','🏉','🎱','🏓','🏸','🥊','🥋','🎽','🛹','🛼','🤸','🏋️','🤼','🤺','🤾','🏌️','🏇','🧘','🤿','🎿','⛷️','🏂','🪂','🏊'] },
  { category: 'Objects', emojis: ['💡','🔦','🕯️','💰','💳','💎','🔑','🗝️','🔒','🔓','🔨','⛏️','🔧','🔩','🪛','🔗','📱','💻','🖥️','🖨️','⌨️','🖱️','💾','📀','📷','📸','📹','🎥','📞','☎️'] },
  { category: 'Symbols', emojis: ['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❤️‍🔥','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☯️','🕉️','✡️','🔯','🪯','🛐','♋','♓','🆗','🆕','🆙','🆒','🆓','0️⃣'] },
];

/**
 * An emoji picker with category sections and search filtering.
 *
 * @element wu-emoji-picker
 *
 * @event wu-select - Emitted when an emoji is selected. detail: { emoji: string }
 */
@customElement('wu-emoji-picker')
export class WuEmojiPicker extends LitElement {
  static styles = styles;

  @state() private query = '';

  private onSearch(e: Event) {
    this.query = (e.target as HTMLInputElement).value;
  }

  select(emoji: string) {
    this.dispatchEvent(new CustomEvent('wu-select', {
      bubbles: true, composed: true,
      detail: { emoji }
    }));
  }

  private getFiltered(): Array<{ category: string; emojis: string[] }> {
    if (!this.query.trim()) return EMOJI_DATA;
    return EMOJI_DATA
      .map(cat => ({ ...cat, emojis: cat.emojis.filter(e => e.includes(this.query)) }))
      .filter(cat => cat.emojis.length > 0);
  }

  override render() {
    const filtered = this.getFiltered();
    const hasResults = filtered.some(c => c.emojis.length > 0);
    return html`
      <div class="picker" role="dialog" aria-label="Emoji picker">
        <div class="search-row">
          <input
            class="search-input"
            type="search"
            placeholder="Search emoji..."
            .value=${this.query}
            @input=${this.onSearch}
            aria-label="Search emoji"
          />
        </div>
        <div class="emoji-grid" role="listbox" aria-label="Emoji list">
          ${hasResults
            ? filtered.map(cat => html`
                ${this.query ? '' : html`<div class="category-label" style="grid-column:1/-1">${cat.category}</div>`}
                ${cat.emojis.map(emoji => html`
                  <button
                    type="button"
                    class="emoji-btn"
                    role="option"
                    aria-label=${emoji}
                    title=${emoji}
                    @click=${() => this.select(emoji)}
                  >${emoji}</button>
                `)}
              `)
            : html`<div class="no-results" style="grid-column:1/-1">No emoji found</div>`
          }
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-emoji-picker': WuEmojiPicker; }
}
