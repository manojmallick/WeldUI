import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-sortable', standalone: true })
export class WuSortableDirective implements OnInit, OnDestroy {
  @Input() group?: string;
  @Input() animation?: number;
  @Input() disabled?: boolean;

  @Output() wuSortEnd = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private sortEndHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.sortEndHandler = (e: Event) => this.wuSortEnd.emit(e as CustomEvent);
    this.el.addEventListener('wu-sort-end', this.sortEndHandler);
  }

  ngOnDestroy() {
    if (this.sortEndHandler) this.el.removeEventListener('wu-sort-end', this.sortEndHandler);
  }
}
