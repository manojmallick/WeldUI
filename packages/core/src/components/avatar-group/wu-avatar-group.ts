import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-avatar-group.styles.js';

/**
 * Stacks avatar components with an overflow count badge.
 * @element wu-avatar-group
 * @slot - wu-avatar elements
 */
@customElement('wu-avatar-group')
export class WuAvatarGroup extends LitElement {
  static styles = styles;
  @property({ type: Number }) max = 5;
  @property({ type: Number }) total = 0;

  render() {
    const overflow = this.total > this.max ? this.total - this.max : 0;
    return html`
      <div class="group" aria-label="Avatar group">
        <slot></slot>
        ${overflow > 0 ? html`<div class="overflow" aria-label="${overflow} more">+${overflow}</div>` : ''}
      </div>`;
  }
}

declare global { interface HTMLElementTagNameMap { 'wu-avatar-group': WuAvatarGroup; } }
