import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-tree', standalone: true })
export class WuTreeDirective implements OnInit, OnDestroy {
  @Input() selection?: 'single' | 'multiple' | 'none';

  @Output() wuSelect = new EventEmitter<CustomEvent>();
  @Output() wuExpand = new EventEmitter<CustomEvent>();
  @Output() wuCollapse = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private selectHandler?: (e: Event) => void;
  private expandHandler?: (e: Event) => void;
  private collapseHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.selectHandler = (e: Event) => this.wuSelect.emit(e as CustomEvent);
    this.expandHandler = (e: Event) => this.wuExpand.emit(e as CustomEvent);
    this.collapseHandler = (e: Event) => this.wuCollapse.emit(e as CustomEvent);
    this.el.addEventListener('wu-select', this.selectHandler);
    this.el.addEventListener('wu-expand', this.expandHandler);
    this.el.addEventListener('wu-collapse', this.collapseHandler);
  }

  ngOnDestroy() {
    if (this.selectHandler) this.el.removeEventListener('wu-select', this.selectHandler);
    if (this.expandHandler) this.el.removeEventListener('wu-expand', this.expandHandler);
    if (this.collapseHandler) this.el.removeEventListener('wu-collapse', this.collapseHandler);
  }
}

@Directive({ selector: 'wu-tree-item', standalone: true })
export class WuTreeItemDirective {
  @Input() label?: string;
  @Input() expanded?: boolean;
  @Input() selected?: boolean;
  @Input() disabled?: boolean;
}
