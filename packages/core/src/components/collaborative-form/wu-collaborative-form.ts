import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-collaborative-form.styles.js';

export interface CollaborativeField {
  name: string;
  label: string;
  type?: 'text' | 'email' | 'textarea';
  value?: string;
  lockedBy?: string;
}

/**
 * Form with field-level locking when another user is editing.
 *
 * @element wu-collaborative-form
 * @event wu-field-focus - Emitted with `{ field: string }` when a field gains focus
 * @event wu-field-blur - Emitted with `{ field: string }` when a field loses focus
 */
@customElement('wu-collaborative-form')
export class WuCollaborativeForm extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  fields: CollaborativeField[] = [
    { name: 'title', label: 'Title', type: 'text' },
    { name: 'description', label: 'Description', type: 'textarea' },
  ];

  private emitFocusEvent(name: string, eventName: string) {
    this.dispatchEvent(new CustomEvent(eventName, {
      bubbles: true,
      composed: true,
      detail: { field: name },
    }));
  }

  render() {
    return html`
      <form part="form" @submit=${(e: Event) => e.preventDefault()}>
        ${this.fields.map(f => html`
          <div class="field" part="field">
            <label for="cf-${f.name}">${f.label}</label>
            <div class="input-wrap">
              ${f.type === 'textarea'
                ? html`<textarea
                    id="cf-${f.name}"
                    .value=${f.value ?? ''}
                    aria-readonly=${f.lockedBy ? 'true' : 'false'}
                    ?readonly=${!!f.lockedBy}
                    rows="3"
                    @focus=${() => this.emitFocusEvent(f.name, 'wu-field-focus')}
                    @blur=${() => this.emitFocusEvent(f.name, 'wu-field-blur')}
                  ></textarea>`
                : html`<input
                    type=${f.type ?? 'text'}
                    id="cf-${f.name}"
                    .value=${f.value ?? ''}
                    aria-readonly=${f.lockedBy ? 'true' : 'false'}
                    ?readonly=${!!f.lockedBy}
                    @focus=${() => this.emitFocusEvent(f.name, 'wu-field-focus')}
                    @blur=${() => this.emitFocusEvent(f.name, 'wu-field-blur')}
                  >`}
              ${f.lockedBy ? html`<span class="lock-badge">🔒 ${f.lockedBy}</span>` : ''}
            </div>
          </div>
        `)}
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-collaborative-form': WuCollaborativeForm;
  }
}
