import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-speed-dial', standalone: true })
export class WuSpeedDialDirective implements OnInit, OnDestroy {
  @Input() icon?: string;
  @Input() placement?: string;
  @Input() direction?: string;

  @Output() wuActionClick = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private actionClickHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.actionClickHandler = (e: Event) => this.wuActionClick.emit(e as CustomEvent);
    this.el.addEventListener('wu-action-click', this.actionClickHandler);
  }

  ngOnDestroy() {
    if (this.actionClickHandler) this.el.removeEventListener('wu-action-click', this.actionClickHandler);
  }
}
