import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-number', standalone: true })
export class WuNumberInputDirective implements OnInit, OnDestroy {
  @Input() value?: number;
  @Input() min?: number;
  @Input() max?: number;
  @Input() step?: number;
  @Input() precision?: number;
  @Input() disabled?: boolean;
  @Input() placeholder?: string;
  @Input() label?: string;
  @Input() name?: string;

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
