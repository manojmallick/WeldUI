import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export interface ConsentChoices {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'wu-consent-v1';

/**
 * GDPR-compliant cookie/consent management banner.
 * Stores consent in localStorage with a timestamp.
 * Re-prompts when consent is older than `maxAgeDays`.
 *
 * @element wu-consent-banner
 *
 * @event wu-consent-accept - Emitted when user accepts. Detail: `{ choices: ConsentChoices }`
 * @event wu-consent-reject - Emitted when user rejects all optional cookies.
 *
 * @csspart banner - The banner container
 */
@customElement('wu-consent-banner')
export class WuConsentBanner extends LitElement {
  static styles = css`
    :host {
      display: block;
      --wu-cb-bg: var(--wu-color-surface-overlay, var(--wu-color-white));
      --wu-cb-border: var(--wu-color-border);
      --wu-cb-shadow: var(--wu-shadow-xl);
    }

    .banner {
      position: fixed;
      bottom: var(--wu-space-4);
      left: var(--wu-space-4);
      right: var(--wu-space-4);
      max-width: 600px;
      background: var(--wu-cb-bg);
      border: 1px solid var(--wu-cb-border);
      border-radius: var(--wu-radius-xl);
      box-shadow: var(--wu-cb-shadow);
      padding: var(--wu-space-5);
      font-family: var(--wu-font-sans);
      z-index: 1000;
      display: none;
    }

    :host([visible]) .banner {
      display: block;
    }

    h2 {
      font-size: var(--wu-text-base);
      font-weight: var(--wu-font-semibold);
      color: var(--wu-color-text);
      margin: 0 0 var(--wu-space-2);
    }

    p {
      font-size: var(--wu-text-sm);
      color: var(--wu-color-text-secondary);
      margin: 0 0 var(--wu-space-4);
      line-height: var(--wu-leading-normal);
    }

    .toggles {
      display: flex;
      flex-direction: column;
      gap: var(--wu-space-2);
      margin-bottom: var(--wu-space-4);
    }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--wu-space-3);
    }

    .toggle-label {
      font-size: var(--wu-text-sm);
      color: var(--wu-color-text);
      flex: 1;
    }

    .toggle-desc {
      font-size: var(--wu-text-xs);
      color: var(--wu-color-text-secondary);
      margin-top: 2px;
    }

    .required-badge {
      font-size: var(--wu-text-xs);
      color: var(--wu-color-text-disabled);
    }

    input[type='checkbox'] {
      width: 18px;
      height: 18px;
      accent-color: var(--wu-color-primary);
      cursor: pointer;
      flex-shrink: 0;
    }

    input[type='checkbox']:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .actions {
      display: flex;
      gap: var(--wu-space-2);
      flex-wrap: wrap;
    }

    button {
      font-family: var(--wu-font-sans);
      font-size: var(--wu-text-sm);
      font-weight: var(--wu-font-semibold);
      padding: var(--wu-space-2) var(--wu-space-4);
      border-radius: var(--wu-radius-md);
      cursor: pointer;
      transition: all var(--wu-duration-fast);
      border: 1px solid transparent;
      outline: none;
    }

    button:focus-visible {
      box-shadow: var(--wu-focus-ring);
    }

    .btn-accept {
      background: var(--wu-color-primary);
      color: var(--wu-color-primary-fg);
    }

    .btn-accept:hover {
      background: var(--wu-color-primary-hover);
    }

    .btn-reject {
      background: transparent;
      border-color: var(--wu-color-border);
      color: var(--wu-color-text-secondary);
    }

    .btn-reject:hover {
      background: var(--wu-color-surface);
    }
  `;

  /** Max age of stored consent in days before re-prompting */
  @property({ type: Number, attribute: 'max-age-days' })
  maxAgeDays = 365;

  /** Whether the banner is currently visible */
  @property({ type: Boolean, reflect: true })
  visible = false;

  @state() private _analytics = false;
  @state() private _marketing = false;
  @state() private _preferences = false;

  connectedCallback() {
    super.connectedCallback();
    this._checkConsent();
  }

  private _checkConsent() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) { this.visible = true; return; }
      const parsed = JSON.parse(stored) as ConsentChoices;
      const age = (Date.now() - new Date(parsed.timestamp).getTime()) / (1000 * 60 * 60 * 24);
      if (age > this.maxAgeDays) { this.visible = true; }
    } catch {
      this.visible = true;
    }
  }

  private _accept() {
    const choices: ConsentChoices = {
      necessary: true,
      analytics: this._analytics,
      marketing: this._marketing,
      preferences: this._preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choices));
    this.visible = false;
    this.dispatchEvent(new CustomEvent('wu-consent-accept', {
      bubbles: true, composed: true, detail: { choices },
    }));
  }

  private _reject() {
    const choices: ConsentChoices = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(choices));
    this.visible = false;
    this.dispatchEvent(new CustomEvent('wu-consent-reject', {
      bubbles: true, composed: true, detail: { choices },
    }));
  }

  /** Show the consent banner regardless of stored state */
  show() { this.visible = true; }

  /** Get the currently stored consent choices */
  getConsent(): ConsentChoices | null {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? 'null'); }
    catch { return null; }
  }

  render() {
    return html`
      <div class="banner" part="banner" role="dialog" aria-modal="true" aria-label="Cookie consent">
        <h2>Your Privacy Choices</h2>
        <p>
          We use cookies to improve your experience. Required cookies are always active.
          You can choose which optional cookies to allow.
        </p>

        <div class="toggles">
          <div class="toggle-row">
            <div>
              <div class="toggle-label">Necessary Cookies</div>
              <div class="toggle-desc">Required for the site to function. Cannot be disabled.</div>
            </div>
            <input type="checkbox" checked disabled aria-label="Necessary cookies (always enabled)" />
          </div>
          <div class="toggle-row">
            <div>
              <div class="toggle-label">Analytics</div>
              <div class="toggle-desc">Help us understand how you use our product.</div>
            </div>
            <input type="checkbox" .checked=${this._analytics} @change=${(e: Event) => { this._analytics = (e.target as HTMLInputElement).checked; }} aria-label="Analytics cookies" />
          </div>
          <div class="toggle-row">
            <div>
              <div class="toggle-label">Marketing</div>
              <div class="toggle-desc">Used to personalize ads and measure their effectiveness.</div>
            </div>
            <input type="checkbox" .checked=${this._marketing} @change=${(e: Event) => { this._marketing = (e.target as HTMLInputElement).checked; }} aria-label="Marketing cookies" />
          </div>
          <div class="toggle-row">
            <div>
              <div class="toggle-label">Preferences</div>
              <div class="toggle-desc">Remember your settings and preferences.</div>
            </div>
            <input type="checkbox" .checked=${this._preferences} @change=${(e: Event) => { this._preferences = (e.target as HTMLInputElement).checked; }} aria-label="Preference cookies" />
          </div>
        </div>

        <div class="actions">
          <button class="btn-accept" @click=${this._accept}>Accept Selected</button>
          <button class="btn-reject" @click=${this._reject}>Reject Optional</button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap { 'wu-consent-banner': WuConsentBanner; }
}
