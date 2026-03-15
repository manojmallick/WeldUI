import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-captcha.styles.js';

/**
 * CAPTCHA placeholder / wrapper that signals human verification.
 * In production, integrate with your CAPTCHA provider (e.g. hCaptcha, Turnstile).
 *
 * @element wu-captcha
 * @event wu-verified - Fired when the user checks the checkbox
 */
@customElement('wu-captcha')
export class WuCaptcha extends LitElement {
  static styles = styles;

  /** Brand name shown in widget */
  @property() provider = 'CAPTCHA';

  /** Whether the challenge is completed */
  @property({ type: Boolean, reflect: true }) verified = false;

  private handleChange(e: Event) {
    this.verified = (e.target as HTMLInputElement).checked;
    if (this.verified) {
      this.dispatchEvent(
        new CustomEvent('wu-verified', { bubbles: true, composed: true }),
      );
    }
  }

  override render() {
    return html`
      <div class="captcha-widget" role="group" aria-label="${this.provider} verification">
        <label class="check-label">
          <input
            type="checkbox"
            class="checkbox"
            ?checked=${this.verified}
            @change=${this.handleChange}
            aria-label="I am not a robot"
          />
          <span>I'm not a robot</span>
        </label>
        <div class="brand">
          <span class="brand-name">${this.provider}</span>
          <span class="brand-sub">Privacy - Terms</span>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-captcha': WuCaptcha;
  }
}
