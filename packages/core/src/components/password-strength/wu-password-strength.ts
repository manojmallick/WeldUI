import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-password-strength.styles.js';

/**
 * Visual password strength indicator based on a strength score (0–4).
 *
 * @element wu-password-strength
 */
@customElement('wu-password-strength')
export class WuPasswordStrength extends LitElement {
  static styles = styles;

  /** Password to evaluate or pre-calculated score 0-4 */
  @property() password = '';

  /** Override computed score (0–4) */
  @property({ type: Number }) score: number | null = null;

  private computeScore(pw: string): number {
    if (!pw) return 0;
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^a-zA-Z0-9]/.test(pw)) s++;
    return s;
  }

  private readonly labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];
  private readonly variants = ['', 'danger', 'warning', 'info', 'success'];

  override render() {
    const s = this.score ?? this.computeScore(this.password);
    const label = this.labels[s] ?? '';
    const variant = this.variants[s] ?? '';

    return html`
      <div class="strength" aria-label="Password strength: ${label || 'Enter a password'}">
        ${[1,2,3,4].map(
          (i) => html`<div class="bar ${i <= s ? variant : 'empty'}"></div>`,
        )}
        ${label ? html`<span class="label ${variant}">${label}</span>` : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-password-strength': WuPasswordStrength;
  }
}
