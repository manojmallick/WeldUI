import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-tag', standalone: true })
export class WuTagDirective implements OnInit, OnDestroy {
  @Input() variant?: string;
  @Input() size?: 'sm' | 'md' | 'lg';
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
