import { LitElement, html, css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type DoraStatus = 'operational' | 'degraded' | 'partial_outage' | 'major_outage' | 'maintenance';
export type DoraSeverity = 'P1' | 'P2' | 'P3' | 'P4';

export interface DoraIncidentEntry {
  timestamp: string;
  message: string;
}

const STATUS_LABELS: Record<DoraStatus, string> = {
  operational: 'Operational',
  degraded: 'Degraded Performance',
  partial_outage: 'Partial Outage',
  major_outage: 'Major Outage',
  maintenance: 'Under Maintenance',
};

const STATUS_COLORS: Record<DoraStatus, string> = {
  operational: 'var(--wu-color-success)',
  degraded: 'var(--wu-color-warning)',
  partial_outage: 'var(--wu-color-warning)',
  major_outage: 'var(--wu-color-danger)',
  maintenance: 'var(--wu-color-info, var(--wu-color-primary))',
};

/**
 * DORA compliance incident status display component.
 * Shows operational status, RTO/RPO countdowns, severity badge, and incident timeline.
 *
 * @element wu-dora-incident-status
 *
 * @csspart card - The status card container
 */
@customElement('wu-dora-incident-status')
export class WuDoraIncidentStatus extends LitElement {
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
      display: flex;
      align-items: center;
      gap: var(--wu-space-3);
      border-bottom: 1px solid var(--wu-color-border);
    }

    .status-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      flex-shrink: 0;
    }

    .status-text {
      flex: 1;
      font-size: var(--wu-text-base);
      font-weight: var(--wu-font-semibold);
      color: var(--wu-color-text);
    }

    .severity-badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 8px;
      border-radius: var(--wu-radius-full);
      font-size: var(--wu-text-xs);
      font-weight: var(--wu-font-bold);
      border: 1px solid currentColor;
    }

    .severity-P1 { color: var(--wu-color-danger); }
    .severity-P2 { color: var(--wu-color-warning); }
    .severity-P3 { color: var(--wu-color-info, var(--wu-color-primary)); }
    .severity-P4 { color: var(--wu-color-text-secondary); }

    .metrics {
      display: flex;
      gap: var(--wu-space-1);
      padding: var(--wu-space-3) var(--wu-space-4);
      border-bottom: 1px solid var(--wu-color-border);
      flex-wrap: wrap;
    }

    .metric {
      flex: 1;
      min-width: 100px;
      padding: var(--wu-space-2) var(--wu-space-3);
      background: var(--wu-color-surface);
      border-radius: var(--wu-radius-md);
    }

    .metric-label {
      font-size: var(--wu-text-xs);
      color: var(--wu-color-text-secondary);
      margin-bottom: 4px;
    }

    .metric-value {
      font-size: var(--wu-text-lg);
      font-weight: var(--wu-font-bold);
      font-family: var(--wu-font-mono);
      color: var(--wu-color-text);
    }

    .timeline {
      padding: var(--wu-space-3) var(--wu-space-4);
    }

    .timeline-title {
      font-size: var(--wu-text-xs);
      font-weight: var(--wu-font-semibold);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--wu-color-text-secondary);
      margin-bottom: var(--wu-space-2);
    }

    .timeline-entry {
      display: flex;
      gap: var(--wu-space-3);
      padding: var(--wu-space-2) 0;
      border-top: 1px solid var(--wu-color-border);
    }

    .entry-time {
      font-size: var(--wu-text-xs);
      font-family: var(--wu-font-mono);
      color: var(--wu-color-text-disabled);
      flex-shrink: 0;
      width: 80px;
    }

    .entry-msg {
      font-size: var(--wu-text-sm);
      color: var(--wu-color-text);
    }
  `;

  /** Current operational status */
  @property({ reflect: true })
  status: DoraStatus = 'operational';

  /** Incident severity level */
  @property()
  severity: DoraSeverity = 'P3';

  /** Service name */
  @property({ attribute: 'service-name' })
  serviceName = 'Service';

  /** RTO target in minutes */
  @property({ type: Number })
  rto = 0;

  /** RPO target in minutes */
  @property({ type: Number })
  rpo = 0;

  /** Incident start time (ISO) */
  @property({ attribute: 'incident-start' })
  incidentStart = '';

  /** Timeline entries */
  @property({ type: Array })
  timeline: DoraIncidentEntry[] = [];

  render() {
    const color = STATUS_COLORS[this.status];
    const label = STATUS_LABELS[this.status];
    const elapsed = this.incidentStart
      ? Math.floor((Date.now() - new Date(this.incidentStart).getTime()) / 60000)
      : 0;

    return html`
      <div class="card" part="card" role="status" aria-label="${this.serviceName} status: ${label}">
        <div class="header">
          <span class="status-dot" style="background:${color}" aria-hidden="true"></span>
          <span class="status-text">${this.serviceName} — ${label}</span>
          ${this.status !== 'operational' ? html`
            <span class="severity-badge severity-${this.severity}" aria-label="Severity ${this.severity}">${this.severity}</span>
          ` : nothing}
        </div>

        ${(this.rto > 0 || this.rpo > 0 || this.incidentStart) ? html`
          <div class="metrics">
            ${this.incidentStart ? html`
              <div class="metric">
                <div class="metric-label">Duration</div>
                <div class="metric-value">${elapsed}m</div>
              </div>
            ` : nothing}
            ${this.rto > 0 ? html`
              <div class="metric">
                <div class="metric-label">RTO Target</div>
                <div class="metric-value">${this.rto}m</div>
              </div>
            ` : nothing}
            ${this.rpo > 0 ? html`
              <div class="metric">
                <div class="metric-label">RPO Target</div>
                <div class="metric-value">${this.rpo}m</div>
              </div>
            ` : nothing}
          </div>
        ` : nothing}

        ${this.timeline.length > 0 ? html`
          <div class="timeline" aria-label="Incident timeline">
            <div class="timeline-title">Incident Timeline</div>
            ${this.timeline.map((entry) => html`
              <div class="timeline-entry">
                <span class="entry-time">${new Date(entry.timestamp).toLocaleTimeString()}</span>
                <span class="entry-msg">${entry.message}</span>
              </div>
            `)}
          </div>
        ` : nothing}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-dora-incident-status': WuDoraIncidentStatus; }
}
