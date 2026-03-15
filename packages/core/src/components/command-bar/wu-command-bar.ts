import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-command-bar.styles.js';

/**
 * A command palette search bar with optional keyboard shortcut hint.
 *
 * @element wu-command-bar
 * @event wu-search - detail: { query: string }
 * @event wu-open   - Fired when the bar receives focus/click to open palette
 */
@customElement('wu-command-bar')
export class WuCommandBar extends LitElement {
  static styles = styles;

  @property() placeholder = 'Search or type a command…';
  @property() shortcut = '⌘K';
  @property({ type: Boolean, attribute: 'readonly-trigger' }) readonlyTrigger = false;

  @state() private query = '';

  private handleInput(e: Event) {
    this.query = (e.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('wu-search', { bubbles: true, composed: true, detail: { query: this.query } }));
  }

  private handleClick() {
    this.dispatchEvent(new CustomEvent('wu-open', { bubbles: true, composed: true }));
  }

  override render() {
    return html`
      <div class="bar" role="search" @click=${this.readonlyTrigger ? this.handleClick : undefined}>
        <svg class="icon" viewBox="0 0 20 20" fill="none" stroke="currentColor" aria-hidden="true">
          <circle cx="9" cy="9" r="6" stroke-width="1.5"/>
          <path d="M15 15l-3-3" stroke-width="2" stroke-linecap="round"/>
        </svg>
        ${this.readonlyTrigger
          ? html`<span class="placeholder">${this.placeholder}</span>`
          : html`<input type="search" class="input" placeholder=${this.placeholder} .value=${this.query} @input=${this.handleInput} aria-label="Search" />`}
        ${this.shortcut ? html`<kbd class="shortcut">${this.shortcut}</kbd>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-command-bar': WuCommandBar;
  }
}
