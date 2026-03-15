import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-keyboard-shortcuts.styles.js';

export type ShortcutEntry = { keys: string[]; description: string; group?: string };

/**
 * A keyboard shortcut reference table.
 *
 * @element wu-keyboard-shortcuts
 */
@customElement('wu-keyboard-shortcuts')
export class WuKeyboardShortcuts extends LitElement {
  static styles = styles;

  @property({ type: Array }) shortcuts: ShortcutEntry[] = [];
  @property() heading = 'Keyboard shortcuts';

  private grouped(): Map<string, ShortcutEntry[]> {
    const map = new Map<string, ShortcutEntry[]>();
    for (const s of this.shortcuts) {
      const g = s.group ?? 'General';
      if (!map.has(g)) map.set(g, []);
      map.get(g)!.push(s);
    }
    return map;
  }

  override render() {
    const groups = this.grouped();
    return html`
      <div class="wrapper">
        <h2 class="heading">${this.heading}</h2>
        ${[...groups.entries()].map(
          ([group, items]) => html`
            <section class="group">
              <h3 class="group-heading">${group}</h3>
              <dl class="list">
                ${repeat(
                  items,
                  (_s, i) => `${group}-${i}`,
                  (s) => html`
                    <div class="row">
                      <dt class="desc">${s.description}</dt>
                      <dd class="keys">${s.keys.map((k) => html`<kbd>${k}</kbd>`)}</dd>
                    </div>
                  `,
                )}
              </dl>
            </section>
          `,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-keyboard-shortcuts': WuKeyboardShortcuts;
  }
}
