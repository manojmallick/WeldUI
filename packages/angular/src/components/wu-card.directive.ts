import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-card', standalone: true })
export class WuCardDirective implements OnInit, OnDestroy {
  @Input() interactive?: boolean;
  @Output() wuClick = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private clickHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.clickHandler = (e: Event) => this.wuClick.emit(e as CustomEvent);
    this.el.addEventListener('wu-click', this.clickHandler);
  }

  ngOnDestroy() {
    if (this.clickHandler) this.el.removeEventListener('wu-click', this.clickHandler);
  }
}
