import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-form', standalone: true })
export class WuFormDirective implements OnInit, OnDestroy {
  @Input() novalidate?: boolean;
  @Input() loading?: boolean;

  @Output() wuSubmit  = new EventEmitter<CustomEvent>();
  @Output() wuInvalid = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private submitHandler?:  (e: Event) => void;
  private invalidHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.submitHandler  = (e: Event) => this.wuSubmit.emit(e as CustomEvent);
    this.invalidHandler = (e: Event) => this.wuInvalid.emit(e as CustomEvent);
    this.el.addEventListener('wu-submit',  this.submitHandler);
    this.el.addEventListener('wu-invalid', this.invalidHandler);
  }

  ngOnDestroy() {
    if (this.submitHandler)  this.el.removeEventListener('wu-submit',  this.submitHandler);
    if (this.invalidHandler) this.el.removeEventListener('wu-invalid', this.invalidHandler);
  }
}
