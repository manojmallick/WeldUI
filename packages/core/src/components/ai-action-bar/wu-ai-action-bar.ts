import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-ai-action-bar.styles.js';

export type AIAction = 'explain' | 'fix' | 'improve' | 'summarize' | 'translate' | string;

/**
 * Floating AI toolbar shown on text selection — Explain, Fix, Improve actions.
 *
 * @element wu-ai-action-bar
 * @event wu-action - Emitted with `{ action: string, selectedText: string }` when action clicked
 */
@customElement('wu-ai-action-bar')
export class WuAiActionBar extends LitElement {
  static styles = styles;

  /** The currently selected text context */
  @property({ attribute: 'selected-text' })
  selectedText = '';

  /** Actions to display */
  @property({ attribute: false })
  actions: Array<{ id: AIAction; label: string; icon?: string }> = [
    { id: 'explain', label: 'Explain', icon: '💡' },
    { id: 'fix', label: 'Fix', icon: '🔧' },
    { id: 'improve', label: 'Improve', icon: '✨' },
    { id: 'summarize', label: 'Summarize', icon: '📝' },
  ];

  private fire(action: AIAction) {
    this.dispatchEvent(new CustomEvent('wu-action', {
      bubbles: true,
      composed: true,
      detail: { action, selectedText: this.selectedText },
    }));
  }

  render() {
    return html`
      <div class="bar" part="bar" role="toolbar" aria-label="AI actions">
        ${this.actions.map((a, i) => html`
          ${i > 0 ? html`<span class="divider" aria-hidden="true"></span>` : ''}
          <button type="button" @click=${() => this.fire(a.id)} aria-label="${a.label}">
            ${a.icon ? html`<span aria-hidden="true">${a.icon}</span>` : ''}
            ${a.label}
          </button>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-ai-action-bar': WuAiActionBar;
  }
}
