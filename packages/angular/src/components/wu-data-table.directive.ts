import {
  Directive, ElementRef, EventEmitter, Input, Output,
  OnInit, OnDestroy, OnChanges, SimpleChanges
} from '@angular/core';
import type { WuDataTableColumn } from '@weldui/core';

@Directive({ selector: 'wu-data-table', standalone: true })
export class WuDataTableDirective implements OnInit, OnDestroy, OnChanges {
  @Input() columns?: WuDataTableColumn[];
  @Input() rows?: Record<string, unknown>[];
  @Input() total?: number;
  @Input() page?: number;
  @Input('page-size') pageSize?: number;
  @Input() loading?: boolean;
  @Input() selectable?: boolean;
  @Input() searchable?: boolean;
  @Input('empty-message') emptyMessage?: string;

  @Output() wuPageChange      = new EventEmitter<CustomEvent>();
  @Output() wuSortChange      = new EventEmitter<CustomEvent>();
  @Output() wuSearchChange    = new EventEmitter<CustomEvent>();
  @Output() wuSelectionChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private handlers: [string, (e: Event) => void][] = [];

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    const add = (ev: string, fn: (e: Event) => void) => {
      this.el.addEventListener(ev, fn);
      this.handlers.push([ev, fn]);
    };
    add('wu-page-change',      (e) => this.wuPageChange.emit(e as CustomEvent));
    add('wu-sort-change',      (e) => this.wuSortChange.emit(e as CustomEvent));
    add('wu-search-change',    (e) => this.wuSearchChange.emit(e as CustomEvent));
    add('wu-selection-change', (e) => this.wuSelectionChange.emit(e as CustomEvent));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['columns'] && this.columns !== undefined) (this.el as any).columns = this.columns;
    if (changes['rows']    && this.rows    !== undefined) (this.el as any).rows    = this.rows;
  }

  ngOnDestroy() {
    this.handlers.forEach(([ev, fn]) => this.el.removeEventListener(ev, fn));
  }
}
