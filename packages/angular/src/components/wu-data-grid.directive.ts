import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Directive({ selector: 'wu-data-grid', standalone: true })
export class WuDataGridDirective implements OnInit, OnDestroy, OnChanges {
  @Input() columns?: Record<string, unknown>[];
  @Input() data?: Record<string, unknown>[];
  @Input() totalRows?: number;
  @Input() page?: number;
  @Input() pageSize?: number;
  @Input() showToolbar?: boolean;
  @Input() emptyMessage?: string;
  @Output() wuSortChange = new EventEmitter<CustomEvent>();
  @Output() wuFilterChange = new EventEmitter<CustomEvent>();
  @Output() wuPageChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private sortHandler?: (e: Event) => void;
  private filterHandler?: (e: Event) => void;
  private pageHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.syncProperties();
    this.sortHandler = (e: Event) => this.wuSortChange.emit(e as CustomEvent);
    this.filterHandler = (e: Event) => this.wuFilterChange.emit(e as CustomEvent);
    this.pageHandler = (e: Event) => this.wuPageChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-sort-change', this.sortHandler);
    this.el.addEventListener('wu-filter-change', this.filterHandler);
    this.el.addEventListener('wu-page-change', this.pageHandler);
  }

  ngOnChanges() { this.syncProperties(); }

  ngOnDestroy() {
    if (this.sortHandler) this.el.removeEventListener('wu-sort-change', this.sortHandler);
    if (this.filterHandler) this.el.removeEventListener('wu-filter-change', this.filterHandler);
    if (this.pageHandler) this.el.removeEventListener('wu-page-change', this.pageHandler);
  }

  private syncProperties() {
    const el = this.el as any;
    if (this.columns !== undefined) el.columns = this.columns;
    if (this.data !== undefined) el.data = this.data;
  }
}
