import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-model-selector.styles.js';

export interface AIModel {
  value: string;
  label: string;
  badge?: string;
}

const DEFAULT_MODELS: AIModel[] = [
  { value: 'gpt-4o', label: 'GPT-4o', badge: 'OpenAI' },
  { value: 'gpt-4-turbo', label: 'GPT-4 Turbo', badge: 'OpenAI' },
  { value: 'claude-3-5-sonnet', label: 'Claude 3.5 Sonnet', badge: 'Anthropic' },
  { value: 'claude-3-opus', label: 'Claude 3 Opus', badge: 'Anthropic' },
  { value: 'gemini-1.5-pro', label: 'Gemini 1.5 Pro', badge: 'Google' },
];

/**
 * Dropdown to choose an AI model.
 *
 * @element wu-model-selector
 * @event wu-change - Emitted with `{ value: string }` when selection changes
 */
@customElement('wu-model-selector')
export class WuModelSelector extends LitElement {
  static styles = styles;

  /** Currently selected model value */
  @property()
  value = 'gpt-4o';

  /** List of available models */
  @property({ attribute: false })
  models: AIModel[] = DEFAULT_MODELS;

  @property({ type: Boolean })
  disabled = false;

  private onChange(e: Event) {
    this.value = (e.target as HTMLSelectElement).value;
    this.dispatchEvent(new CustomEvent('wu-change', {
      bubbles: true,
      composed: true,
      detail: { value: this.value },
    }));
  }

  render() {
    return html`
      <select
        part="select"
        .value=${this.value}
        ?disabled=${this.disabled}
        aria-label="Select AI model"
        @change=${this.onChange}
      >
        ${this.models.map(m => html`
          <option value=${m.value} ?selected=${m.value === this.value}>${m.label}${m.badge ? ` (${m.badge})` : ''}</option>
        `)}
      </select>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-model-selector': WuModelSelector;
  }
}
