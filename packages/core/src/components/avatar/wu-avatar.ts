import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styles } from './wu-avatar.styles.js';

/**
 * An avatar component that displays a user image or initials fallback.
 *
 * @element wu-avatar
 *
 * @csspart base - The avatar container element
 *
 * @cssprop --wu-avatar-size - Width and height of the avatar
 * @cssprop --wu-avatar-radius - Border radius
 * @cssprop --wu-avatar-bg - Background colour (shown when no image)
 * @cssprop --wu-avatar-color - Text colour for initials
 */
@customElement('wu-avatar')
export class WuAvatar extends LitElement {
  static styles = styles;

  /** Image source URL */
  @property()
  src?: string;

  /** Alt text for the image */
  @property()
  alt?: string;

  /** Initials to display when no image is available */
  @property()
  initials?: string;

  /** Size variant */
  @property({ reflect: true })
  size: 'sm' | 'md' | 'lg' | 'xl' = 'md';

  @state() private _imgError = false;

  private _handleImgError() {
    this._imgError = true;
  }

  override render() {
    const showImage = this.src && !this._imgError;
    return html`
      <div part="base" class="avatar" role="img" aria-label=${ifDefined(this.alt ?? this.initials)}>
        ${showImage
          ? html`<img src=${this.src!} alt=${ifDefined(this.alt)} @error=${this._handleImgError} />`
          : html`${this.initials ?? ''}`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-avatar': WuAvatar;
  }
}
