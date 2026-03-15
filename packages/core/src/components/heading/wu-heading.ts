import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-heading.styles.js';

/**
 * A semantic heading element (h1–h6) with a consistent token-driven size scale.
 * The visual size can differ from the semantic level for design flexibility.
 *
 * @element wu-heading
 * @slot - Heading text content
 * @csspart base - The heading element
 */
@customElement('wu-heading')
export class WuHeading extends LitElement {
  static styles = styles;

  /** Semantic heading level (1–6) */
  @property({ type: Number, reflect: true }) level: 1 | 2 | 3 | 4 | 5 | 6 = 2;

  /** Visual size (defaults to match level) */
  @property({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'auto' = 'auto';

  /** Truncate text with ellipsis */
  @property({ type: Boolean, reflect: true }) truncate = false;

  private get sizeClass() {
    return this.size === 'auto' ? `level-${this.level}` : this.size;
  }

  override render() {
    const cls = `heading size-${this.sizeClass}${this.truncate ? ' truncate' : ''}`;
    switch (this.level) {
      case 1: return html`<h1 part="base" class=${cls}><slot></slot></h1>`;
      case 3: return html`<h3 part="base" class=${cls}><slot></slot></h3>`;
      case 4: return html`<h4 part="base" class=${cls}><slot></slot></h4>`;
      case 5: return html`<h5 part="base" class=${cls}><slot></slot></h5>`;
      case 6: return html`<h6 part="base" class=${cls}><slot></slot></h6>`;
      default: return html`<h2 part="base" class=${cls}><slot></slot></h2>`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-heading': WuHeading;
  }
}
