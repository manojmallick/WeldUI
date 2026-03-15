import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-query-builder.styles.js';

export type QueryField = { id: string; label: string; type: 'string' | 'number' | 'boolean' | 'date' };
export type QueryRule = { id: string; field: string; operator: string; value: string };

const STRING_OPS = ['equals','not equals','contains','starts with','ends with'];
const NUMBER_OPS = ['=','!=','>','<','>=','<='];
const BOOL_OPS   = ['is true','is false'];

/**
 * A visual filter rule builder.
 *
 * @element wu-query-builder
 * @event wu-change - detail: { rules: QueryRule[] }
 */
@customElement('wu-query-builder')
export class WuQueryBuilder extends LitElement {
  static styles = styles;

  @property({ type: Array }) fields: QueryField[] = [];
  @property({ type: Array }) rules: QueryRule[] = [];

  @state() private internalRules: QueryRule[] = [];

  override connectedCallback() {
    super.connectedCallback();
    this.internalRules = [...this.rules];
  }

  private operators(fieldId: string) {
    const f = this.fields.find((f) => f.id === fieldId);
    if (!f) return STRING_OPS;
    if (f.type === 'number' || f.type === 'date') return NUMBER_OPS;
    if (f.type === 'boolean') return BOOL_OPS;
    return STRING_OPS;
  }

  private addRule() {
    const f = this.fields[0];
    if (!f) return;
    const ops = this.operators(f.id);
    this.internalRules = [...this.internalRules, { id: crypto.randomUUID(), field: f.id, operator: ops[0], value: '' }];
    this.emit();
  }

  private removeRule(id: string) {
    this.internalRules = this.internalRules.filter((r) => r.id !== id);
    this.emit();
  }

  private updateRule(id: string, patch: Partial<QueryRule>) {
    this.internalRules = this.internalRules.map((r) => r.id === id ? { ...r, ...patch } : r);
    this.emit();
  }

  private emit() {
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { rules: this.internalRules } }));
  }

  override render() {
    return html`
      <div class="builder">
        ${this.internalRules.length === 0 ? html`<p class="empty">No filters. Click "Add filter" to get started.</p>` : ''}
        <div class="rules">
          ${repeat(
            this.internalRules,
            (r) => r.id,
            (rule, i) => html`
              <div class="rule">
                ${i > 0 ? html`<span class="conjunction">AND</span>` : ''}
                <select class="select" @change=${(e: Event) => this.updateRule(rule.id, { field: (e.target as HTMLSelectElement).value, operator: this.operators((e.target as HTMLSelectElement).value)[0] })} aria-label="Field">
                  ${this.fields.map((f) => html`<option value=${f.id} ?selected=${f.id === rule.field}>${f.label}</option>`)}
                </select>
                <select class="select" @change=${(e: Event) => this.updateRule(rule.id, { operator: (e.target as HTMLSelectElement).value })} aria-label="Operator">
                  ${this.operators(rule.field).map((op) => html`<option value=${op} ?selected=${op === rule.operator}>${op}</option>`)}
                </select>
                <input class="value-input" type="text" placeholder="Value" .value=${rule.value}
                  @input=${(e: Event) => this.updateRule(rule.id, { value: (e.target as HTMLInputElement).value })}
                  aria-label="Value" />
                <button class="remove-btn" type="button" @click=${() => this.removeRule(rule.id)} aria-label="Remove filter">✕</button>
              </div>
            `,
          )}
        </div>
        <button class="add-btn" type="button" @click=${this.addRule}>+ Add filter</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-query-builder': WuQueryBuilder;
  }
}
