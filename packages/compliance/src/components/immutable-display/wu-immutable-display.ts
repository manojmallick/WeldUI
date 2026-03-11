import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Displays read-only data that cannot be edited, with last-modified metadata.
 * Visually distinct from editable fields. Screen reader announces "read-only".
 *
 * @element wu-immutable-display
 *
 * @csspart base - The container element
 * @csspart value - The value display
 * @csspart meta - The metadata row
 */
@customElement('wu-immutable-display')
export class WuImmutableDisplay extends LitElement {
  static styles = css`
    :host {
      display: block;
      --wu-id-bg: var(--wu-color-surface);
      --wu-id-border: var(--wu-color-border);
      --wu-id-radius: var(--wu-radius-md);
    }

    .base {
      background: var(--wu-id-bg);
      border: 1px solid var(--wu-id-border);
      border-radius: var(--wu-id-radius);
      padding: var(--wu-space-3) var(--wu-space-4);
    }

    .label {
      font-family: var(--wu-font-sans);
      font-size: var(--wu-text-xs);
      font-weight: var(--wu-font-semibold);
      color: var(--wu-color-text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin-bottom: var(--wu-space-1);
      display: flex;
      align-items: center;
      gap: var(--wu-space-1);
    }

    .lock-icon {
      color: var(--wu-color-text-disabled);
    }

    .value {
      font-family: var(--wu-font-sans);
      font-size: var(--wu-text-base);
      color: var(--wu-color-text);
      font-weight: var(--wu-font-medium);
    }

    .meta {
      margin-top: var(--wu-space-2);
      font-family: var(--wu-font-sans);
      font-size: var(--wu-text-xs);
      color: var(--wu-color-text-disabled);
      border-top: 1px solid var(--wu-id-border);
      padding-top: var(--wu-space-2);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 1px 6px;
      border-radius: var(--wu-radius-full);
      background: var(--wu-color-success-subtle, #f0fdf4);
      color: var(--wu-color-success);
      font-size: var(--wu-text-xs);
      font-weight: var(--wu-font-semibold);
    }
  `;

  /** Field label */
  @property()
  label = '';

  /** The immutable value to display */
  @property()
  value = '';

  /** ISO timestamp of last modification */
  @property({ attribute: 'last-modified' })
  lastModified = '';

  /** Username or system that last modified the value */
  @property({ attribute: 'modified-by' })
  modifiedBy = '';

  /** Show a "Verified" badge */
  @property({ type: Boolean })
  verified = false;

  render() {
    return html`
      <div class="base" part="base" aria-readonly="true">
        ${this.label ? html`
          <div class="label">
            <svg class="lock-icon" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M18 8h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zm-6 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm3.1-9H8.9V6a3.1 3.1 0 0 1 6.2 0v2z"/>
            </svg>
            ${this.label}
            <span aria-hidden="true">(read-only)</span>
          </div>
        ` : nothing}
        <div class="value" part="value" aria-label="${this.label}: ${this.value}, read-only">
          ${this.value}
          ${this.verified ? html`<span class="badge">✓ Verified</span>` : nothing}
        </div>
        ${this.lastModified || this.modifiedBy ? html`
          <div class="meta" part="meta">
            ${this.lastModified ? html`Last modified: ${new Date(this.lastModified).toLocaleString()}` : nothing}
            ${this.modifiedBy ? html` by ${this.modifiedBy}` : nothing}
          </div>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-immutable-display': WuImmutableDisplay; }
}
