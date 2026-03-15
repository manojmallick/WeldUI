import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styles } from './wu-rich-text.styles.js';

type Format = 'bold' | 'italic' | 'underline' | 'insertUnorderedList' | 'insertOrderedList';

/**
 * A contenteditable rich text editor with a formatting toolbar.
 * @element wu-rich-text
 * @event wu-change - Fires on content change, detail: { value: string (HTML), text: string (plain) }
 * @event wu-focus - Fires when editor gains focus
 * @event wu-blur - Fires when editor loses focus
 */
@customElement('wu-rich-text')
export class WuRichText extends LitElement {
  static styles = styles;

  @property() label = '';
  @property() value = '';
  @property() placeholder = 'Type something…';
  @property({ type: Boolean, reflect: true }) readonly = false;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property() error = '';

  @state() private _activeFmts = new Set<string>();

  @query('.content') private _editor!: HTMLDivElement;

  firstUpdated() {
    if (this.value) this._editor.innerHTML = this.value;
  }

  private _exec(cmd: Format) {
    this._editor.focus();
    document.execCommand(cmd, false);
    this._updateActive();
  }

  private _execBlock(tag: string) {
    this._editor.focus();
    document.execCommand('formatBlock', false, tag);
    this._updateActive();
  }

  private _updateActive() {
    const fmts: Format[] = ['bold', 'italic', 'underline', 'insertUnorderedList', 'insertOrderedList'];
    const active = fmts.filter(f => {
      try { return document.queryCommandState(f); } catch { return false; }
    });
    this._activeFmts = new Set(active);
  }

  private _onInput() {
    this._updateActive();
    const html = this._editor.innerHTML;
    const text = this._editor.textContent || '';
    this.dispatchEvent(new CustomEvent('wu-change', { bubbles: true, composed: true, detail: { value: html, text } }));
  }

  private _onFocus() { this.dispatchEvent(new CustomEvent('wu-focus', { bubbles: true, composed: true })); }
  private _onBlur() { this.dispatchEvent(new CustomEvent('wu-blur', { bubbles: true, composed: true })); }

  private _onLinkClick() {
    const url = window.prompt('Enter URL');
    if (url) { this._editor.focus(); document.execCommand('createLink', false, url); }
  }

  private _isActive(fmt: string) { return this._activeFmts.has(fmt); }

  render() {
    const bold = this._isActive('bold');
    const italic = this._isActive('italic');
    const underline = this._isActive('underline');
    const ul = this._isActive('insertUnorderedList');
    const ol = this._isActive('insertOrderedList');
    return html`
      <label ?hidden=${!this.label}>${this.label}</label>
      <div class="wrapper">
        ${!this.readonly ? html`
          <div class="toolbar" @mousedown=${(e: Event) => e.preventDefault()}>
            <button class=${classMap({'tb-btn': true, 'active': bold})} @click=${() => this._exec('bold')} aria-label="Bold" title="Bold"><b>B</b></button>
            <button class=${classMap({'tb-btn': true, 'active': italic})} @click=${() => this._exec('italic')} aria-label="Italic" title="Italic"><i>I</i></button>
            <button class=${classMap({'tb-btn': true, 'active': underline})} @click=${() => this._exec('underline')} aria-label="Underline" title="Underline"><u>U</u></button>
            <span class="tb-sep"></span>
            <button class="tb-btn" @click=${() => this._execBlock('h1')} aria-label="H1" title="Heading 1">H1</button>
            <button class="tb-btn" @click=${() => this._execBlock('h2')} aria-label="H2" title="Heading 2">H2</button>
            <span class="tb-sep"></span>
            <button class=${classMap({'tb-btn': true, 'active': ul})} @click=${() => this._exec('insertUnorderedList')} aria-label="Unordered list" title="Bullet list">• List</button>
            <button class=${classMap({'tb-btn': true, 'active': ol})} @click=${() => this._exec('insertOrderedList')} aria-label="Ordered list" title="Numbered list">1. List</button>
            <span class="tb-sep"></span>
            <button class="tb-btn" @click=${this._onLinkClick} aria-label="Insert link" title="Link">🔗</button>
          </div>` : ''}
        <div
          class="content"
          contenteditable=${(!this.readonly && !this.disabled) ? 'true' : 'false'}
          data-placeholder=${this.placeholder}
          @input=${this._onInput}
          @keyup=${this._updateActive}
          @mouseup=${this._updateActive}
          @focus=${this._onFocus}
          @blur=${this._onBlur}
          role="textbox"
          aria-multiline="true"
          aria-label=${this.label || 'Rich text editor'}
        ></div>
      </div>
      <p class="error-msg" role="alert" ?hidden=${!this.error}>${this.error}</p>
    `;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-rich-text': WuRichText; } }
