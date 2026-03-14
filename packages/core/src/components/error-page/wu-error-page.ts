import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './wu-error-page.styles.js';

const DEFAULT_TITLES: Record<string, string> = {
  '400': 'Bad Request',
  '401': 'Unauthorised',
  '403': 'Access Denied',
  '404': 'Page Not Found',
  '408': 'Request Timeout',
  '500': 'Internal Server Error',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
};

const DEFAULT_DESCRIPTIONS: Record<string, string> = {
  '400': "The server couldn't understand the request. Please check the URL or contact support.",
  '401': 'You need to be authenticated to access this page. Please sign in and try again.',
  '403': "You don't have permission to access this page. Contact your administrator if this is a mistake.",
  '404': "We can't find the page you're looking for. It may have been moved or deleted.",
  '408': 'The request took too long to process. Please check your connection and try again.',
  '500': 'Something went wrong on our end. Our team has been notified.',
  '502': 'The server received an invalid response. Please try again in a moment.',
  '503': 'This service is temporarily unavailable. Please try again shortly.',
  '504': 'The server took too long to respond. Please try again in a moment.',
};

/**
 * A full-page error display for HTTP error codes and custom error states.
 *
 * @element wu-error-page
 *
 * @slot icon - Custom icon or illustration (overrides the default code display)
 * @slot actions - Action buttons (e.g., "Go home", "Try again")
 *
 * @csspart code - The large error code number
 * @csspart title - The error title text
 * @csspart description - The error description text
 * @csspart actions - The actions wrapper
 *
 * @cssprop --wu-error-code-color - Colour of the large error code
 * @cssprop --wu-error-title-color - Colour of the title
 * @cssprop --wu-error-desc-color - Colour of the description
 *
 * @example
 * ```html
 * <wu-error-page code="404">
 *   <wu-button slot="actions" variant="primary" onclick="history.back()">Go back</wu-button>
 * </wu-error-page>
 * ```
 */
@customElement('wu-error-page')
export class WuErrorPage extends LitElement {
  static styles = styles;

  /** HTTP status code to display */
  @property({ reflect: true })
  code = '404';

  /** Custom title — overrides the default for the given code */
  @property()
  title = '';

  /** Custom description — overrides the default for the given code */
  @property()
  description = '';

  private _resolvedTitle() {
    return this.title || DEFAULT_TITLES[this.code] || 'An error occurred';
  }

  private _resolvedDescription() {
    return this.description || DEFAULT_DESCRIPTIONS[this.code] || 'An unexpected error occurred. Please try again.';
  }

  render() {
    return html`
      <div class="icon" aria-hidden="true">
        <slot name="icon">
          <span class="code" part="code">${this.code}</span>
        </slot>
      </div>

      <p class="title" part="title">${this._resolvedTitle()}</p>
      <p class="description" part="description">${this._resolvedDescription()}</p>

      <div class="actions" part="actions">
        <slot name="actions"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-error-page': WuErrorPage;
  }
}
