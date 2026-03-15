import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-signup-form.styles.js';

/**
 * Registration form with name, email, password, and optional confirm-password.
 *
 * @element wu-signup-form
 * @event wu-submit - detail: { name: string, email: string, password: string }
 */
@customElement('wu-signup-form')
export class WuSignupForm extends LitElement {
  static styles = styles;

  @property() heading = 'Create account';
  @property({ type: Boolean, reflect: true }) loading = false;
  @property() error = '';
  @property({ type: Boolean, reflect: true, attribute: 'confirm-password' }) confirmPassword = true;

  @state() private name = '';
  @state() private email = '';
  @state() private password = '';
  @state() private confirm = '';
  @state() private mismatch = false;

  private handleSubmit(e: Event) {
    e.preventDefault();
    if (this.confirmPassword && this.password !== this.confirm) {
      this.mismatch = true;
      return;
    }
    this.mismatch = false;
    if (!this.name || !this.email || !this.password) return;
    this.dispatchEvent(
      new CustomEvent('wu-submit', {
        bubbles: true,
        composed: true,
        detail: { name: this.name, email: this.email, password: this.password },
      }),
    );
  }

  override render() {
    return html`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error ? html`<p class="error-msg" role="alert">${this.error}</p>` : ''}
        <div class="field">
          <label for="name">Full name</label>
          <input id="name" type="text" autocomplete="name" required placeholder="Jane Smith"
            .value=${this.name}
            @input=${(e: Event) => { this.name = (e.target as HTMLInputElement).value; }} />
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" type="email" autocomplete="email" required placeholder="you@example.com"
            .value=${this.email}
            @input=${(e: Event) => { this.email = (e.target as HTMLInputElement).value; }} />
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" type="password" autocomplete="new-password" required placeholder="8+ characters"
            .value=${this.password}
            @input=${(e: Event) => { this.password = (e.target as HTMLInputElement).value; }} />
        </div>
        ${this.confirmPassword
          ? html`
              <div class="field">
                <label for="confirm">Confirm password</label>
                <input id="confirm" type="password" autocomplete="new-password" required placeholder="Repeat password"
                  .value=${this.confirm}
                  @input=${(e: Event) => { this.confirm = (e.target as HTMLInputElement).value; this.mismatch = false; }} />
                ${this.mismatch ? html`<span class="field-error">Passwords do not match</span>` : ''}
              </div>
            `
          : ''}
        <button type="submit" class="submit-btn" ?disabled=${this.loading}>
          ${this.loading ? html`<span class="spinner"></span>` : ''}
          ${this.heading}
        </button>
      </form>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-signup-form': WuSignupForm;
  }
}
