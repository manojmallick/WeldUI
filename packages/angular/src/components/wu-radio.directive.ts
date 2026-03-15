import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-radio-group', standalone: true })
export class WuRadioGroupDirective implements OnInit, OnDestroy {
  @Input() value?: string;
  @Input() name?: string;
  @Input() disabled?: boolean;
  @Input() orientation?: 'horizontal' | 'vertical';

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

@Directive({ selector: 'wu-radio', standalone: true })
export class WuRadioDirective {
  @Input() value?: string;
  @Input() disabled?: boolean;
  @Input() label?: string;
}
