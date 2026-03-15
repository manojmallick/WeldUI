import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-api-key-display.styles.js';

/**
 * Displays an API key with masked/reveal toggle and copy-to-clipboard.
 *
 * @element wu-api-key-display
 * @event wu-copy - Fired when key is copied to clipboard
 */
@customElement('wu-api-key-display')
export class WuApiKeyDisplay extends LitElement {
  static styles = styles;

  /** The API key value */
  @property() value = '';

  /** Label shown above the key */
  @property() label = 'API Key';

  @state() private revealed = false;
  @state() private copied = false;

  private async handleCopy() {
    try {
      await navigator.clipboard.writeText(this.value);
      this.copied = true;
      this.dispatchEvent(new CustomEvent('wu-copy', { bubbles: true, composed: true }));
      setTimeout(() => { this.copied = false; }, 2000);
    } catch {
      // clipboard access denied
    }
  }

  private get displayValue() {
    if (!this.value) return '—';
    if (this.revealed) return this.value;
    const keep = this.value.slice(-4);
    return '•'.repeat(Math.max(0, this.value.length - 4)) + keep;
  }

  override render() {
    return html`
      <div class="api-key-display">
        <span class="label">${this.label}</span>
        <div class="key-row">
          <code class="key-value">${this.displayValue}</code>
          <div class="actions">
            <button
              class="icon-btn"
              aria-label=${this.revealed ? 'Hide key' : 'Reveal key'}
              title=${this.revealed ? 'Hide' : 'Reveal'}
              @click=${() => { this.revealed = !this.revealed; }}
            >
              ${this.revealed
                ? html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
                : html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
            </button>
            <button
              class="icon-btn ${this.copied ? 'copied' : ''}"
              aria-label="Copy to clipboard"
              title=${this.copied ? 'Copied!' : 'Copy'}
              @click=${this.handleCopy}
            >
              ${this.copied
                ? html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>`
                : html`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`}
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-api-key-display': WuApiKeyDisplay;
  }
}
