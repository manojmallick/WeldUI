import { LitElement, html } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';
import { styles } from './wu-file-upload.styles.js';

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

/**
 * A file upload component with drag-and-drop support, file list, and validation.
 *
 * @element wu-file-upload
 *
 * @event wu-file-select - Emitted when files are selected. Detail: `{ files: File[] }`
 * @event wu-file-remove - Emitted when a file is removed. Detail: `{ file: File }`
 *
 * @csspart drop-zone - The drop/click target area
 * @csspart file-list - The list of selected files
 *
 * @cssprop --wu-fu-border - Default border color
 * @cssprop --wu-fu-border-active - Active/hover border color
 * @cssprop --wu-fu-bg - Background color
 */
@customElement('wu-file-upload')
export class WuFileUpload extends LitElement {
  static styles = styles;

  /** Accepted MIME types or file extensions (e.g. ".pdf,image/*") */
  @property()
  accept = '';

  /** Allow selecting multiple files */
  @property({ type: Boolean })
  multiple = false;

  /** Disable the upload zone */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /** Hint text shown below the drop message */
  @property()
  hint = '';

  @state() private _files: File[] = [];
  @state() private _dragOver = false;

  @query('input')
  private _input!: HTMLInputElement;

  private _onInputChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files) this._addFiles(input.files);
    input.value = '';
  }

  private _addFiles(fileList: FileSystemDirectoryEntry[] | FileList) {
    const files = Array.from(fileList as FileList);
    const toAdd = this.multiple ? files : files.slice(0, 1);
    this._files = this.multiple ? [...this._files, ...toAdd] : toAdd;
    this.dispatchEvent(new CustomEvent('wu-file-select', {
      bubbles: true,
      composed: true,
      detail: { files: [...this._files] },
    }));
  }

  private _remove(file: File) {
    this._files = this._files.filter((f) => f !== file);
    this.dispatchEvent(new CustomEvent('wu-file-remove', {
      bubbles: true,
      composed: true,
      detail: { file },
    }));
  }

  private _onDragOver(e: DragEvent) {
    e.preventDefault();
    this._dragOver = true;
  }

  private _onDragLeave() {
    this._dragOver = false;
  }

  private _onDrop(e: DragEvent) {
    e.preventDefault();
    this._dragOver = false;
    if (e.dataTransfer?.files) this._addFiles(e.dataTransfer.files);
  }

  private _onKeydown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._input.click();
    }
  }

  /** Get the currently selected files */
  get files(): File[] { return this._files; }

  private _renderFile(file: File) {
    return html`
      <li class="file-item">
        <span class="file-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        </span>
        <span class="file-name">${file.name}</span>
        <span class="file-size">${formatBytes(file.size)}</span>
        <button
          type="button"
          class="remove-btn"
          aria-label="Remove ${file.name}"
          @click=${() => this._remove(file)}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </li>
    `;
  }

  render() {
    return html`
      <input
        type="file"
        accept=${this.accept}
        ?multiple=${this.multiple}
        ?disabled=${this.disabled}
        @change=${this._onInputChange}
        aria-hidden="true"
        tabindex="-1"
      />
      <div
        part="drop-zone"
        class=${`drop-zone${this._dragOver ? ' drag-over' : ''}`}
        role="button"
        tabindex=${this.disabled ? -1 : 0}
        aria-label="Upload files. Drag and drop or click to browse"
        @click=${() => !this.disabled && this._input.click()}
        @keydown=${this._onKeydown}
        @dragover=${this._onDragOver}
        @dragleave=${this._onDragLeave}
        @drop=${this._onDrop}
      >
        <div class="drop-icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
        </div>
        <p class="drop-text">
          Drag and drop, or <strong @click=${(e: Event) => { e.stopPropagation(); this._input.click(); }}>browse</strong>
        </p>
        ${this.hint ? html`<p class="hint">${this.hint}</p>` : ''}
      </div>

      <ul
        class="file-list"
        part="file-list"
        aria-label="Selected files"
        ?hidden=${this._files.length === 0}
      >
        ${this._files.map((file) => this._renderFile(file))}
      </ul>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wu-file-upload': WuFileUpload;
  }
}
