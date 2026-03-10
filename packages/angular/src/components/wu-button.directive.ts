import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

/**
 * Directive wrapper for the <wu-button> Web Component.
 * Provides Angular @Input/@Output bindings.
 */
@Directive({
  selector: 'wu-button',
  standalone: true,
})
export class WuButtonDirective implements OnInit, OnDestroy {
  @Input() variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
  @Input() size?: 'sm' | 'md' | 'lg';
  @Input() disabled?: boolean;
  @Input() loading?: boolean;
  @Input() type?: 'button' | 'submit' | 'reset';

  @Output() wuClick = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private clickHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) {
    this.el = elRef.nativeElement;
  }

  ngOnInit() {
    this.clickHandler = (e: Event) => this.wuClick.emit(e as CustomEvent);
    this.el.addEventListener('wu-click', this.clickHandler);
  }

  ngOnDestroy() {
    if (this.clickHandler) {
      this.el.removeEventListener('wu-click', this.clickHandler);
    }
  }
}
