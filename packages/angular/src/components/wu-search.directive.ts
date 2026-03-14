import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-search', standalone: true })
export class WuSearchDirective implements OnInit, OnDestroy {
  @Input() value?: string;
  @Input() placeholder?: string;
  @Input() loading?: boolean;
  @Input() clearable?: boolean;
  @Input() debounce?: number;

  @Output() wuSearch = new EventEmitter<CustomEvent>();
  @Output() wuClear  = new EventEmitter<CustomEvent>();
  @Output() wuChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private searchHandler?: (e: Event) => void;
  private clearHandler?:  (e: Event) => void;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.searchHandler = (e: Event) => this.wuSearch.emit(e as CustomEvent);
    this.clearHandler  = (e: Event) => this.wuClear.emit(e as CustomEvent);
    this.changeHandler = (e: Event) => this.wuChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-search', this.searchHandler);
    this.el.addEventListener('wu-clear',  this.clearHandler);
    this.el.addEventListener('wu-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.searchHandler) this.el.removeEventListener('wu-search', this.searchHandler);
    if (this.clearHandler)  this.el.removeEventListener('wu-clear',  this.clearHandler);
    if (this.changeHandler) this.el.removeEventListener('wu-change', this.changeHandler);
  }
}
