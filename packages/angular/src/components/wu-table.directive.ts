import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Directive({ selector: 'wu-table', standalone: true })
export class WuTableDirective implements OnInit, OnDestroy, OnChanges {
  @Input() columns?: Record<string, unknown>[];
  @Input() data?: Record<string, unknown>[];
  @Input() selectable?: boolean;
  @Input() sortKey?: string;
  @Input() sortDirection?: string;
  @Input() emptyMessage?: string;
  @Output() wuSort = new EventEmitter<CustomEvent>();
  @Output() wuSelect = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private sortHandler?: (e: Event) => void;
  private selectHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.syncProperties();
    this.sortHandler = (e: Event) => this.wuSort.emit(e as CustomEvent);
    this.selectHandler = (e: Event) => this.wuSelect.emit(e as CustomEvent);
    this.el.addEventListener('wu-sort', this.sortHandler);
    this.el.addEventListener('wu-select', this.selectHandler);
  }

  ngOnChanges() { this.syncProperties(); }

  ngOnDestroy() {
    if (this.sortHandler) this.el.removeEventListener('wu-sort', this.sortHandler);
    if (this.selectHandler) this.el.removeEventListener('wu-select', this.selectHandler);
  }

  private syncProperties() {
    const el = this.el as any;
    if (this.columns !== undefined) el.columns = this.columns;
    if (this.data !== undefined) el.data = this.data;
  }
}
