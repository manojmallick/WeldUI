import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-order-status.styles.js';

export type OrderStatusStep = { label: string; date: string; done: boolean };

/**
 * Displays the current status and history of an order.
 *
 * @element wu-order-status
 */
@customElement('wu-order-status')
export class WuOrderStatus extends LitElement {
  static styles = styles;

  @property({ attribute: 'order-id' }) orderId = '';
  @property({ reflect: true }) status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled' = 'pending';
  @property({ type: Array }) steps: OrderStatusStep[] = [
    { label: 'Order placed', date: '', done: false },
    { label: 'Processing', date: '', done: false },
    { label: 'Shipped', date: '', done: false },
    { label: 'Delivered', date: '', done: false },
  ];

  private statusLabel(): string {
    const map: Record<string, string> = {
      pending: 'Pending', processing: 'Processing', shipped: 'Shipped',
      delivered: 'Delivered', cancelled: 'Cancelled',
    };
    return map[this.status] ?? this.status;
  }

  override render() {
    return html`
      <div class="wrapper">
        <div class="header">
          ${this.orderId ? html`<span class="order-id">Order #${this.orderId}</span>` : ''}
          <span class="status-badge status-${this.status}">${this.statusLabel()}</span>
        </div>
        <ol class="timeline" aria-label="Order timeline">
          ${repeat(
            this.steps,
            (s) => s.label,
            (s) => html`
              <li class="step ${s.done ? 'done' : ''}">
                <div class="circle" aria-hidden="true">${s.done ? html`<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>` : ''}</div>
                <div class="step-content">
                  <span class="step-label">${s.label}</span>
                  ${s.date ? html`<span class="step-date">${s.date}</span>` : ''}
                </div>
              </li>
            `,
          )}
        </ol>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-order-status': WuOrderStatus;
  }
}
