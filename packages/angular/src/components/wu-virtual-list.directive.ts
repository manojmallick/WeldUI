import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-virtual-list', standalone: true })
export class WuVirtualListDirective implements OnInit, OnDestroy {
  @Input() itemHeight?: number;
  @Input() overscan?: number;

  @Output() wuScroll = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private scrollHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.scrollHandler = (e: Event) => this.wuScroll.emit(e as CustomEvent);
    this.el.addEventListener('wu-scroll', this.scrollHandler);
  }

  ngOnDestroy() {
    if (this.scrollHandler) this.el.removeEventListener('wu-scroll', this.scrollHandler);
  }
}
