import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-changelog.styles.js';

export type ChangelogEntry = { version: string; date: string; changes: { type: 'added' | 'fixed' | 'changed' | 'removed'; text: string }[] };

/**
 * Renders a version history / changelog list.
 *
 * @element wu-changelog
 */
@customElement('wu-changelog')
export class WuChangelog extends LitElement {
  static styles = styles;

  @property({ type: Array }) entries: ChangelogEntry[] = [];

  private typeLabel(type: string) {
    const map: Record<string, string> = { added: 'Added', fixed: 'Fixed', changed: 'Changed', removed: 'Removed' };
    return map[type] ?? type;
  }

  override render() {
    return html`
      <div class="changelog">
        ${this.entries.length === 0
          ? html`<p class="empty">No changelog entries.</p>`
          : repeat(
              this.entries,
              (e) => e.version,
              (e) => html`
                <section class="entry" aria-label="Version ${e.version}">
                  <div class="version-row">
                    <span class="version">${e.version}</span>
                    <time class="date">${e.date}</time>
                  </div>
                  <ul class="changes">
                    ${repeat(
                      e.changes,
                      (_c, i) => `${e.version}-${i}`,
                      (c) => html`
                        <li class="change">
                          <span class="badge type-${c.type}">${this.typeLabel(c.type)}</span>
                          <span class="change-text">${c.text}</span>
                        </li>
                      `,
                    )}
                  </ul>
                </section>
              `,
            )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-changelog': WuChangelog;
  }
}
