import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-color-picker', standalone: true })
export class WuColorPickerDirective implements OnInit, OnDestroy {
  @Input() value?: string;
  @Input() alpha?: boolean;
  @Input() format?: string;
  @Input() disabled?: boolean;
  @Input() label?: string;

  @Output() wuChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
  }
}
