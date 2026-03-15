import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-stat.styles.js';

/**
 * A metric/KPI display card.
 * @element wu-stat
 */
@customElement('wu-stat')
export class WuStat extends LitElement {
  static styles = styles;
  @property() label = '';
  @property() value = '';
  @property() delta = '';
  @property({ reflect: true }) trend: 'up' | 'down' | 'neutral' = 'neutral';
  @property() description = '';

  render() {
    const icon = this.trend === 'up' ? '↑' : this.trend === 'down' ? '↓' : '→';
    return html`
      <div class="stat">
        ${this.label ? html`<div class="label">${this.label}</div>` : ''}
        <div class="value">${this.value}</div>
        ${this.delta ? html`<div class="delta ${this.trend}">${icon} ${this.delta}</div>` : ''}
        ${this.description ? html`<div class="description">${this.description}</div>` : ''}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-stat': WuStat; } }
