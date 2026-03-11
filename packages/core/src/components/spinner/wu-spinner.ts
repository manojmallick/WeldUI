import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-spinner.styles.js';

/**
 * An animated loading spinner.
 *
 * @element wu-spinner
 *
 * @cssprop --wu-spinner-size - Spinner diameter
 * @cssprop --wu-spinner-color - Active arc colour
 * @cssprop --wu-spinner-track - Track ring colour
 * @cssprop --wu-spinner-thickness - Border/arc thickness
 * @cssprop --wu-spinner-speed - Animation duration
 */
@customElement('wu-spinner')
export class WuSpinner extends LitElement {
  static styles = styles;

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' = 'md';

  /** Accessible label announced to screen readers */
  @property()
  label = 'Loading…';

  render() {
    return html`
      <span role="status" aria-label=${this.label}>
        <span class="spinner" aria-hidden="true"></span>
        <span class="sr-only" style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap">${this.label}</span>
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-spinner': WuSpinner;
  }
}
