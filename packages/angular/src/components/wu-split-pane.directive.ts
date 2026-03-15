import { Directive, ElementRef, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';

@Directive({ selector: 'wu-split-pane', standalone: true })
export class WuSplitPaneDirective implements OnInit, OnDestroy {
  @Input() direction?: 'horizontal' | 'vertical';
  @Input() initialSize?: number;
  @Input() minSize?: number;
  @Input() maxSize?: number;

  @Output() wuResize = new EventEmitter<CustomEvent>();

  private readonly el: HTMLElement;
  private resizeHandler?: (e: Event) => void;

  constructor(elRef: ElementRef<HTMLElement>) { this.el = elRef.nativeElement; }

  ngOnInit() {
    this.resizeHandler = (e: Event) => this.wuResize.emit(e as CustomEvent);
    this.el.addEventListener('wu-resize', this.resizeHandler);
  }

  ngOnDestroy() {
    if (this.resizeHandler) this.el.removeEventListener('wu-resize', this.resizeHandler);
  }
}
