import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-json-viewer.styles.js';

type JsonPrimitive = string | number | boolean | null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type JsonValue = JsonPrimitive | JsonValue[] | Record<string, any>;

/**
 * Collapsible JSON tree viewer.
 *
 * @element wu-json-viewer
 */
@customElement('wu-json-viewer')
export class WuJsonViewer extends LitElement {
  static styles = styles;

  @property({ type: Object }) data: JsonValue = null;
  @property({ type: Number, attribute: 'expand-depth' }) expandDepth = 2;

  private renderValue(value: JsonValue, depth = 0): unknown {
    if (value === null) return html`<span class="null">null</span>`;
    if (typeof value === 'boolean') return html`<span class="bool">${String(value)}</span>`;
    if (typeof value === 'number') return html`<span class="num">${value}</span>`;
    if (typeof value === 'string') return html`<span class="str">"${value}"</span>`;
    if (Array.isArray(value)) return this.renderArray(value, depth);
    if (typeof value === 'object') return this.renderObject(value as Record<string, JsonValue>, depth);
    return html``;
  }

  private renderArray(arr: JsonValue[], depth: number) {
    if (arr.length === 0) return html`<span class="bracket">[]</span>`;
    const expanded = depth < this.expandDepth;
    return html`
      <wu-json-node ?expanded=${expanded} label="Array(${arr.length})">
        <div class="entries">
          ${arr.map((v, i) => html`
            <div class="entry">
              <span class="index">${i}</span>
              <span class="colon">:</span>
              ${this.renderValue(v, depth + 1)}
            </div>
          `)}
        </div>
      </wu-json-node>
    `;
  }

  private renderObject(obj: Record<string, JsonValue>, depth: number) {
    const keys = Object.keys(obj);
    if (keys.length === 0) return html`<span class="bracket">{}</span>`;
    const expanded = depth < this.expandDepth;
    return html`
      <wu-json-node ?expanded=${expanded} label="{${keys.length}}">
        <div class="entries">
          ${keys.map((k) => html`
            <div class="entry">
              <span class="key">"${k}"</span>
              <span class="colon">:</span>
              ${this.renderValue(obj[k], depth + 1)}
            </div>
          `)}
        </div>
      </wu-json-node>
    `;
  }

  override render() {
    return html`<div class="viewer" role="tree">${this.renderValue(this.data)}</div>`;
  }
}

/**
 * Internal collapsible node (not intended for direct use).
 * @element wu-json-node
 */
@customElement('wu-json-node')
export class WuJsonNode extends LitElement {
  static styles = css`
    :host { display: block; }
    .toggle { cursor: pointer; user-select: none; display: inline-flex; align-items: center; gap: 4px; background: none; border: none; color: var(--wu-color-text-secondary); font-family: var(--wu-font-mono); font-size: var(--wu-text-xs); padding: 0; outline: none; }
    .toggle:focus-visible { box-shadow: var(--wu-focus-ring); }
    .arrow { display: inline-block; transition: transform 0.15s; font-size: 10px; }
    .arrow.open { transform: rotate(90deg); }
    .content { padding-left: 16px; }
  `;

  @property({ type: Boolean, reflect: true }) expanded = true;
  @property() label = '';

  override render() {
    return html`
      <button class="toggle" type="button" @click=${() => { this.expanded = !this.expanded; }} aria-expanded=${String(this.expanded)}>
        <span class="arrow ${this.expanded ? 'open' : ''}">▶</span>
        <span>${this.label}</span>
      </button>
      ${this.expanded ? html`<div class="content"><slot></slot></div>` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-json-viewer': WuJsonViewer;
    'wu-json-node': WuJsonNode;
  }
}
