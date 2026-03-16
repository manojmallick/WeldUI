import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-prompt-library.styles.js';

export interface PromptItem {
  id: string;
  title: string;
  text: string;
}

/**
 * Browse and insert saved prompts.
 *
 * @element wu-prompt-library
 * @event wu-insert - Emitted with `{ prompt: PromptItem }` when an item is inserted
 */
@customElement('wu-prompt-library')
export class WuPromptLibrary extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  prompts: PromptItem[] = [
    { id: '1', title: 'Summarize text', text: 'Please summarize the following text in 3 bullet points:' },
    { id: '2', title: 'Translate to Spanish', text: 'Translate the following text to Spanish:' },
    { id: '3', title: 'Fix grammar', text: 'Fix the grammar and spelling in the following text:' },
    { id: '4', title: 'Write unit tests', text: 'Write unit tests for the following code:' },
  ];

  @state()
  private query = '';

  private get filtered() {
    if (!this.query) return this.prompts;
    const q = this.query.toLowerCase();
    return this.prompts.filter(p => p.title.toLowerCase().includes(q) || p.text.toLowerCase().includes(q));
  }

  private insert(prompt: PromptItem) {
    this.dispatchEvent(new CustomEvent('wu-insert', {
      bubbles: true,
      composed: true,
      detail: { prompt },
    }));
  }

  render() {
    const items = this.filtered;
    return html`
      <div class="header">
        <span>Prompt Library</span>
        <span class="search">
          <input
            type="search"
            placeholder="Search…"
            .value=${this.query}
            @input=${(e: Event) => { this.query = (e.target as HTMLInputElement).value; }}
            aria-label="Search prompts"
          />
        </span>
      </div>
      ${items.length === 0
        ? html`<div class="empty">No prompts found</div>`
        : html`
          <ul class="list" role="list">
            ${items.map(p => html`
              <li class="item" role="listitem" key=${p.id}>
                <div class="item-info">
                  <div class="item-title">${p.title}</div>
                  <div class="item-preview">${p.text}</div>
                </div>
                <button class="insert-btn" @click=${() => this.insert(p)} aria-label="Insert prompt: ${p.title}">Insert</button>
              </li>
            `)}
          </ul>
        `}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-prompt-library': WuPromptLibrary;
  }
}
