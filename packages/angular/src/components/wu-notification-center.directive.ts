import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-notification-center', standalone: true })
export class WuNotificationCenterDirective implements OnInit, OnDestroy {
  @Input() placement?: string;

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
