import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-checkout-steps.styles.js';

/**
 * Checkout progress stepper showing current step in purchase flow.
 *
 * @element wu-checkout-steps
 */
@customElement('wu-checkout-steps')
export class WuCheckoutSteps extends LitElement {
  static styles = styles;

  @property({ type: Array }) steps: string[] = ['Cart', 'Shipping', 'Payment', 'Review'];
  @property({ type: Number }) current = 0;

  override render() {
    return html`
      <nav aria-label="Checkout steps" class="steps">
        ${repeat(
          this.steps,
          (s) => s,
          (step, i) => {
            const state = i < this.current ? 'done' : i === this.current ? 'current' : 'upcoming';
            return html`
              ${i > 0 ? html`<div class="connector ${state !== 'upcoming' ? 'filled' : ''}"></div>` : ''}
              <div class="step ${state}" aria-current=${state === 'current' ? 'step' : 'false'}>
                <span class="step-num" aria-hidden="true">
                  ${state === 'done'
                    ? html`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`
                    : i + 1}
                </span>
                <span class="step-label">${step}</span>
              </div>
            `;
          },
        )}
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-checkout-steps': WuCheckoutSteps;
  }
}
