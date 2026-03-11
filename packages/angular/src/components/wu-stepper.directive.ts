import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-stepper', standalone: true })
export class WuStepperDirective implements OnInit, OnDestroy {
  @Input() activeStep?: number;
  @Input() linear?: boolean;
  @Input() vertical?: boolean;
  @Output() wuStepChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuStepChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-step-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-step-change', this.changeHandler);
  }
}

@Directive({ selector: 'wu-step', standalone: true })
export class WuStepDirective {
  @Input() label?: string;
  @Input() description?: string;
  @Input() status?: 'pending' | 'active' | 'complete' | 'error';
  @Input() disabled?: boolean;
}
