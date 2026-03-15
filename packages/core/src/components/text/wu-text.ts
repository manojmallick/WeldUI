import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-text.styles.js';

/**
 * Inline text with semantic colour and size variants.
 *
 * @element wu-text
 * @slot - Text content
 * @csspart base - The span element
 */
@customElement('wu-text')
export class WuText extends LitElement {
  static styles = styles;

  /** Colour variant */
  @property({ reflect: true })
  variant: 'default' | 'secondary' | 'muted' | 'danger' | 'success' | 'warning' | 'primary' =
    'default';

  /** Font size */
  @property({ reflect: true }) size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' = 'base';

  /** Font weight */
  @property({ reflect: true }) weight: 'normal' | 'medium' | 'semibold' | 'bold' = 'normal';

  /** Italic */
  @property({ type: Boolean, reflect: true }) italic = false;

  /** Monospace font */
  @property({ type: Boolean, reflect: true }) mono = false;

  override render() {
    return html`<span part="base" class="text"><slot></slot></span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-text': WuText;
  }
}
