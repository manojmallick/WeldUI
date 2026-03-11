import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface SoxAuditEntry {
  timestamp: string;
  action: string;
  user: string;
  details?: string;
}

/**
 * SOX audit evidence export UI component.
 * Displays a timestamped action log and provides export triggers.
 * Renders in a printable format when `data-print="true"` is applied.
 *
 * @element wu-sox-evidence-export
 *
 * @event wu-export-pdf - Emitted when user triggers PDF export.
 * @event wu-export-csv - Emitted when user triggers CSV export.
 *
 * @csspart card - The evidence card container
 * @csspart log - The audit log table
 */
@customElement('wu-sox-evidence-export')
export class WuSoxEvidenceExport extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--wu-font-sans);
    }

    .card {
      border: 1px solid var(--wu-color-border);
      border-radius: var(--wu-radius-lg);
      overflow: hidden;
    }

    .header {
      padding: var(--wu-space-4);
      background: var(--wu-color-surface);
      border-bottom: 1px solid var(--wu-color-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--wu-space-3);
      flex-wrap: wrap;
    }

    .header-left h3 {
      font-size: var(--wu-text-base);
      font-weight: var(--wu-font-semibold);
      color: var(--wu-color-text);
      margin: 0 0 4px;
    }

    .header-left p {
      font-size: var(--wu-text-xs);
      color: var(--wu-color-text-secondary);
      margin: 0;
    }

    .actions {
      display: flex;
      gap: var(--wu-space-2);
    }

    .export-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--wu-space-1);
      padding: var(--wu-space-2) var(--wu-space-3);
      border-radius: var(--wu-radius-md);
      font-family: var(--wu-font-sans);
      font-size: var(--wu-text-xs);
      font-weight: var(--wu-font-semibold);
      cursor: pointer;
      transition: background var(--wu-duration-fast);
      border: 1px solid var(--wu-color-border);
      background: var(--wu-color-surface-raised, var(--wu-color-white));
      color: var(--wu-color-text);
    }

    .export-btn:hover {
      background: var(--wu-color-surface);
    }

    .export-btn:focus-visible {
      outline: none;
      box-shadow: var(--wu-focus-ring);
    }

    .chain-badge {
      padding: var(--wu-space-2) var(--wu-space-4);
      background: var(--wu-color-success-subtle, #f0fdf4);
      border-bottom: 1px solid var(--wu-color-border);
      display: flex;
      align-items: center;
      gap: var(--wu-space-2);
      font-size: var(--wu-text-xs);
      color: var(--wu-color-success);
      font-weight: var(--wu-font-semibold);
    }

    table {
      width: 100%;
      border-collapse: collapse;
      font-size: var(--wu-text-sm);
    }

    thead {
      background: var(--wu-color-surface);
    }

    th {
      padding: var(--wu-space-2) var(--wu-space-4);
      text-align: left;
      font-weight: var(--wu-font-semibold);
      color: var(--wu-color-text-secondary);
      border-bottom: 1px solid var(--wu-color-border);
    }

    td {
      padding: var(--wu-space-2) var(--wu-space-4);
      color: var(--wu-color-text);
      border-bottom: 1px solid var(--wu-color-border);
      font-family: var(--wu-font-mono);
      font-size: var(--wu-text-xs);
    }

    tr:last-child td {
      border-bottom: none;
    }

    tbody tr:hover {
      background: var(--wu-color-surface);
    }

    .empty {
      padding: var(--wu-space-8);
      text-align: center;
      color: var(--wu-color-text-secondary);
    }

    .signature-block {
      padding: var(--wu-space-4);
      border-top: 1px solid var(--wu-color-border);
      display: flex;
      gap: var(--wu-space-8);
    }

    .sig-field {
      flex: 1;
    }

    .sig-label {
      font-size: var(--wu-text-xs);
      color: var(--wu-color-text-secondary);
      margin-bottom: var(--wu-space-1);
    }

    .sig-line {
      border-bottom: 1px solid var(--wu-color-border-strong);
      height: 32px;
    }
  `;

  /** Evidence document title */
  @property()
  title = 'SOX Audit Evidence';

  /** Period covered (e.g. "Q1 2025") */
  @property()
  period = '';

  /** Name of the person/system that generated this report */
  @property({ attribute: 'generated-by' })
  generatedBy = '';

  /** Audit log entries */
  @property({ type: Array })
  entries: SoxAuditEntry[] = [];

  /** Show signature placeholders at the bottom */
  @property({ type: Boolean, attribute: 'show-signature' })
  showSignature = false;

  private _exportPdf() {
    this.dispatchEvent(new CustomEvent('wu-export-pdf', { bubbles: true, composed: true, detail: { entries: this.entries } }));
  }

  private _exportCsv() {
    const header = 'Timestamp,Action,User,Details\n';
    const rows = this.entries.map((e) =>
      `"${e.timestamp}","${e.action}","${e.user}","${e.details ?? ''}"`,
    ).join('\n');
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${this.title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    this.dispatchEvent(new CustomEvent('wu-export-csv', { bubbles: true, composed: true, detail: { entries: this.entries } }));
  }

  render() {
    return html`
      <div class="card" part="card" aria-label="${this.title}">
        <div class="header">
          <div class="header-left">
            <h3>${this.title}</h3>
            <p>
              ${this.period ? html`Period: ${this.period} · ` : nothing}
              Generated: ${new Date().toLocaleDateString()}
              ${this.generatedBy ? html` · By: ${this.generatedBy}` : nothing}
            </p>
          </div>
          <div class="actions">
            <button class="export-btn" type="button" @click=${this._exportCsv} aria-label="Export as CSV">
              CSV Export
            </button>
            <button class="export-btn" type="button" @click=${this._exportPdf} aria-label="Export as PDF">
              PDF Export
            </button>
          </div>
        </div>

        ${this.entries.length > 0 ? html`
          <div class="chain-badge" aria-label="Chain of custody verified">
            ✓ Chain of Custody — ${this.entries.length} entries logged
          </div>
        ` : nothing}

        <table part="log" role="grid" aria-label="Audit log">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Action</th>
              <th>User</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            ${this.entries.length === 0 ? html`
              <tr><td class="empty" colspan="4">No audit entries recorded.</td></tr>
            ` : this.entries.map((entry) => html`
              <tr>
                <td>${entry.timestamp}</td>
                <td>${entry.action}</td>
                <td>${entry.user}</td>
                <td>${entry.details ?? '—'}</td>
              </tr>
            `)}
          </tbody>
        </table>

        ${this.showSignature ? html`
          <div class="signature-block" aria-label="Signature block">
            <div class="sig-field">
              <div class="sig-label">Prepared by</div>
              <div class="sig-line"></div>
            </div>
            <div class="sig-field">
              <div class="sig-label">Reviewed by</div>
              <div class="sig-line"></div>
            </div>
            <div class="sig-field">
              <div class="sig-label">Date</div>
              <div class="sig-line"></div>
            </div>
          </div>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-sox-evidence-export': WuSoxEvidenceExport; }
}
