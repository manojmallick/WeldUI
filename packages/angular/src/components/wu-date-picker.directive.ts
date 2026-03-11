import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-date-picker', standalone: true })
export class WuDatePickerDirective implements OnInit, OnDestroy {
  @Input() value?: string;
  @Input() placeholder?: string;
  @Input() min?: string;
  @Input() max?: string;
  @Input() open?: boolean;
  @Output() wuDateChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuDateChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-date-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-date-change', this.changeHandler);
  }
}
