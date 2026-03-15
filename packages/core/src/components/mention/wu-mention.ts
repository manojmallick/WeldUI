import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-mention.styles.js';

export interface MentionUser { id: string; name: string; avatar?: string; }

/**
 * Text input with @ mention autocomplete.
 * @element wu-mention
 * @event wu-mention - Fires when user is mentioned, detail: { user: MentionUser }
 * @event wu-change - Fires on input change, detail: { value: string }
 */
@customElement('wu-mention')
export class WuMention extends LitElement {
  static styles = styles;

  @property({ type: Array }) users: MentionUser[] = [];
  @property() value = '';
  @property() placeholder = 'Type @ to mention someone...';
  @property({ type: Boolean }) multiline = false;
  @state() private _query = '';
  @state() private _showList = false;
  @state() private _activeIndex = 0;

  private get _filtered() {
    if (!this._query) return [];
    return this.users.filter(u => u.name.toLowerCase().includes(this._query.toLowerCase())).slice(0, 8);
  }

  private _onInput(e: Event) {
    const target = e.target as HTMLTextAreaElement | HTMLInputElement;
    this.value = target.value;
    const match = target.value.slice(0, target.selectionStart ?? target.value.length).match(/@(\w*)$/);
    if (match) {
      this._query = match[1];
      this._showList = true;
      this._activeIndex = 0;
    } else {
      this._showList = false;
      this._query = '';
    }
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  private _onKey(e: KeyboardEvent) {
    if (!this._showList) return;
    const filtered = this._filtered;
    if (e.key === 'ArrowDown') { e.preventDefault(); this._activeIndex = (this._activeIndex + 1) % filtered.length; }
    else if (e.key === 'ArrowUp') { e.preventDefault(); this._activeIndex = (this._activeIndex - 1 + filtered.length) % filtered.length; }
    else if (e.key === 'Enter' && filtered.length) { e.preventDefault(); this._selectUser(filtered[this._activeIndex]); }
    else if (e.key === 'Escape') { this._showList = false; }
  }

  private _selectUser(user: MentionUser) {
    const pos = (this.shadowRoot!.querySelector('textarea,input') as HTMLTextAreaElement).selectionStart ?? this.value.length;
    const before = this.value.slice(0, pos).replace(/@\w*$/, `@${user.name} `);
    this.value = before + this.value.slice(pos);
    this._showList = false;
    this._query = '';
    this.dispatchEvent(new CustomEvent('wu-mention', { bubbles: true, composed: true, detail: { user } }));
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: this.value } }));
  }

  private _initials(name: string) { return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(); }

  render() {
    const filtered = this._filtered;
    const field = this.multiline
      ? html`<textarea .value=${this.value} placeholder=${this.placeholder} rows="3" @input=${this._onInput} @keydown=${this._onKey}></textarea>`
      : html`<input type="text" .value=${this.value} placeholder=${this.placeholder} @input=${this._onInput} @keydown=${this._onKey}>`;
    return html`
      <div class="field">
        ${field}
        <div class="mention-list" ?hidden=${!this._showList || filtered.length === 0} role="listbox">
          ${filtered.map((u, i) => html`
            <div class="mention-item ${i === this._activeIndex ? 'active' : ''}" role="option" @mousedown=${(e: Event) => { e.preventDefault(); this._selectUser(u); }}>
              ${u.avatar ? html`<img class="avatar" src=${u.avatar} alt="">` : html`<div class="avatar">${this._initials(u.name)}</div>`}
              ${u.name}
            </div>`)}
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-mention': WuMention; } }
