import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { styles } from './wu-rich-text-viewer.styles.js';

/**
 * Renders pre-sanitized HTML rich text content safely.
 * IMPORTANT: The consumer is responsible for sanitizing `content` before passing it.
 * Use DOMPurify or equivalent on the server/consumer side.
 *
 * @element wu-rich-text-viewer
 */
@customElement('wu-rich-text-viewer')
export class WuRichTextViewer extends LitElement {
  static styles = styles;

  /** Pre-sanitized HTML string to render */
  @property() content = '';
  /** Render in compact mode with tighter spacing */
  @property({ type: Boolean, reflect: true }) compact = false;

  override render() {
    return html`
      <div class="prose" aria-live="polite">
        ${this.content ? unsafeHTML(this.content) : html`<slot></slot>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-rich-text-viewer': WuRichTextViewer;
  }
}
