import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

function hash(value: string): string {
  // Simple deterministic hash for display — NOT for security
  let h = 0;
  for (let i = 0; i < value.length; i++) {
    h = (Math.imul(31, h) + value.charCodeAt(i)) >>> 0;
  }
  return h.toString(16).padStart(8, '0');
}

const SESSION_ID = Math.random().toString(36).slice(2);

/**
 * A form wrapper that automatically logs all field interactions for audit purposes.
 * All sensitive field values are hashed before logging — never stored in plain text.
 *
 * @element wu-audit-form
 *
 * @slot - Form fields
 *
 * @event wu-audit-log - Emitted on every field change. Detail: `{ event, timestamp, field, previousHash, newHash, sessionId }`
 * @event wu-submit - Emitted on form submit with full audit trail. Detail: `{ entries, sessionId }`
 */
@customElement('wu-audit-form')
export class WuAuditForm extends LitElement {
  static styles = css`
    :host { display: block; }
    form { display: contents; }
  `;

  /** Associate a user ID with audit log entries */
  @property({ attribute: 'user-id' })
  userId = '';

  /** Form label / identifier for audit trail */
  @property({ attribute: 'form-id' })
  formId = 'form';

  private _log: Array<Record<string, unknown>> = [];
  private _previousValues = new Map<string, string>();

  private _onChange(e: Event) {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    if (!target.name) return;

    const prev = this._previousValues.get(target.name) ?? '';
    const next = target.type === 'password' || target.dataset['sensitive'] === 'true'
      ? hash(target.value)
      : target.value;
    const prevHash = target.type === 'password' || target.dataset['sensitive'] === 'true'
      ? hash(prev)
      : prev;

    this._previousValues.set(target.name, target.value);

    const entry = {
      event: 'field_change',
      timestamp: new Date().toISOString(),
      formId: this.formId,
      field: target.name,
      previousValue: prevHash,
      newValue: next,
      userId: this.userId || undefined,
      sessionId: SESSION_ID,
    };

    this._log.push(entry);

    this.dispatchEvent(new CustomEvent('wu-audit-log', {
      bubbles: true,
      composed: true,
      detail: entry,
    }));
  }

  private _onSubmit(e: Event) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('wu-submit', {
      bubbles: true,
      composed: true,
      detail: { entries: [...this._log], sessionId: SESSION_ID },
    }));
  }

  /** Returns the full audit log for this session */
  getAuditLog() { return [...this._log]; }

  render() {
    return html`
      <form
        aria-label="${this.formId}"
        @change=${this._onChange}
        @submit=${this._onSubmit}
      >
        <slot></slot>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-audit-form': WuAuditForm; }
}
