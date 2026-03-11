import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { stepperStyles, stepStyles } from './wu-stepper.styles.js';

/**
 * An individual step within a wu-stepper.
 *
 * @element wu-step
 *
 * @cssprop --wu-stepper-indicator-size - Size of the step indicator circle
 */
@customElement('wu-step')
export class WuStep extends LitElement {
  static styles = stepStyles;

  /** Step label */
  @property()
  label = '';

  /** Optional description text */
  @property()
  description = '';

  /** Step status */
  @property({ reflect: true })
  status: 'pending' | 'active' | 'complete' | 'error' = 'pending';

  /** Step index (set by parent) */
  @property({ type: Number })
  index = 0;

  /** Disabled state */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  private _renderIndicator() {
    if (this.status === 'complete') {
      return html`
        <svg class="check-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="2 7 6 11 12 3"/>
        </svg>
      `;
    }
    if (this.status === 'error') {
      return html`
        <svg class="error-icon" width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
          <path d="M7 1L1 12h12L7 1zm0 8v2m0-5v2" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        </svg>
      `;
    }
    return html`${this.index + 1}`;
  }

  render() {
    return html`
      <div
        class="step-wrapper"
        role="listitem"
        aria-label="Step ${this.index + 1}: ${this.label}${this.status === 'active' ? ' (current)' : this.status === 'complete' ? ' (complete)' : ''}"
      >
        <div class="top-row">
          <div class="indicator">${this._renderIndicator()}</div>
          <div class="connector"></div>
        </div>
        <div class="content">
          <div class="label">${this.label}</div>
          ${this.description ? html`<div class="description">${this.description}</div>` : nothing}
        </div>
      </div>
    `;
  }
}

/**
 * A stepper component for multi-step processes.
 *
 * @element wu-stepper
 *
 * @slot - wu-step elements
 *
 * @event wu-step-change - Emitted when the active step changes. Detail: `{ step: number }`
 *
 * @cssprop --wu-stepper-connector-color - Connector line color
 * @cssprop --wu-stepper-connector-active - Active connector color
 */
@customElement('wu-stepper')
export class WuStepper extends LitElement {
  static styles = stepperStyles;

  /** Currently active step index (0-based) */
  @property({ type: Number, attribute: 'active-step' })
  activeStep = 0;

  /** If true, only allow advancing to immediately next step */
  @property({ type: Boolean })
  linear = false;

  /** Vertical orientation */
  @property({ type: Boolean, reflect: true })
  vertical = false;

  @state() private _steps: WuStep[] = [];

  private _setup() {
    const slot = this.shadowRoot!.querySelector('slot');
    if (!slot) return;
    this._steps = slot.assignedNodes({ flatten: true }).filter(
      (n): n is WuStep => n instanceof WuStep
    );
    this._updateSteps();
  }

  private _updateSteps() {
    this._steps.forEach((step, i) => {
      if (i < this.activeStep) step.status = 'complete';
      else if (i === this.activeStep) step.status = 'active';
      else step.status = 'pending';
      step.index = i;
    });
  }

  firstUpdated() {
    this._setup();
  }

  /** Advance to the next step */
  next() {
    if (this.activeStep < this._steps.length - 1) {
      this.activeStep++;
      this._updateSteps();
      this._emit();
    }
  }

  /** Go back to the previous step */
  prev() {
    if (this.activeStep > 0) {
      this.activeStep--;
      this._updateSteps();
      this._emit();
    }
  }

  private _emit() {
    this.dispatchEvent(new CustomEvent('wu-step-change', {
      bubbles: true,
      composed: true,
      detail: { step: this.activeStep },
    }));
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has('activeStep')) this._updateSteps();
  }

  render() {
    return html`
      <div class="stepper" role="list" aria-label="Progress steps">
        <slot @slotchange=${this._setup}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-stepper': WuStepper;
    'wu-step': WuStep;
  }
}
