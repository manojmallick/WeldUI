import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-login-form.styles.js';

/**
 * Login form with email, password, and optional remember-me.
 *
 * @element wu-login-form
 * @event wu-submit - Fired on submit, detail: { email: string, password: string, remember: boolean }
 * @event wu-forgot-password - Fired when forgot-password link is clicked
 */
@customElement('wu-login-form')
export class WuLoginForm extends LitElement {
  static styles = styles;

  /** Heading text */
  @property() heading = 'Sign in';

  /** Show remember-me checkbox */
  @property({ type: Boolean, reflect: true, attribute: 'show-remember' }) showRemember = false;

  /** Show forgot-password link */
  @property({ type: Boolean, reflect: true, attribute: 'show-forgot' }) showForgot = true;

  /** Loading/submitting state */
  @property({ type: Boolean, reflect: true }) loading = false;

  /** Error message to display */
  @property() error = '';

  @state() private email = '';
  @state() private password = '';
  @state() private remember = false;
  @state() private showPw = false;

  private handleSubmit(e: Event) {
    e.preventDefault();
    if (!this.email || !this.password) return;
    this.dispatchEvent(
      new CustomEvent('wu-submit', {
        bubbles: true,
        composed: true,
        detail: { email: this.email, password: this.password, remember: this.remember },
      }),
    );
  }

  override render() {
    return html`
      <form class="form" @submit=${this.handleSubmit} novalidate>
        <h2 class="heading">${this.heading}</h2>
        ${this.error ? html`<p class="error-msg" role="alert">${this.error}</p>` : ''}
        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            autocomplete="email"
            required
            placeholder="you@example.com"
            .value=${this.email}
            @input=${(e: Event) => { this.email = (e.target as HTMLInputElement).value; }}
          />
        </div>
        <div class="field">
          <div class="label-row">
            <label for="password">Password</label>
            ${this.showForgot
              ? html`<button type="button" class="link-btn" @click=${() => this.dispatchEvent(new CustomEvent('wu-forgot-password', { bubbles: true, composed: true }))}>Forgot password?</button>`
              : ''}
          </div>
          <div class="pw-wrap">
            <input
              id="password"
              type=${this.showPw ? 'text' : 'password'}
              autocomplete="current-password"
              required
              placeholder="••••••••"
              .value=${this.password}
              @input=${(e: Event) => { this.password = (e.target as HTMLInputElement).value; }}
            />
            <button type="button" class="show-pw" aria-label=${this.showPw ? 'Hide password' : 'Show password'} @click=${() => { this.showPw = !this.showPw; }}>
              ${this.showPw ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        ${this.showRemember
          ? html`
              <label class="remember">
                <input type="checkbox" ?checked=${this.remember} @change=${(e: Event) => { this.remember = (e.target as HTMLInputElement).checked; }} />
                Remember me
              </label>
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
    'wu-login-form': WuLoginForm;
  }
}
