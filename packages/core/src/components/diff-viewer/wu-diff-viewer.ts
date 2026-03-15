import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styles } from './wu-diff-viewer.styles.js';

export type DiffLine = { type: 'unchanged' | 'added' | 'removed'; content: string; lineOld?: number; lineNew?: number };

/**
 * Side-by-side or unified diff viewer.
 *
 * @element wu-diff-viewer
 */
@customElement('wu-diff-viewer')
export class WuDiffViewer extends LitElement {
  static styles = styles;

  @property({ type: Array }) lines: DiffLine[] = [];
  @property({ reflect: true }) mode: 'unified' | 'split' = 'unified';
  @property() filename = '';

  override render() {
    return html`
      <div class="wrapper">
        ${this.filename ? html`<div class="filename">${this.filename}</div>` : ''}
        <div class="table-wrap" role="table" aria-label="Code diff">
          ${repeat(
            this.lines,
            (_, i) => i,
            (line) => html`
              <div class="row type-${line.type}" role="row">
                <span class="gutter old" role="cell">${line.lineOld ?? ''}</span>
                <span class="gutter new" role="cell">${line.lineNew ?? ''}</span>
                <span class="sign" role="cell">${line.type === 'added' ? '+' : line.type === 'removed' ? '-' : ' '}</span>
                <span class="content" role="cell">${line.content}</span>
              </div>
            `,
          )}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-diff-viewer': WuDiffViewer;
  }
}
