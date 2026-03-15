import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { styles } from './wu-scroll-area.styles.js';

/**
 * A scroll container with styled custom scrollbars.
 * @element wu-scroll-area
 * @slot - Scrollable content
 */
@customElement('wu-scroll-area')
export class WuScrollArea extends LitElement {
  static styles = styles;

  @property({ reflect: true }) orientation: 'vertical' | 'horizontal' | 'both' = 'both';
  @property({ attribute: 'max-height' }) maxHeight = '';
  @property({ attribute: 'max-width' }) maxWidth = '';

  render() {
    const s: Record<string, string> = {};
    if (this.maxHeight) s['maxHeight'] = this.maxHeight;
    if (this.maxWidth) s['maxWidth'] = this.maxWidth;
    return html`<div style=${styleMap(s)}><slot></slot></div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-scroll-area': WuScrollArea; } }
