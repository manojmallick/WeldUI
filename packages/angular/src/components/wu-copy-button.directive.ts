import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-copy-button', standalone: true })
export class WuCopyButtonDirective implements OnInit, OnDestroy {
  @Input() value?: string;
  @Input() label?: string;
  @Input() successLabel?: string;
  @Input() feedbackDuration?: number;

  @Output() wuCopy = new EventEmitter<CustomEvent>();
  @Output() wuError = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private copyHandler?: (e: Event) => void;
  private errorHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.copyHandler = (e: Event) => this.wuCopy.emit(e as CustomEvent);
    this.errorHandler = (e: Event) => this.wuError.emit(e as CustomEvent);
    this.el.addEventListener('wu-copy', this.copyHandler);
    this.el.addEventListener('wu-error', this.errorHandler);
  }

  ngOnDestroy() {
    if (this.copyHandler) this.el.removeEventListener('wu-copy', this.copyHandler);
    if (this.errorHandler) this.el.removeEventListener('wu-error', this.errorHandler);
  }
}
