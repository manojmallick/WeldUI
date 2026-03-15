import { Directive, ElementRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-context-menu', standalone: true })
export class WuContextMenuDirective implements OnInit, OnDestroy {
  @Output() wuSelect = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private selectHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.selectHandler = (e: Event) => this.wuSelect.emit(e as CustomEvent);
    this.el.addEventListener('wu-select', this.selectHandler);
  }

  ngOnDestroy() {
    if (this.selectHandler) this.el.removeEventListener('wu-select', this.selectHandler);
  }
}
