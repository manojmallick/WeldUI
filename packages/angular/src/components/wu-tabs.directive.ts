import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-tabs', standalone: true })
export class WuTabsDirective implements OnInit, OnDestroy {
  @Input() orientation?: 'horizontal' | 'vertical';
  @Input() activePanel?: string;
  @Output() wuTabChange = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private changeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.changeHandler = (e: Event) => this.wuTabChange.emit(e as CustomEvent);
    this.el.addEventListener('wu-tab-change', this.changeHandler);
  }

  ngOnDestroy() {
    if (this.changeHandler) this.el.removeEventListener('wu-tab-change', this.changeHandler);
  }
}

@Directive({ selector: 'wu-tab', standalone: true })
export class WuTabDirective {
  @Input() panel?: string;
  @Input() disabled?: boolean;
}

@Directive({ selector: 'wu-tab-panel', standalone: true })
export class WuTabPanelDirective {
  @Input() name?: string;
}
