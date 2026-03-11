import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styles } from './wu-modal.styles.js';

/**
 * A modal dialog built on the native HTML `<dialog>` element with focus trap and scroll lock.
 *
 * @element wu-modal
 *
 * @slot - Default slot for modal body content
 * @slot footer - Action buttons or custom footer content
 *
 * @event wu-open - Emitted when the modal opens
 * @event wu-close - Emitted when the modal closes (reason: 'escape' | 'backdrop' | 'button' | 'api')
 *
 * @csspart base - The native dialog element
 * @csspart header - The modal header section
 * @csspart body - The modal body section
 * @csspart footer - The modal footer section
 *
 * @cssprop --wu-modal-bg - Modal background colour
 * @cssprop --wu-modal-width - Modal max width
 * @cssprop --wu-modal-radius - Modal border radius
 * @cssprop --wu-modal-backdrop - Backdrop overlay colour
 */
@customElement('wu-modal')
export class WuModal extends LitElement {
  static styles = styles;

  /** Whether the modal is open */
  @property({ type: Boolean, reflect: true })
  open = false;

  /** Modal title — used as heading and aria-labelledby target */
  @property()
  label = '';

  /** Whether clicking the backdrop closes the modal */
  @property({ type: Boolean, attribute: 'close-on-backdrop' })
  closeOnBackdrop = true;

  /** Hide the close (×) button */
  @property({ type: Boolean, attribute: 'hide-close' })
  hideClose = false;

  @state() private _hasFooter = false;

  @query('dialog') private _dialog!: HTMLDialogElement;

  private _previouslyFocused: HTMLElement | null = null;

  override updated(changed: Map<string, unknown>): void {
    if (changed.has('open')) {
      if (this.open) {
        this._openDialog();
      } else {
        this._closeDialog('api');
      }
    }
  }

  private _openDialog(): void {
    if (!this._dialog) return;
    this._previouslyFocused = document.activeElement as HTMLElement;
    this._dialog.showModal();
    document.body.style.overflow = 'hidden';
    this._dialog.focus();
    this.dispatchEvent(new CustomEvent('wu-open', { bubbles: true, composed: true }));
  }

  private _closeDialog(reason: 'escape' | 'backdrop' | 'button' | 'api'): void {
    if (!this._dialog?.open) return;
    this._dialog.close();
    document.body.style.overflow = '';
    this._previouslyFocused?.focus();
    this.open = false;
    this.dispatchEvent(new CustomEvent('wu-close', {
      bubbles: true,
      composed: true,
      detail: { reason },
    }));
  }

  private _onBackdropClick(e: MouseEvent): void {
    if (!this.closeOnBackdrop) return;
    // Only close if click is directly on <dialog> (the backdrop area)
    if (e.target === this._dialog) {
      this._closeDialog('backdrop');
    }
  }

  private _onKeydown(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      e.preventDefault();
      this._closeDialog('escape');
    }
    if (e.key === 'Tab') {
      this._trapFocus(e);
    }
  }

  private _trapFocus(e: KeyboardEvent): void {
    const focusable = Array.from(
      this._dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    ).filter(el => !el.hasAttribute('disabled'));

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first) return;

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  private _onFooterSlotChange(e: Event): void {
    const slot = e.target as HTMLSlotElement;
    this._hasFooter = slot.assignedNodes({ flatten: true }).length > 0;
  }

  render() {
    return html`
      <dialog
        part="base"
        aria-labelledby="modal-title"
        aria-modal="true"
        @click=${this._onBackdropClick}
        @keydown=${this._onKeydown}
      >
        <div part="header" class="modal-header">
          <h2 id="modal-title" class="modal-title">${this.label}</h2>
          ${!this.hideClose ? html`
            <button
              class="close-btn"
              aria-label="Close modal"
              @click=${() => this._closeDialog('button')}
            >✕</button>
          ` : ''}
        </div>
        <div part="body" class="modal-body">
          <slot></slot>
        </div>
        <div part="footer" class="${this._hasFooter ? 'modal-footer' : 'modal-footer no-footer'}">
          <slot name="footer" @slotchange=${this._onFooterSlotChange}></slot>
        </div>
      </dialog>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-modal': WuModal;
  }
}
