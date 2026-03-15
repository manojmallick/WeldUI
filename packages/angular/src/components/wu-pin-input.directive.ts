import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-pin-input', standalone: true })
export class WuPinInputDirective implements OnInit, OnDestroy {
  @Input() length?: number;
  @Input() value?: string;
  @Input() type?: 'numeric' | 'alphanumeric';
  @Input() disabled?: boolean;
  @Input() placeholder?: string;

  @Output() wuChange = new EventEmitter<CustomEvent>();
  @Output() wuComplete = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;
  private completeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuChange.emit(e as CustomEvent);
    this.completeHandler = (e: Event) => this.wuComplete.emit(e as CustomEvent);
    this.el.addEventListener('wu-change', this.changeHandler);
    this.el.addEventListener('wu-complete', this.completeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
    if (this.completeHandler) this.el.removeEventListener('wu-complete', this.completeHandler);
  }
}
