import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-tool-call-display.styles.js';

/**
 * Displays an AI tool invocation with inputs and outputs.
 *
 * @element wu-tool-call-display
 */
@customElement('wu-tool-call-display')
export class WuToolCallDisplay extends LitElement {
  static styles = styles;

  /** Name of the tool that was called */
  @property({ attribute: 'tool-name' })
  toolName = '';

  /** Status of the tool call */
  @property({ reflect: true })
  status: 'running' | 'success' | 'error' = 'success';

  /** Input arguments as a JSON string */
  @property()
  input = '';

  /** Output result as a JSON string */
  @property()
  output = '';

  private formatJSON(str: string) {
    try {
      return JSON.stringify(JSON.parse(str), null, 2);
    } catch {
      return str;
    }
  }

  private get statusLabel() {
    switch (this.status) {
      case 'running': return '⟳ Running';
      case 'success': return '✓ Done';
      case 'error': return '✗ Error';
    }
  }

  render() {
    return html`
      <div class="header" part="header">
        <span class="tool-name">${this.toolName || 'Tool Call'}</span>
        <span class="status-badge ${this.status}" aria-label="Status: ${this.status}">${this.statusLabel}</span>
      </div>
      <div class="body" part="body">
        <div class="section">
          <div class="section-title">Input</div>
          <pre>${this.formatJSON(this.input)}</pre>
        </div>
        <div class="section">
          <div class="section-title">Output</div>
          <pre>${this.formatJSON(this.output)}</pre>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-tool-call-display': WuToolCallDisplay;
  }
}
