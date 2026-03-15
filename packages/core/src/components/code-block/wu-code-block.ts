import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styles } from './wu-code-block.styles.js';

/**
 * A syntax-highlighted code display block with copy button.
 * @element wu-code-block
 */
@customElement('wu-code-block')
export class WuCodeBlock extends LitElement {
  static styles = styles;
  @property() language = 'text';
  @property() code = '';
  @property({ type: Boolean }) hideCopy = false;
  @state() private _copied = false;

  private async _copy() {
    await navigator.clipboard.writeText(this.code);
    this._copied = true;
    setTimeout(() => { this._copied = false; }, 2000);
  }

  render() {
    return html`
      <div class="wrapper" role="region" aria-label="Code block">
        <div class="header">
          <span class="lang">${this.language}</span>
          ${!this.hideCopy ? html`<button class="copy-btn ${this._copied ? 'copied' : ''}" @click=${this._copy} aria-label="Copy code">${this._copied ? '✓ Copied' : 'Copy'}</button>` : ''}
        </div>
        <pre><code>${this.code}</code></pre>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-code-block': WuCodeBlock; } }
