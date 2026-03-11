import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy, OnChanges } from '@angular/core';

@Directive({ selector: 'wu-command', standalone: true })
export class WuCommandDirective implements OnInit, OnDestroy, OnChanges {
  @Input() open?: boolean;
  @Input() items?: Record<string, unknown>[];
  @Input() placeholder?: string;
  @Input() emptyMessage?: string;
  @Output() wuSelect = new EventEmitter<CustomEvent>();
  @Output() wuClose = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private selectHandler?: (e: Event) => void;
  private closeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.syncProperties();
    this.selectHandler = (e: Event) => this.wuSelect.emit(e as CustomEvent);
    this.closeHandler = (e: Event) => this.wuClose.emit(e as CustomEvent);
    this.el.addEventListener('wu-select', this.selectHandler);
    this.el.addEventListener('wu-close', this.closeHandler);
  }

  ngOnChanges() { this.syncProperties(); }

  ngOnDestroy() {
    if (this.selectHandler) this.el.removeEventListener('wu-select', this.selectHandler);
    if (this.closeHandler) this.el.removeEventListener('wu-close', this.closeHandler);
  }

  private syncProperties() {
    const el = this.el as any;
    if (this.items !== undefined) el.items = this.items;
  }
}
