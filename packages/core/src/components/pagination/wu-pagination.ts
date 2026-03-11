import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-pagination.styles.js';

/**
 * A pagination control for navigating paged data.
 *
 * @element wu-pagination
 *
 * @event wu-page-change - Emitted when the page changes ({ page: number })
 *
 * @cssprop --wu-pagination-bg-active - Active page button background
 * @cssprop --wu-pagination-btn-size - Page button size
 */
@customElement('wu-pagination')
export class WuPagination extends LitElement {
  static styles = styles;

  /** Current page (1-indexed) */
  @property({ type: Number })
  page = 1;

  /** Total number of pages */
  @property({ type: Number, attribute: 'total-pages' })
  totalPages = 1;

  /** Show total count info */
  @property({ type: Boolean, attribute: 'show-info' })
  showInfo = false;

  /** Total item count (for info display) */
  @property({ type: Number, attribute: 'total-items' })
  totalItems = 0;

  /** Items per page (for info display) */
  @property({ type: Number, attribute: 'page-size' })
  pageSize = 10;

  private _go(p: number): void {
    if (p < 1 || p > this.totalPages || p === this.page) return;
    this.page = p;
    this.dispatchEvent(new CustomEvent('wu-page-change', {
      bubbles: true, composed: true, detail: { page: p },
    }));
  }

  private _pages(): (number | 'dots')[] {
    const total = this.totalPages;
    const cur = this.page;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages: (number | 'dots')[] = [1];
    if (cur > 3) pages.push('dots');
    const start = Math.max(2, cur - 1);
    const end = Math.min(total - 1, cur + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (cur < total - 2) pages.push('dots');
    pages.push(total);
    return pages;
  }

  render() {
    const pages = this._pages();
    const start = (this.page - 1) * this.pageSize + 1;
    const end = Math.min(this.page * this.pageSize, this.totalItems);

    return html`
      <button
        class="nav-btn"
        ?disabled=${this.page <= 1}
        aria-label="Previous page"
        @click=${() => this._go(this.page - 1)}
      >← Prev</button>

      <div class="pages" role="group" aria-label="Pages">
        ${pages.map(p =>
          p === 'dots'
            ? html`<span class="dots" aria-hidden="true">…</span>`
            : html`
              <button
                class="page-btn"
                aria-label="Page ${p}"
                aria-current=${p === this.page ? 'page' : 'false'}
                @click=${() => this._go(p as number)}
              >${p}</button>
            `
        )}
      </div>

      <button
        class="nav-btn"
        ?disabled=${this.page >= this.totalPages}
        aria-label="Next page"
        @click=${() => this._go(this.page + 1)}
      >Next →</button>

      ${this.showInfo && this.totalItems ? html`
        <span class="info">${start}–${end} of ${this.totalItems}</span>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-pagination': WuPagination;
  }
}
