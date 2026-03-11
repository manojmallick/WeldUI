import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-pagination', standalone: true })
export class WuPaginationDirective implements OnInit, OnDestroy {
  @Input() page?: number;
  @Input() totalPages?: number;
  @Input() showInfo?: boolean;
  @Input() totalItems?: number;
  @Input() pageSize?: number;
  @Output() wuPageChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuPageChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-page-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-page-change', this.changeHandler);
  }
}
