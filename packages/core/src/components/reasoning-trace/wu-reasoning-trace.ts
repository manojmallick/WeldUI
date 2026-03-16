import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-reasoning-trace.styles.js';

/**
 * Collapsible thought-chain / reasoning trace display for AI responses.
 *
 * @element wu-reasoning-trace
 */
@customElement('wu-reasoning-trace')
export class WuReasoningTrace extends LitElement {
  static styles = styles;

  /** Whether the trace is expanded */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** List of reasoning steps */
  @property({ attribute: false })
  steps: string[] = [];

  @property()
  label = 'Reasoning';

  private toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <div
        class="header"
        part="header"
        @click=${this.toggle}
        role="button"
        aria-expanded=${this.open}
        tabindex="0"
        @keydown=${(e: KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); this.toggle(); } }}
      >
        <span class="icon" aria-hidden="true">▶</span>
        <span class="title">${this.label} (${this.steps.length} steps)</span>
      </div>
      <div class="steps" part="steps" role="list">
        ${this.steps.map((s, i) => html`
          <div class="step" role="listitem">
            <span class="step-num">${i + 1}.</span>
            <span>${s}</span>
          </div>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-reasoning-trace': WuReasoningTrace;
  }
}
