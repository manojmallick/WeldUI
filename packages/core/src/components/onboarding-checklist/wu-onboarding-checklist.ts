import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-onboarding-checklist.styles.js';

export interface OnboardingItem {
  id: string;
  label: string;
  completed: boolean;
}

/**
 * Getting-started checklist that tracks progress through onboarding steps.
 *
 * @element wu-onboarding-checklist
 * @event wu-item-complete - Fired when a step is checked, detail: { id: string }
 * @event wu-dismiss - Fired when the checklist is dismissed
 * @csspart base - The checklist container
 */
@customElement('wu-onboarding-checklist')
export class WuOnboardingChecklist extends LitElement {
  static styles = styles;

  /** Checklist title */
  @property() title = 'Getting Started';

  /** Array of checklist items */
  @property({ type: Array }) items: OnboardingItem[] = [];

  @state() private dismissed = false;

  private handleCheck(id: string) {
    this.items = this.items.map((item) =>
      item.id === id ? { ...item, completed: true } : item,
    );
    this.dispatchEvent(
      new CustomEvent('wu-item-complete', {
        bubbles: true,
        composed: true,
        detail: { id },
      }),
    );
  }

  private handleDismiss() {
    this.dismissed = true;
    this.dispatchEvent(new CustomEvent('wu-dismiss', { bubbles: true, composed: true }));
  }

  private get completedCount() {
    return this.items.filter((i) => i.completed).length;
  }

  override render() {
    if (this.dismissed) return html``;
    const total = this.items.length;
    const done = this.completedCount;
    const percent = total > 0 ? Math.round((done / total) * 100) : 0;

    return html`
      <div part="base" class="checklist">
        <div class="header">
          <span class="title">${this.title}</span>
          <button class="dismiss-btn" aria-label="Dismiss checklist" @click=${this.handleDismiss}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div class="progress-bar-wrap" aria-label="${done} of ${total} steps completed">
          <div class="progress-bar" style="width:${percent}%"></div>
        </div>
        <p class="progress-text">${done} / ${total} completed</p>
        <ul class="items" role="list">
          ${repeat(
            this.items,
            (item) => item.id,
            (item) => html`
              <li class="item ${item.completed ? 'completed' : ''}">
                <button
                  class="check-btn"
                  aria-label="Mark '${item.label}' as complete"
                  ?disabled=${item.completed}
                  @click=${() => this.handleCheck(item.id)}
                >
                  ${item.completed
                    ? html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`
                    : html`<span class="empty-check" aria-hidden="true"></span>`}
                </button>
                <span class="item-label">${item.label}</span>
              </li>
            `,
          )}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-onboarding-checklist': WuOnboardingChecklist;
  }
}
