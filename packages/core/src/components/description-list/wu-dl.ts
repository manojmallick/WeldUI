import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dlStyles, dtStyles, ddStyles } from './wu-dl.styles.js';

/**
 * Description list container.
 * @element wu-dl
 */
@customElement('wu-dl')
export class WuDl extends LitElement {
  static styles = dlStyles;
  @property({ reflect: true }) layout: 'side-by-side' | 'stacked' = 'side-by-side';
  render() { return html`<dl><slot></slot></dl>`; }
}

/**
 * Description term (label).
 * @element wu-dt
 */
@customElement('wu-dt')
export class WuDt extends LitElement {
  static styles = dtStyles;
  render() { return html`<dt><slot></slot></dt>`; }
}

/**
 * Description detail (value).
 * @element wu-dd
 */
@customElement('wu-dd')
export class WuDd extends LitElement {
  static styles = ddStyles;
  render() { return html`<dd><slot></slot></dd>`; }
}

declare global { interface HTMLElementTagNameMap { 'wu-dl': WuDl; 'wu-dt': WuDt; 'wu-dd': WuDd; } }
