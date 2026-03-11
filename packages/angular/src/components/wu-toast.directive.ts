import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-toast', standalone: true })
export class WuToastDirective implements OnInit, OnDestroy {
  @Input() variant?: 'info' | 'success' | 'warning' | 'danger';
  @Input() duration?: number;
  @Input() dismissible?: boolean;
  @Output() wuClose = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private closeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.closeHandler = (e: Event) => this.wuClose.emit(e as CustomEvent);
    this.el.addEventListener('wu-close', this.closeHandler);
  }

  ngOnDestroy() {
    if (this.closeHandler) this.el.removeEventListener('wu-close', this.closeHandler);
  }
}

@Directive({ selector: 'wu-toast-provider', standalone: true })
export class WuToastProviderDirective {
  @Input() position?: string;
}
