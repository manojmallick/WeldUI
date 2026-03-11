import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-alert', standalone: true })
export class WuAlertDirective implements OnInit, OnDestroy {
  @Input() variant?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
  @Input() dismissible?: boolean;
  @Output() wuDismiss = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private dismissHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.dismissHandler = (e: Event) => this.wuDismiss.emit(e as CustomEvent);
    this.el.addEventListener('wu-dismiss', this.dismissHandler);
  }

  ngOnDestroy() {
    if (this.dismissHandler) this.el.removeEventListener('wu-dismiss', this.dismissHandler);
  }
}
