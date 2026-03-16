import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-regex-tester.styles.js';

/**
 * Interactive regular expression tester
 *
 * @element wu-regex-tester
 * @slot - Default slot
 */
@customElement('wu-regex-tester')
export class WuRegexTester extends LitElement {
  static styles = styles;

  @property() label = '';
  @property() value = '';

  render() {
    return html`
      <div class="container">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div class="content">
          ${this.value || html`<slot></slot>`}
        </div>
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-regex-tester': WuRegexTester; } }
