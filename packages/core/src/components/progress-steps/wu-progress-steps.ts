import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-progress-steps.styles.js';

/**
 * A multi-step process indicator (wizard breadcrumb / stepper).
 *
 * @element wu-progress-steps
 * @csspart base - The steps container
 */
@customElement('wu-progress-steps')
export class WuProgressSteps extends LitElement {
  static styles = styles;

  /** Step labels */
  @property({ type: Array }) steps: string[] = [];

  /** Zero-based index of the current step */
  @property({ type: Number, reflect: true }) current = 0;

  /** Layout orientation */
  @property({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  override render() {
    return html`
      <nav part="base" class="steps orientation-${this.orientation}" aria-label="Progress">
        <ol>
          ${repeat(
            this.steps,
            (_, i) => i,
            (step, i) => {
              const state =
                i < this.current ? 'completed' : i === this.current ? 'current' : 'upcoming';
              return html`
                <li class="step ${state}" aria-current=${state === 'current' ? 'step' : 'false'}>
                  <span class="indicator" aria-hidden="true">
                    ${state === 'completed' ? '✓' : i + 1}
                  </span>
                  <span class="label">${step}</span>
                  ${i < this.steps.length - 1 ? html`<span class="connector" aria-hidden="true"></span>` : ''}
                </li>
              `;
            },
          )}
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-progress-steps': WuProgressSteps;
  }
}
