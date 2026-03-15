import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-switch', standalone: true })
export class WuSwitchDirective implements OnInit, OnDestroy {
  @Input() checked?: boolean;
  @Input() disabled?: boolean;
  @Input() label?: string;
  @Input() labelPosition?: 'left' | 'right';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() name?: string;
  @Input() value?: string;
  @Input() required?: boolean;

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
