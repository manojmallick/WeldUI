import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-conflict-resolver.styles.js';

/**
 * Side-by-side diff display for resolving edit conflicts in collaborative editing.
 *
 * @element wu-conflict-resolver
 * @event wu-resolve - Emitted with `{ winner: 'mine' | 'theirs' }` when resolved
 */
@customElement('wu-conflict-resolver')
export class WuConflictResolver extends LitElement {
  static styles = styles;

  @property({ attribute: 'mine-label' })
  mineLabel = 'Your version';

  @property({ attribute: 'theirs-label' })
  theirsLabel = 'Their version';

  @property({ attribute: 'mine-content' })
  mineContent = '';

  @property({ attribute: 'theirs-content' })
  theirsContent = '';

  @property()
  title = 'Edit conflict detected';

  private resolve(winner: 'mine' | 'theirs') {
    this.dispatchEvent(new CustomEvent('wu-resolve', {
      bubbles: true,
      composed: true,
      detail: { winner },
    }));
  }

  render() {
    return html`
      <div class="header" role="alert">
        <span class="title">⚠️ ${this.title}</span>
      </div>
      <div class="diff">
        <div class="pane">
          <div class="pane-title">${this.mineLabel}</div>
          <div class="content" part="mine">${this.mineContent}</div>
        </div>
        <div class="pane">
          <div class="pane-title">${this.theirsLabel}</div>
          <div class="content" part="theirs">${this.theirsContent}</div>
        </div>
      </div>
      <div class="actions">
        <button @click=${() => this.resolve('theirs')}>Keep ${this.theirsLabel}</button>
        <button class="primary" @click=${() => this.resolve('mine')}>Keep ${this.mineLabel}</button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-conflict-resolver': WuConflictResolver;
  }
}
