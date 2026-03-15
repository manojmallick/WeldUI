import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from './wu-kbd.styles.js';

/**
 * Renders a keyboard shortcut or key name with platform-native styling.
 *
 * @element wu-kbd
 *
 * @slot - The key name (e.g., "Ctrl", "⌘", "Enter")
 *
 * @example
 * ```html
 * <wu-kbd>⌘</wu-kbd><wu-kbd>K</wu-kbd>
 * ```
 */
@customElement('wu-kbd')
export class WuKbd extends LitElement {
  static styles = styles;

  override render() {
    return html`<kbd><slot></slot></kbd>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-kbd': WuKbd;
  }
}
