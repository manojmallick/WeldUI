import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-prose.styles.js';

/**
 * A container that applies readable typographic styles to long-form HTML content.
 *
 * @element wu-prose
 * @slot - Long-form HTML content (p, h2–h6, ul, ol, blockquote, code, pre)
 * @csspart base - The prose container
 * @cssprop --wu-prose-max-width - Maximum line width
 */
@customElement('wu-prose')
export class WuProse extends LitElement {
  static styles = styles;

  /** Text size scale */
  @property({ reflect: true }) size: 'sm' | 'base' | 'lg' = 'base';

  override render() {
    return html`<div part="base" class="prose"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-prose': WuProse;
  }
}
