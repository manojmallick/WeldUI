import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-file-upload', standalone: true })
export class WuFileUploadDirective implements OnInit, OnDestroy {
  @Input() accept?: string;
  @Input() multiple?: boolean;
  @Input() disabled?: boolean;
  @Input() hint?: string;
  @Output() wuFileSelect = new EventEmitter<CustomEvent>();
  @Output() wuFileRemove = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private selectHandler?: (e: Event) => void;
  private removeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.selectHandler = (e: Event) => this.wuFileSelect.emit(e as CustomEvent);
    this.removeHandler = (e: Event) => this.wuFileRemove.emit(e as CustomEvent);
    this.el.addEventListener('wu-file-select', this.selectHandler);
    this.el.addEventListener('wu-file-remove', this.removeHandler);
  }

  ngOnDestroy() {
    if (this.selectHandler) this.el.removeEventListener('wu-file-select', this.selectHandler);
    if (this.removeHandler) this.el.removeEventListener('wu-file-remove', this.removeHandler);
  }
}
